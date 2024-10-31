import { PlaywrightTestConfig } from "@playwright/test"

const config: PlaywrightTestConfig = {
    timeout: 60000,
    retries: 0, //how many times re-run the failed tests
    testDir: "tests/api",
    use: {
        headless: true, //(headful||headless)
        viewport: {
            width: 1280, height: 720
        },
        actionTimeout: 10000, //timeout for functions (clicks, locators)
        ignoreHTTPSErrors: true,
        video: "off",
        screenshot: "off"
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