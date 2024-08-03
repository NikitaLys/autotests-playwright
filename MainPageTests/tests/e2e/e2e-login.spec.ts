import { test, expect } from '@playwright/test'

test.describe.parallel("Login / Logout Flow", () => {
    const testUrl = 'https://www.saucedemo.com/'
    let loginField
    let passwordField
    let signinBtn

    test.beforeEach(async ({ page }) => {
        await page.goto(testUrl)
        loginField = page.locator('#user-name')
        passwordField = page.locator('#password')
        signinBtn = page.locator('text=Login')
    })
    test("Negative scenarios for login", async ({ page }) => {
        await loginField.fill('invalid username')
        await passwordField.fill('invalid password')
        await signinBtn.click()

        const errorMessage = await page.locator('[data-test=error]')
        await expect(errorMessage).toContainText('Epic sadface: Username and password do not match any user in this service')
    })
    test("Positive scenario for login + logout", async ({ page }) => {
        await loginField.fill('standard_user')
        await passwordField.fill('secret_sauce')
        await signinBtn.click()

        const logoutBtn = await page.locator('#logout_sidebar_link')
        await expect(logoutBtn).toBeVisible
        await page.click('#react-burger-menu-btn')
        await logoutBtn.click()
        await expect(page).toHaveURL(testUrl)
    })

})