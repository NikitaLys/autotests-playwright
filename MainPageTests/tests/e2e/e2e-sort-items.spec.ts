import { test, expect } from '@playwright/test'

test.describe.parallel("Sort the items", () => {
    const testUrl = 'https://www.saucedemo.com/'
    let loginField
    let passwordField
    let signinBtn
    let sortSelect

    test.beforeEach(async ({ page }) => {
        loginField = page.locator('#user-name')
        passwordField = page.locator('#password')
        signinBtn = page.locator('text=Login')
        sortSelect = page.locator('.product_sort_container')

        await page.goto(testUrl)
        await loginField.fill('standard_user')
        await passwordField.fill('secret_sauce')
        await signinBtn.click()
    })

    test.only("The highest price first when sort by price (high to low) ", async ({ page }) => {
        await page.selectOption('.product_sort_container', 'hilo')
        let firstItemFullPrice = await page.locator('.inventory_item:nth-child(1) .inventory_item_price').textContent()
        let lastItemFullPrice = await page.locator('.inventory_item:last-child .inventory_item_price').textContent()
      
        let firstItemPrice = parseFloat(firstItemFullPrice?.replace("$", "") || "0")
        let lastItemPrice = parseFloat(lastItemFullPrice?.replace("$", "") || "0")

        await expect(lastItemPrice).toBeLessThan(firstItemPrice)
    })

})