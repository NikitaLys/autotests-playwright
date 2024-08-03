import {test,expect} from '@playwright/test'

const testUrl = 'https://react-shopping-cart-67954.firebaseapp.com/'

test.describe.parallel('Parallel Tests Execution', () =>{
    test.beforeEach(async({page})=>{
        await page.goto(testUrl)  
    })

    test("Full page screenshot", async ({ page }) => {
        await page.screenshot({ path: 'screenshots/full_page_screenshot.png', fullPage: true})
    })
    
    test("Single element screenshot", async ({ page }) => {
        const productCard = await page.locator('.sc-uhudcz-0.iZZGui > .sc-124al1g-2.ddJZtb')
        await productCard.screenshot({ path: 'screenshots/product_card_screenshot.png'})
    })


})