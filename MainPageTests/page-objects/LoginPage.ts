import { expect, Locator, Page } from '@playwright/test'

export class LoginPage {
    readonly url : string
    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly signinBtn: Locator
    readonly errorMessage: Locator
    readonly logoutBtn: Locator
    readonly burgerBtn: Locator
 

    constructor(page: Page) {
        this.url = "https://www.saucedemo.com/"
        this.page = page
        this.usernameInput = page.locator('#user-name')
        this.passwordInput = page.locator('#password')
        this.signinBtn = page.locator('text=Login')
        this.errorMessage = page.locator('[data-test=error]')
        this.logoutBtn = page.locator('#logout_sidebar_link')
        this.burgerBtn = page.locator('#react-burger-menu-btn')
    }

    async visit() {
        await this.page.goto(this.url)
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.signinBtn.click()
    }
    async logout() {
        await this.burgerBtn.click()
        await this.logoutBtn.click()
    }

    async assertErrorMessage(errorMessage: string) {
        await expect(this.errorMessage).toContainText(errorMessage)
    }
    async assertLogout() {
        await expect(this.page).toHaveURL(this.url)
    }


}