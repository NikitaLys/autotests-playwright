import { expect, Locator, Page } from "@playwright/test";

export class HomePage {
    readonly url: string
    readonly page: Page
    readonly searchField: Locator
    readonly searchResultLinks: Locator

    constructor(page: Page) {
        this.url = "http://zero.webappsecurity.com/"
        this.page = page
        this.searchField = page.locator("#searchTerm")
        this.searchResultLinks = page.locator("li > a")
    }
    async visit() {
        await this.page.goto(this.url)
    }

    async search(searchQuery: string) {
        await this.searchField.fill(searchQuery)
        await this.page.keyboard.press('Enter')
    }

    async assertSearchResult() {

    }
}