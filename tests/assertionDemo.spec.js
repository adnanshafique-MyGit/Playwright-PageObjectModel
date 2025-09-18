
const { test, expect } = require('@playwright/test')

test('Assertions Demo', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')
    await page.pause()


    //see if it gets username input control
    // const usernameAvailable = page.locator('[data-test="username"]')
    const passwordAvailable = page.locator('[data-test="password"]')
    let uname = 'standard_user'
    let pass = 'secret_sauce'

    if (page.locator('[data-test="username"]').isEnabled) {
        //click on the input control
        await page.locator('[data-test="username"]').click()
        //enter username
        await page.locator('[data-test="username"]').fill(uname)

    }
    //assert for username if enabled and disabled

    await expect(page.locator('[data-test="username"]')).toBeVisible()
    await expect.soft(page.locator('[data-test="username"]')).toBeHidden()

    //see if it gets password input control
    if (passwordAvailable.isVisible) {
        //click on the input control
        await passwordAvailable.click()
        // await page.locator('[data-test="password"]').click()
        //enter username
        await passwordAvailable.fill(pass)
        // await page.locator('[data-test="password"]').fill('secret_sauce')

    }

    //assert for password if enabled and disabled
    await expect(passwordAvailable).toBeEnabled()
    await expect.soft(passwordAvailable).toBeDisabled()

    const logButton = page.locator('[value="Login"]')

    await expect(logButton).toBeVisible()
    await expect.soft(logButton).toBeHidden()

    if (logButton.isEnabled) {

        await logButton.click()
    }

    await page.getByRole('button', { name: 'Open Menu' }).click()

    await page.locator('[data-test="logout-sidebar-link"]').click()
})