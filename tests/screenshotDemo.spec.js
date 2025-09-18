const{test, expect} = require('@playwright/test')

test('screenshot demo', async({page}) => {

    await page.goto('https://www.saucedemo.com/')
    await page.pause()

    await expect(page).toHaveScreenshot()


})