const {test, expect} = require('@playwright/test');


test('First Playwright test', async function({browser})   // alternative way to assign the function is ()=>
{

    // chrome browser
   const context = await  browser.newContext();
   const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/practice-project");
   test.setTimeout(60000);
   console.log( await page.title());

   // we can use 2 selectors to identify web elements on the page:
   // css, xpath

   await page.locator('#name').fill("mlecari"); // locator use css id
   await page.locator("[type='email']").fill("mihaillecari@gmail.com"); // locator use type
   await page.locator('#form-submit').click();
   test.setTimeout(60000);
   console.log( await page.title());
   console.log('Test completed. The browser will remain open.');
   
});

test('First Playwright test 2', async function({page})   // alternative way to assign the function is ()=>
    {
    
    await page.goto("https://google.com");
    console.log( await page.title());
    await expect(page).toHaveTitle("Google");
    


    });

test.only('First Playwright test 3', async function({page})
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    let title = await page.title();
    console.log(`The title of the page is: ${title}`);
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
    await page.locator('#username').fill('mlecari');
    await page.locator("[type='password']").fill('Learning123!');
    await page.locator('#signInBtn').click();
    await page.locator("[style*='block']").textContent(); // exctracting method, grab the text 

// also we can use assertions - await expect(locator).toContainText()

    console.log(await page.locator("[style*='block']").textContent()); // we are using this style css structure because "style*" it could be NONE ot BLOCk, either basically
    await expect(page.locator("[style*='block']")).toContainText('Incorrectt') // it will fail
})