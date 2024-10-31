import { expect, Locator, Page } from '@playwright/test'

export class LoginPage {
    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly signinBtn: Locator
    readonly errorMessage: Locator

 

    constructor(page: Page) {
        this.page = page
        this.usernameInput = page.locator('#user_login')
        this.passwordInput = page.locator('#user_password')
        this.signinBtn = page.locator('text=Sign in')
        this.errorMessage = page.locator('.alert')

    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.signinBtn.click()
    }
   

    async assertErrorMessage(errorMessage: string) {
        await expect(this.errorMessage).toContainText(errorMessage)
    }
 


}