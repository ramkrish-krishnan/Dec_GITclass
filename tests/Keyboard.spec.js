const{test,expect} = require('@playwright/test')

test.only('Keyboard actions',async ({page})=>{
    
await page.goto('https://www.facebook.com/');
await page.waitForTimeout(2000)

await page.locator("//input[@id='email']").click();
await page.keyboard.insertText('abcd@gmail.com')
await page.waitForTimeout(2000)

//await page.keyboard.press('Control+A')
//await page.keyboard.press('Control+C')

await page.keyboard.down('Control')
await page.keyboard.press('A')
await page.keyboard.up('Control')
await page.waitForTimeout(2000)

await page.keyboard.press('Control+C')
await page.waitForTimeout(2000)

await page.keyboard.press('Tab');
await page.keyboard.press('Control+V')

await page.waitForTimeout(2000)

await page.keyboard.press('Enter')
await page.waitForTimeout(2000)

await page.pause();


});