import { test, expect } from '@playwright/test';

import {LoginPage} from '../../LoginDemo/login.js'

test('test', async ({ page }) => {

  const Login = new LoginPage(page)

  var uname = 'Admin'
  var pass = 'admin123'

  await Login.openWebsite()
  await Login.login(uname,pass)
});