const{test,expect} = require('@playwright/test')

test('Multiple dropdown',async ({page})=>{
    
await page.goto('https://testautomationpractice.blogspot.com/');
await page.waitForTimeout(1000);
// await page.selectOption("//select[@id='colors']",'Red');
// await page.selectOption("//select[@id='colors']",'Green');
// await page.selectOption("//select[@id='colors']",'Yellow');

const colors = await page.locator("//select[@id='colors']");
await page.pause();

})