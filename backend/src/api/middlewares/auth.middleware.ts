import { Request, Response, NextFunction } from 'express';
import { JWTUtil } from '../../utils/jwt.util';
import { ResponseUtil } from '../../utils/response.util';
import { prisma } from '../../config/prisma';

export interface AuthRequest extends Request {
  userId?: string;
  user?: {
    id: string;
    email: string;
    role: string;
  };
}

export class AuthMiddleware {
  static async authenticate(
    req: AuthRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        ResponseUtil.unauthorized(res, 'No token provided');
        return;
      }

      const token = authHeader.substring(7);

      const payload = JWTUtil.verifyAccessToken(token);

      // Fetch user from database
      const user = await prisma.user.findUnique({
        where: { id: payload.userId },
        select: {
          id: true,
          email: true,
          role: true,
        },
      });

      if (!user) {
        ResponseUtil.unauthorized(res, 'User not found');
        return;
      }

      req.userId = user.id;
      req.user = user;

      next();
    } catch (error: any) {
      ResponseUtil.unauthorized(res, error.message || 'Invalid token');
    }
  }

  static authorize(...roles: string[]) {
    return (req: AuthRequest, _res: Response, next: NextFunction): void => {
      if (!req.user) {
        ResponseUtil.unauthorized(_res);
        return;
      }

      if (!roles.includes(req.user.role)) {
        ResponseUtil.forbidden(_res, 'Insufficient permissions');
        return;
      }

      next();
    };
  }

  static optional(req: AuthRequest, _res: Response, next: NextFunction): void {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return next();
    }

    try {
      const token = authHeader.substring(7);
      const payload = JWTUtil.verifyAccessToken(token);
      req.userId = payload.userId;
    } catch {
      // Silently fail for optional auth
    }

    next();
  }
}
