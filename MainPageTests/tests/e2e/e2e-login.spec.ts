import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'
import { HomePage } from '../../page-objects/HomePage'

test.describe.parallel("Login / Logout Flow", () => {
    let homePage: HomePage
    let loginPage: LoginPage

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        loginPage = new LoginPage(page)

        await homePage.visit()
         await homePage.goToLoginPage()
    })
    test("Negative scenarios for login", async ({ page }) => {
        await loginPage.login("invalid username", "invalid password")
        await loginPage.assertErrorMessage("Login and/or password are wrong.")
    })
    test("Positive scenario for login + logout", async ({ page }) => {
        await loginPage.login("username", "password")
        await homePage.visit()
        await homePage.logout()
        await homePage.assertLogout()
    })

})