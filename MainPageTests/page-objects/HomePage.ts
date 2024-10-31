import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
    readonly page: Page
    readonly searchField: Locator
    readonly searchResultLinks: Locator
    readonly signinBtn: Locator
    readonly onlineBankBtn: Locator
    readonly profileDropdown: Locator
    readonly logoutBtn: Locator

    constructor(page: Page) {
        this.page = page
        this.searchField = page.locator('#searchTerm')
        this.searchResultLinks = page.locator('li > a')
        this.signinBtn = page.locator('#signin_button')
        this.onlineBankBtn = page.locator('#onlineBankingMenu')
        this.profileDropdown = page.locator('.dropdown-toggle')
        this.logoutBtn = page.locator('#logout_sidebar_link')
    }
    async visit() {
        await this.page.goto('zero.webappsecurity.com')
    }
    async goToLoginPage() {
        await this.signinBtn.click()
    }

    async goToOnlineBanking() { 
        await this.onlineBankBtn.click()
    }

    async search(searchQuery: string) {
        await this.searchField.fill(searchQuery)
        await this.page.keyboard.press('Enter')
    }
    async logout() {
        await this.profileDropdown.click()
        await this.logoutBtn.click()
    }

    async assertLogout() {
        await expect(this.signinBtn).toBeVisible()
    }

    async assertSearchResult() {

    }
}