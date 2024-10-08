import { PlaywrightTestConfig } from "@playwright/test"

const config: PlaywrightTestConfig = {
    timeout: 60000,
    retries: 0, //how many times re-run the failed tests
    use: {
        headless: true, //(headful||headless)
        viewport: {
            width: 1280, height: 720
        },
        actionTimeout: 15000, //timeout for functions (clicks, locators)
        ignoreHTTPSErrors: true,
        video: "retain-on-failure",
        screenshot: "only-on-failure"
    },
    projects: [
        {
            name: "Chromium",
            use: {
                browserName: "chromium"
            }
        },
        {
            name: "Firefox",
            use: {
                browserName: "firefox"
            }
        }, {
            name: "Webkit",
            use: {
                browserName: "webkit"
            }
        }
    ]
}

export default config

// To run test with the specific config and project
// npx playwright test --config=playwright.config.ts --project=Chromium