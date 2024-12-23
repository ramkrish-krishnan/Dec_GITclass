import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
  await page.goto('https://www.saucedemo.com/v1/');

  await page.waitForTimeout(2000)

   await page.locator("//input[@name='user-name']").fill('standard_user');

   await page.waitForTimeout(2000)
 
   await page.locator("//input[@name='password']").fill('secret_sauce');

   await page.waitForTimeout(2000)
   
   //await page.locator("input[@id='login-button']").click();

   await page.click(('#login-button'));

   await page.waitForTimeout(3000)

   await page.click("(//button[text()='ADD TO CART'])[6]");

   await page.waitForTimeout(2000)

   await page.click("//div[@id='shopping_cart_container']");

   await page.waitForTimeout(2000)

   await page.click("//a[text()='CHECKOUT']");

   await page.waitForTimeout(2000)

   await page.fill("//input[@id='first-name']",'Ram')

   await page.waitForTimeout(2000)

   await page.fill("//input[@id='last-name']",'Krish')

   await page.waitForTimeout(2000)

   await page.fill("//input[@id='postal-code']",'60091')

   await page.waitForTimeout(2000)

   await page.click("//input[@value='CONTINUE']");

   await page.waitForTimeout(2000)

   const paymentinfo = await page.locator("//div[text()='SauceCard #31337']").textContent();
   console.log("payment Info: "+paymentinfo);

   await page.waitForTimeout(2000)

   await page.click("//a[text()='FINISH']");

   await page.screenshot({path:'test-results/Screenshot/'+Date.now +'Result.png'});

   await page.pause()
   
   

});
