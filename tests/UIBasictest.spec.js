const {test, expect} = require('@playwright/test');


test('First PLaywright test', async function({browser})   // alternative way to assign the function is ()=>
{

    // chrome browser
   const context = await  browser.newContext();
   const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/practice-project");
   console.log( await page.title());


});
test.only('First PLaywright test 2', async function({page})   // alternative way to assign the function is ()=>
    {
    
    await page.goto("https://google.com");
    console.log( await page.title());
    await expect(page).toHaveTitle("Google");



    });