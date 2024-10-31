import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'

test.describe.parallel("Sort the items", () => {
    let loginPage: LoginPage
    let sortSelect

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        // loginPage.visit()
        loginPage.login("standard_user", "secret_sauce")
        sortSelect = page.locator('.product_sort_container')
    })

    test("The highest price first when sort by price (high to low) ", async ({ page }) => {
        await page.selectOption('.product_sort_container', 'hilo')
        let firstItemFullPrice = await page.locator('.inventory_item:nth-child(1) .inventory_item_price').textContent()
        let lastItemFullPrice = await page.locator('.inventory_item:last-child .inventory_item_price').textContent()

        let firstItemPrice = parseFloat(firstItemFullPrice?.replace("$", "") || "0")
        let lastItemPrice = parseFloat(lastItemFullPrice?.replace("$", "") || "0")

        await expect(lastItemPrice).toBeLessThan(firstItemPrice)
    })

})