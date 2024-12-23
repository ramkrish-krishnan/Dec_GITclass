const{test,expect} = require('@playwright/test');
const { log } = require('console');

test('Dropdown',async ({page})=>{
    
await page.goto('https://testautomationpractice.blogspot.com/');
await page.waitForTimeout(3000)
// const Countries = await page.locator("//select[@id='country']").allTextContents();
// console.log("Country's are "+Countries);

const countries = await page.$$("//select[@id='country']");
for(const country of countries){
    const value = await country.textContent();
    console.log(value);
}
await page.pause();


})

test('google search',async ({page})=>{
    
    await page.goto('https://www.google.com/');
    await page.waitForTimeout(3000)
   
    
    
    })