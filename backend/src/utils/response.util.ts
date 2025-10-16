import { Response } from 'express';

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
  errors?: Array<{ field: string; message: string }>;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
    totalPages?: number;
  };
  timestamp: string;
}

export class ResponseUtil {
  static success<T>(
    res: Response,
    data: T,
    message?: string,
    statusCode: number = 200
  ): Response {
    const response: ApiResponse<T> = {
      success: true,
      message,
      data,
      timestamp: new Date().toISOString(),
    };
    return res.status(statusCode).json(response);
  }

  static created<T>(res: Response, data: T, message?: string): Response {
    return this.success(res, data, message, 201);
  }

  static error(
    res: Response,
    error: string,
    statusCode: number = 400,
    errors?: Array<{ field: string; message: string }>
  ): Response {
    const response: ApiResponse = {
      success: false,
      error,
      errors,
      timestamp: new Date().toISOString(),
    };
    return res.status(statusCode).json(response);
  }

  static badRequest(res: Response, error: string): Response {
    return this.error(res, error, 400);
  }

  static unauthorized(res: Response, error: string = 'Unauthorized'): Response {
    return this.error(res, error, 401);
  }

  static forbidden(res: Response, error: string = 'Forbidden'): Response {
    return this.error(res, error, 403);
  }

  static notFound(res: Response, error: string = 'Resource not found'): Response {
    return this.error(res, error, 404);
  }

  static conflict(res: Response, error: string): Response {
    return this.error(res, error, 409);
  }

  static internalError(
    res: Response,
    error: string = 'Internal server error'
  ): Response {
    return this.error(res, error, 500);
  }

  static paginated<T>(
    res: Response,
    data: T[],
    page: number,
    limit: number,
    total: number,
    message?: string
  ): Response {
    const totalPages = Math.ceil(total / limit);
    const response: ApiResponse<T[]> = {
      success: true,
      message,
      data,
      meta: {
        page,
        limit,
        total,
        totalPages,
      },
      timestamp: new Date().toISOString(),
    };
    return res.status(200).json(response);
  }
}
