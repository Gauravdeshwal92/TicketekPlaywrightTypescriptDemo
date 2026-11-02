import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

export const ENV = {
  showUrl: process.env.SHOW_URL || 'https://premier.ticketek.com.au/shows/show.aspx?sh=ESPLOAD',
  authLoginUrl: process.env.LOGIN_API_URL || 'https://premier.ticketek.com.au/Membership/Login.aspx',
  credentials: {
    email: process.env.test_username || '',
    password: process.env.test_password || '',
  }
};