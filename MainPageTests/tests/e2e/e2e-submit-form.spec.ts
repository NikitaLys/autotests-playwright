import { test, expect } from '@playwright/test'
import { faker } from '@faker-js/faker'
import { FeedbackPage } from '../../page-objects/FeedbackPage'

test.describe.parallel("Feedback Form", () => {
    let feedbackPage: FeedbackPage
    let randomName
    let randomEmail
    let randomText

    test.beforeEach(async ({ page }) => {
        feedbackPage = new FeedbackPage(page)
        feedbackPage.visit()
        randomName = faker.person.fullName()
        randomEmail = faker.internet.email()
        randomText = faker.lorem.text()
        await feedbackPage.fillForm(randomName, randomEmail, randomText, randomText)
    })

    test("Reset feedback form", async ({ page }) => {
        await feedbackPage.resetForm()
        await feedbackPage.assertReset()
    })

    test("Submit feedback form", async ({ page }) => {
        await feedbackPage.submitForm()
        await feedbackPage.feedbackSent()
    })
})