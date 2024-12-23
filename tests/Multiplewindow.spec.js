const{test,expext,chromium} = require ('@playwright/test')


test('window handling', async ({  }) => {

//context-new window
//parenttab -new tab

const browser = await chromium.launch();
//first window
const context1 = await browser.newContext();

//first window-first tab
const parenttab1 = await context1.newPage();
await parenttab1.goto('https://www.facebook.com/')

//first window-second tab
const parenttab2 = await context1.newPage();
await parenttab2.goto('https://instagram.com/')

//second window-first tab
const context2 = await browser.newContext();
const parenttab3 = await context2.newPage();
await parenttab3.goto('https://x.com/i/flow/login')
//second window-second tab
const parenttab4 = await context2.newPage();
await parenttab4.goto('https://www.snapchat.com/')
await parenttab4.waitForTimeout(3000)
//sencond window-thirdtab
const parenttab5 = await context2.newPage();
await parenttab5.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await parenttab5.waitForTimeout(5000)
const newTab =  context2.waitForEvent('page');
await parenttab5.locator("//a[text()='OrangeHRM, Inc']").click();



await parenttab5.pause();

})