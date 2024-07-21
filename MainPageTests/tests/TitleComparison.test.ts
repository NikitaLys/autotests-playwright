import {test,expect} from '@playwright/test'

var testUrl = 'https://example.com'

test("example test", async ({page})=>{
await page.goto(testUrl)
const pageTitle = await page.locator('h1')
await expect(pageTitle).toContainText('Example Domain')
})

