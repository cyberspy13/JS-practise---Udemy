const {test, expect} = require('@playwright/test');


test('First Playwright test', async function({browser})   // alternative way to assign the function is ()=>
{

    // chrome 
   //const browser = await chromium.launch({ headless: false });
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

const firstName = page.locator("[id='firstName']");
await firstName.fill("Mihail");
console.log("The entered first name is: " + await firstName.inputValue());

const lastName = page.locator('#lastName');
await lastName.fill("Lecari");
console.log("The entered last name is: " + await lastName.inputValue());

const userEmail = page.locator('#userEmail');
await userEmail.fill("kerraprouk@gmail.com");
console.log("The entered email is: " + await userEmail.inputValue());

const userMobile = page.locator('#userMobile');
await userMobile.fill("07857427232");
console.log("The entered mobile phone no. is: " + await userMobile.inputValue());

//const occupation = page.locator("[formcontrolname='occupation']");
const occupation = page.locator('select[formcontrolname="occupation"]')

await occupation.selectOption({ value:'3: Engineer' });
console.log("The entere occupation is: Engineer");

  // Get the title of the page
  console.log("The title of the page is: " + title);

  // Assert that the page has the expected title
  try {
    await expect(page).toHaveTitle("Let's Shop");
    console.log("The title matches 'Let's Shop'");
  } catch (error) {
    console.log("The title does not match 'Let's Shop'");
    // Delay and close browser if the assertion fails
    await new Promise(resolve => setTimeout(resolve, 5000)); 
    await browser.close();
    throw error;
  }








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