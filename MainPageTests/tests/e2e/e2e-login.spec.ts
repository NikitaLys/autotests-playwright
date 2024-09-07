import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'

test.describe.parallel("Login / Logout Flow", () => {
    let loginPage: LoginPage
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        await loginPage.visit()
    })
    test("Negative scenarios for login", async ({ page }) => {
        await loginPage.login("invalid username", "invalid password")
        await loginPage.assertErrorMessage("Epic sadface: Username and password do not match any user in this service")
    })
    test("Positive scenario for login + logout", async ({ page }) => {
        await loginPage.login("standard_user", "secret_sauce")
        await loginPage.logout()
        await loginPage.assertLogout()
    })

})