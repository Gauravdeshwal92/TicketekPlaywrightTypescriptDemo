import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

export const ENV = {
  showUrl: process.env.showUrl,
  authLoginUrl: process.env.authLoginUrl,
  credentials: {
    email: process.env.test_username || '',
    password: process.env.test_password || '',
  }
};