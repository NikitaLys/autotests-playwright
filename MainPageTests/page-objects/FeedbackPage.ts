import { expect, Page, Locator } from "@playwright/test";

export class FeedbackPage {
    readonly url: string
    readonly page: Page
    readonly nameField: Locator
    readonly emailField: Locator
    readonly subjectField: Locator
    readonly commentField: Locator
    readonly sendBtn: Locator
    readonly clearBtn: Locator
    readonly feedbackHeading: Locator

    constructor(page: Page) {
        this.url = "http://zero.webappsecurity.com/feedback.html"
        this.page = page
        this.nameField = page.locator("#name")
        this.emailField = page.locator("#email")
        this.subjectField = page.locator("#subject")
        this.commentField = page.locator("#comment")
        this.sendBtn = page.locator("[name=submit]")
        this.clearBtn = page.locator("[name=clear]")
        this.feedbackHeading = page.locator("#feedback-title")
    }

    async visit() {
        await this.page.goto(this.url)
    }

    async fillForm(name: string, email: string, subject: string, comment: string) {
        await this.nameField.fill(name)
        await this.emailField.fill(email)
        await this.subjectField.fill(subject)
        await this.commentField.fill(comment)
    }

    async resetForm(){
        await this.clearBtn.click()
    }
    async submitForm(){
        await this.sendBtn.click()
    }
    async assertReset(){
        await expect(this.nameField).toBeEmpty()
        await expect(this.emailField).toBeEmpty()
        await expect(this.subjectField).toBeEmpty()
        await expect(this.commentField).toBeEmpty()
    }

    async feedbackSent(){
        await expect(this.page).toHaveURL("http://zero.webappsecurity.com/sendFeedback.html")
        await this.feedbackHeading.isVisible()
    }
}