
exports.LoginPage = class LoginPage {
    
    
    constructor(page) {
        this.page = page
        this.username_textbox = page.locator('xpath=//input[@placeholder="Username"]')
        this.password_textbox = page.locator('xpath=//input[@type="password"]')
        this.login_button = page.locator('//button[@type="submit"]')
    }

    async openWebsite() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }


    async login(uname, pass) {
        await this.username_textbox.fill(uname)
        await this.password_textbox.fill(pass)
        await this.login_button.click()

    }

}