const{test,expect}=require("@playwright/test")
test('Web table',async({page})=>{

    //nth row

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForTimeout(3000)
   
    //print rwo count
    const rows = await page.locator("//table[@name='BookTable']/tbody/tr");
    const rowscount = await rows.count();
    console.log("The row counts are "+rowscount);
    
    //print columns count
    const column = await page.locator("//table[@name='BookTable']/tbody/tr/th");
    const columncount = await column.count();
    console.log("The Column counts are "+columncount);
   
    //print third row values
    const thirdrow= await page.locator("//table[@name='BookTable']/tbody/tr[3]/td").allTextContents()
    console.log("The third row values are "+thirdrow);
    


    

} )