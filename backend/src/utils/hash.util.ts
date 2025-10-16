import bcrypt from 'bcrypt';

export class HashUtil {
  private static readonly SALT_ROUNDS = 12;

  static async hash(value: string): Promise<string> {
    return bcrypt.hash(value, this.SALT_ROUNDS);
  }

  static async compare(value: string, hash: string): Promise<boolean> {
    return bcrypt.compare(value, hash);
  }

  static async hashPassword(password: string): Promise<string> {
    if (password.length < 8) {
      throw new Error('Password must be at least 8 characters long');
    }
    return this.hash(password);
  }

  static async verifyPassword(password: string, hash: string): Promise<boolean> {
    return this.compare(password, hash);
  }
}
