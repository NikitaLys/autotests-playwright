import { test, expect } from '@playwright/test'

const testUrl = 'https://www.saucedemo.com/'


test.describe("Login test suite", () => {

    test("Login with empty fields @login", async ({ page }) => {
        await page.goto(testUrl)
        await page.click('text=Login')
        const errorMessage = await page.locator('//*[@id="login_button_container"]/div/form/div[3]/h3')
        await expect(errorMessage).toContainText('Epic sadface: Username is required')
    })
    test("Login with valid data @validLogin", async ({ page }) => {
        await page.goto(testUrl)
        await page.locator('#user-name').fill('standard_user')
        await page.locator('#password').fill('secret_sauce')
        await page.click('text=Login')
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    })
})