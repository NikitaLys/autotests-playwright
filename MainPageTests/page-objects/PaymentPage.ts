import { expect, Locator, Page } from '@playwright/test'

export class PaymentPage {
    readonly page: Page
    readonly payeeSelector: Locator
    readonly payInfoBtn: Locator
    readonly accountSelector: Locator
    readonly amountInput: Locator
    readonly dateInput: Locator
    readonly descriptionInput: Locator
    readonly payBtn: Locator
    readonly message: Locator

    constructor(page: Page) {
        this.page = page
        this.payeeSelector = page.locator('#sp_payee')
        this.payInfoBtn = page.locator('#sp_get_payee_details')
        this.accountSelector = page.locator('#sp_account')
        this.amountInput = page.locator('#sp_amount')
        this.dateInput = page.locator('#sp_date')
        this.descriptionInput = page.locator('#sp_desription')
        this.payBtn = page.locator('#pay_saved_payees')
        this.message = page.locator('#alert_content > span')
    }

    async paySavedPayee(payee: string, account: string, amount: string, date: string, desription: string) {
        await this.payeeSelector.selectOption(payee)
        await this.accountSelector.selectOption(account)
        await this.amountInput.fill(amount)
        await this.dateInput.fill(date)
        await this.descriptionInput.fill(desription)
        await this.payBtn.click()
    }

    async assertSuccessMessage(){
        await expect(this.message).toBeVisible()
        await expect(this.message).toContainText('The payment was successfully submitted.')
    }

}