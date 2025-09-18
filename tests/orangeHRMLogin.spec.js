
import { test, expect } from '@playwright/test'

// This describe block to create/arrange tests in specific groups
test.describe('Login page tests using different locators', () => {

    // This is beforeEach block used to run login script before every test of the group
    test.beforeEach(async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    })

    // test to locate and assert elements using element properties
    test('Using elements properties', async ({ page }) => {

        var uname = page.locator('[name=username]')
        var pass = page.locator('[type=password]')

        // To check if element is enabled then provide value
        if (uname.isEnabled) {
            await uname.fill('Admin')
        }

        // Used different assertions on different elements
        await expect(uname).toBeVisible()
        await expect(pass).toBeVisible()
        await expect(page.getByText('Username : Admin')).toHaveCount(1)

        // To locate element and provide password
        await page.locator('[type=password]').fill('admin123')
        // To locate button and click
        await page.getByRole('button', { type: 'submit' }).click()
    })

    // Test to locate and assert elements using CSS Selectors
    test('Using CSS Selectors', async ({ page }) => {
        // Assert if expected and actual page URLs are matching
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // Locate username and provide value
        await page.locator("input[placeholder='Username']").fill('Admin')
        // Locate password and provide value
        await page.locator("input[placeholder='Password']").fill('admin123')
        // Locate button and click
        await page.locator("button[type='submit']").click()
    })

    // Test to locate and assert elements using xpath
    test('Using xpath', async ({ page }) => {
        // Assert if expected and actual page Titles are matching
        await expect(page).toHaveTitle('OrangeHRM')
        // Locate username and provide value
        await page.locator('xpath=//input[@placeholder="Username"]').fill('Admin')
        // Locate password and provide value
        await page.locator('xpath=//input[@type="password"]').fill('admin123')
        // Locate button and click
        await page.locator('//button[@type="submit"]').click()
    })

    // Test to locate and assert elements using placeholder
    test('Using placeholder', async ({ page }) => {
        // Locate username and provide value
        await page.getByPlaceholder('Username').fill('Admin')
        // Locate password and provide value
        await page.getByPlaceholder('Password').fill('admin123')
        // Locate button and click
        await page.getByRole('button', { type: 'submit' }).click()
    })
})