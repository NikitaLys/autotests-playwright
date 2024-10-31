import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'
import { HomePage } from '../../page-objects/HomePage'
import { PaymentPage } from '../../page-objects/PaymentPage'
import { Navbar } from '../../page-objects/components/Navbar'
import { OnlineBankingPage } from '../../page-objects/OnlineBankingPage'

test.describe.parallel.only("Pay", () => {
    let loginPage: LoginPage
    let homePage: HomePage
    let onlineBankingPage: OnlineBankingPage
    let paymentPage: PaymentPage
    let navbar: Navbar

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        loginPage = new LoginPage(page)
        paymentPage = new PaymentPage(page)
        navbar = new Navbar(page)
        onlineBankingPage = new OnlineBankingPage(page)

        homePage.visit()
        homePage.goToLoginPage()
        loginPage.login("username", "password")
        homePage.visit()
        homePage.goToOnlineBanking()
        onlineBankingPage.gotoPayBillsSection()
    })

    test("Pay saved payee", async ({ page }) => {
        paymentPage.paySavedPayee("wellsfargo", "5", "20", "09.09.2024", "for meat")
        paymentPage.assertSuccessMessage()
    })

})