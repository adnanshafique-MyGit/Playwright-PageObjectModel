import { test, expect, chromium } from '@playwright/test'

test.describe('Sauce Demo tests', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.saucedemo.com/')
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();


    })


    test('Homepage', async ({ page }) => {

        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="item-1-title-link"]').click();
        await page.locator('[data-test="add-to-cart"]').click();
        await page.locator('[data-test="inventory-item-name"]').click();
        await page.locator('[data-test="back-to-products"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();


    })


    test('Logout', async ({ page }) => {

        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.locator('[data-test="logout-sidebar-link"]').click();

    })

})