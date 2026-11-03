import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

export const ENV = {
  showUrl: process.env.SHOW_URL || '',
  authLoginUrl: process.env.AUTH_LOGIN_URL || '',
  credentials: {
    email: process.env.TEST_USER_EMAIL || '',
    password: process.env.TEST_USER_PASSWORD || '',
  }
};