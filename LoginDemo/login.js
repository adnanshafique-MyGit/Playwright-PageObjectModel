const { expect } = require("@playwright/test")

exports.LoginPage = class LoginPage {
    
    
    constructor(page) {
        this.page = page
        this.username_textbox = page.locator('xpath=//input[@placeholder="Username"]')
        this.password_textbox = page.locator('xpath=//input[@type="password"]')
        this.login_button = page.locator('//button[@type="submit"]')
    }

    async openWebsite(burl) {
        await this.page.goto(burl)
    }


    async login(uname, pass) {
        await this.username_textbox.fill(uname)
        await this.password_textbox.fill(pass)
        await this.login_button.click()
        await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    }

}