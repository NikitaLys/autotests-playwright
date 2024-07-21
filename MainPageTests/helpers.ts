export async function loadShoppingpage(page) {
await page.goto('https://react-shopping-cart-67954.firebaseapp.com/')
}

export async function assertTitle(page) {
await page.waitForSelector('h1')    
}