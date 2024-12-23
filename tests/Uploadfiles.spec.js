const{test,expect} = require('@playwright/test')

test('File upload',async ({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.locator('#filesToUpload').setInputFiles('D:/JavaScript/Uploadfiles.txt');
    await page.waitForTimeout(3000)
    await page.pause();
})

test.only('Multiple File upload',async ({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.locator('#filesToUpload').setInputFiles(['D:/JavaScript/Uploadfiles.txt','D:/JavaScript/File2.txt']);
    await page.waitForTimeout(3000)
    await page.pause();
})
