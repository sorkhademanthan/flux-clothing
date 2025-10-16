import dotenv from 'dotenv';

dotenv.config();

interface EnvConfig {
  DATABASE_URL: string;
  JWT_SECRET: string;
  JWT_EXPIRES_IN: string;
  REFRESH_TOKEN_SECRET: string;
  REFRESH_TOKEN_EXPIRES_IN: string;
  PORT: number;
  NODE_ENV: 'development' | 'production' | 'test';
  FRONTEND_URL: string;
}

function validateEnv(): EnvConfig {
  const requiredEnvVars = [
    'DATABASE_URL',
    'JWT_SECRET',
    'REFRESH_TOKEN_SECRET',
  ];

  const missing = requiredEnvVars.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}`
    );
  }

  return {
    DATABASE_URL: process.env.DATABASE_URL!,
    JWT_SECRET: process.env.JWT_SECRET!,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '15m',
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET!,
    REFRESH_TOKEN_EXPIRES_IN: process.env.REFRESH_TOKEN_EXPIRES_IN || '7d',
    PORT: parseInt(process.env.PORT || '4000', 10),
    NODE_ENV: (process.env.NODE_ENV as any) || 'development',
    FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:3000',
  };
}

export const env = validateEnv();
