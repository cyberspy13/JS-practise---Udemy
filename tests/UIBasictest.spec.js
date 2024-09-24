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

test('First Playwright test 3', async function({page})
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
    
    const cardTitles = page.locator(".card-body a");



    console.log(await cardTitles.nth(0).textContent());

    /*
    console.log(await cardTitles.nth(1).textContent());
    console.log(await cardTitles.nth(2).textContent());
    console.log(await cardTitles.nth(3).textContent());


    */


        // there is a way to get all of the phones names with one single step


        test.setTimeout(30000);
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);


console.log("Test world")


})

test.only('First Playwright test 4', async function ({page})
{
await page.goto("https://rahulshettyacademy.com/client");
test.setTimeout(60000);
let title = await page.title();
console.log("The title of the page is: " + title);

await expect(page).toHaveTitle("Let's Shop");
const register = page.locator("a.text-reset");
await register.click();
console.log(await page.title());

/*


const signIn = page.locator("[name=sign_up_method][value=email]");
await signIn.click();
console.log(await page.title());
const name = page.locator("[name=name][id=user_name]");
await name.fill("Mihail Lecari")
console.log("Name field filled successfully!");
const email = page.locator("[name=email][id=user_email]");
await email.fill("mihaillecari@gmail.com");
console.log("Email field filled successfully!");
const password = page.locator("[name=password][id=password]");
await password.fill("ChangeMe123");
console.log("The password field filled successfully!");
const registerAccount = page.locator("[data-testid=signup-button]");
await registerAccount.click();
console.log("The user logged in successfully!");
console.log(await page.title());

*/


})


test('First Playwright test 5', async function ({page})
{
await page.goto("https://sso.teachable.com/secure/9521/identity/sign_up/email");
test.setTimeout(60000);
let title = await page.title();
console.log("The title of the page is: " + title);


})