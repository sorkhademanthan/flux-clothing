import jwt from 'jsonwebtoken';
import { env } from '../config/env';

export interface TokenPayload {
  userId: string;
  role?: string;
}

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
}

export class JWTUtil {
  static generateTokens(userId: string, role?: string): TokenPair {
    const payload: TokenPayload = { userId, role };

    const accessToken = jwt.sign(payload, env.JWT_SECRET, {
      expiresIn: env.JWT_EXPIRES_IN as string | number,
      issuer: 'flux-api',
      audience: 'flux-client',
    } as jwt.SignOptions);

    const refreshToken = jwt.sign(payload, env.REFRESH_TOKEN_SECRET, {
      expiresIn: env.REFRESH_TOKEN_EXPIRES_IN as string | number,
      issuer: 'flux-api',
      audience: 'flux-client',
    } as jwt.SignOptions);

    return { accessToken, refreshToken };
  }

  static verifyAccessToken(token: string): TokenPayload {
    try {
      return jwt.verify(token, env.JWT_SECRET, {
        issuer: 'flux-api',
        audience: 'flux-client',
      }) as TokenPayload;
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        throw new Error('Access token expired');
      }
      if (error instanceof jwt.JsonWebTokenError) {
        throw new Error('Invalid access token');
      }
      throw new Error('Token verification failed');
    }
  }

  static verifyRefreshToken(token: string): TokenPayload {
    try {
      return jwt.verify(token, env.REFRESH_TOKEN_SECRET, {
        issuer: 'flux-api',
        audience: 'flux-client',
      }) as TokenPayload;
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        throw new Error('Refresh token expired');
      }
      if (error instanceof jwt.JsonWebTokenError) {
        throw new Error('Invalid refresh token');
      }
      throw new Error('Token verification failed');
    }
  }

  static decodeToken(token: string): TokenPayload | null {
    try {
      return jwt.decode(token) as TokenPayload;
    } catch {
      return null;
    }
  }
}
