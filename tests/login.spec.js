import { test, expect } from '@playwright/test';

import {LoginPage} from '../LoginDemo/login.js'

import dotenv from 'dotenv';
import path from 'path';


dotenv.config({ path: path.resolve(__dirname, '.env') });

const uname = process.env.USER_NAME;
const pass = process.env.PASSWORD;
const burl = process.env.BASE_URL;

test('test', async ({ page }) => {
  
  const Login = new LoginPage(page)

  await Login.openWebsite(burl)
  await Login.login(uname,pass)
});