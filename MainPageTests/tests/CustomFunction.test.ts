import { test, expect } from '@playwright/test'

import { loadShoppingpage, assertTitle } from '../helpers'

test('Custom helpers', async ({ page }) => {
    await loadShoppingpage(page)
})