import {expect,Locator,Page} from '@playwright/test'

export class OnlineBankingPage {
    readonly page: Page
    readonly payBillsLink : Locator

    constructor(page:Page){
        this.page = page
        this.payBillsLink = page.locator('#pay_bills_link')
    }

    async gotoPayBillsSection() {
        this.payBillsLink.click()
    }
}