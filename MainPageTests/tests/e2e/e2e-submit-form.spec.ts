import { test, expect } from '@playwright/test'
import { faker } from '@faker-js/faker'

test.describe.parallel("Feedback Form", () => {
    const testUrl = "http://zero.webappsecurity.com/"
    let nameField
    let emailField
    let subjectField
    let commentField
    let sendBtn
    let clearBtn
    let feedbackHeading

    let randomName
    let randomEmail
    let randomText

    test.beforeEach(async ({ page }) => {
        await page.goto(testUrl)
        await page.click("#feedback")
        nameField = page.locator("#name")
        emailField = page.locator("#email")
        subjectField = page.locator("#subject")
        commentField = page.locator("#comment")
        sendBtn = page.locator("[name=submit]")
        clearBtn = page.locator("[name=clear]")
        feedbackHeading = page.locator("#feedback-title")

        randomName = faker.person.fullName()
        randomEmail = faker.internet.email()
        randomText = faker.lorem.text()

        await nameField.fill(randomName)
        await emailField.fill(randomEmail)
        await subjectField.fill(randomText)
        await commentField.fill(randomText)
    })

    test("Reset feedback form", async ({ page }) => {
        await clearBtn.click()
        await expect(nameField).toBeEmpty()
        await expect(emailField).toBeEmpty()
        await expect(subjectField).toBeEmpty()
        await expect(commentField).toBeEmpty()
    })

    test("Submit feedback form", async ({ page }) => {
        await sendBtn.click()
        await expect(page).toHaveURL('http://zero.webappsecurity.com/sendFeedback.html')
        await feedbackHeading.isVisible()
    })
})