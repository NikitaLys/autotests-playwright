import { test, expect } from '@playwright/test'

var testUrl = 'https://www.saucedemo.com/'


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

// CSS Selectors
// await page.click('button')
// await page.click('#id')
// await page.click('.class')

// Only visible CSS Selector
// await page.click('.class:visible')

// Xpath
// await page.click('//button')

// To assert NOT existing element
// NB! To assert varriable must be given
// var someLocator = await page.locator('someElement')
// await expect(someLocator).not.toBeVisible()

// Annotations
// To skip test
// test.skip("some test")...
// To run only one or few tests
// test.only("some test")...

// Tagging
// To run tagged test
// npx playwright test --grep @tag

// Test suite
// test.describe("Test suite",() =>{
// test("some test")...
// test("some another test")...
// }
// )

// @tags is used to run test by tag
// npx playwright test @tags
