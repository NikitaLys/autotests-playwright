import { test, expect } from '@playwright/test'

test.describe.parallel("Search results", () => {
    const testUrl = "http://zero.webappsecurity.com/"
    let searchField
    let searchBtn

    test.beforeEach(async ({ page }) => {
        page.goto(testUrl)
        searchField = page.locator("#searchTerm")
    })

    test("Should find search result", async ({ page }) => {
        await searchField.fill("bank")
        await page.keyboard.press('Enter')
        const numberOfLinks = await page.locator('li > a')
        await expect(numberOfLinks).toHaveCount(2)
    })

})