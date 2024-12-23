const{test,expect} = require('@playwright/test')

test('Radio button',async ({page})=>{
    
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

await page.locator("//input[@value='radio1']").check();


await page.pause();
})

test('Radio button',async ({page})=>{
    
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    
})

await page.pause();