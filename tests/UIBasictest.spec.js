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
    const userName = page.locator('#username');
    const signIn = page.locator('#signInBtn');
    const password =  page.locator("[type='password']");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    let title = await page.title();
    console.log(`The title of the page is: ${title}`);
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
    await userName.fill('mlecari');
    await password.fill('Learning123!');
    await signIn.click();
    test.setTimeout(60000);
    await page.locator("[style*='block']").textContent(); // exctracting method, grab the text 



// also we can use assertions - await expect(locator).toContainText()

    console.log(await page.locator("[style*='block']").textContent()); // we are using this style css structure because "style*" it could be NONE or BLOCk, either basically
    //await expect(page.locator("[style*='block']")).toContainText('Incorrect') // it will fail
    await expect(page.locator("[style*='block']")).toContainText('Incorrect') // it will pass
    test.setTimeout(500000);
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await password.fill("");
    await password.fill("learning");
    await signIn.click();
    test.setTimeout(500000);
    //console.log(await page.locator(".card-body a").first.textContent());   // it will ge t the first element in the array
    console.log(await page.locator(".card-body a").nth(0).textContent());
    console.log(await page.locator(".card-body a").nth(1).textContent());
    console.log(await page.locator(".card-body a").nth(2).textContent());
    console.log(await page.locator(".card-body a").nth(3).textContent());
})