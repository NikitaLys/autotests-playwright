import { test, expect } from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'

test.describe.parallel("Search results", () => {
    let homePage: HomePage
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        await homePage.visit()
    })
    test("Should find search result", async ({ page }) => {
        await homePage.search("bank")
        await expect(homePage.searchResultLinks).toHaveCount(2)
    })

})