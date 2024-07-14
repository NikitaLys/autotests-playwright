import {test,expect} from '@playwright/test'

var testUrl = 'https://example.com'

test("example test", async ({page})=>{
await page.goto(testUrl)
const pageTitle = await page.locator('h1')
await expect(pageTitle).toContainText('Example Domain')
})

//
//to run the test with browswer launching
// npx playwright test --headed
//to run the test in chosen browser
// npx playwright test --browser=firefox
//to run the test in all browsers
// npx playwright test --browser=all
//example with combination
// npx playwright test --headed --browser=firefox
//to run specific test
// npx playwright test tests/path.to.test
