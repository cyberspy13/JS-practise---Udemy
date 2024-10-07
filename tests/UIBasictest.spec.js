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
await userEmail.fill("kerraprouk24@gmail.com");
console.log("The entered email is: " + await userEmail.inputValue());

const userMobile = page.locator('#userMobile');
await userMobile.fill("1112223334");
console.log("The entered mobile phone no. is: " + await userMobile.inputValue());

//const occupation = page.locator("[formcontrolname='occupation']");
const occupation = page.locator('select[formcontrolname="occupation"]')

await occupation.selectOption({ value:'3: Engineer' });
console.log("The entered occupation is: Engineer");

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

const genderButtonSelection = page.locator('input[type="radio"][value="Male"]');
await genderButtonSelection.check();
console.log("The Male radio button has been selected");

const password = page.locator("[id=userPassword]"); //#userPassword
await password.fill("ChangeMe123");
console.log("The password has been entered successfully.");

const confirmPassword = page.locator("[id=confirmPassword]");
await confirmPassword.fill("ChangeMe123");
console.log("The password has been confirmed successfully.");

const tickBox = page.locator("input[formcontrolname='required']");
await tickBox.check();

const registerAccount = page.locator("input[id='login']");
await registerAccount.click()

const login = page.locator("button[routerlink='/auth']");
await login.click();

await userEmail.fill("kerraprouk11@gmail.com");
console.log("The email " + await userEmail.inputValue() + " has been entered to the Log In page");

const userPassword = page.locator("#userPassword");
await userPassword.fill("ChangeMe123");
console.log("The password " + await userPassword.inputValue() + " has been entered to the Log In page");

const loginToTheCard = page.locator('#login');
await loginToTheCard.click();



const titleCaption = page.locator("div[class='card-body']");

// we need to have this line in terms of synchronisation

//console.log ("The caption for the first product is: " + await titleCaption.locator('h5 b').nth(0).textContent());

//but if we have the line below we can comment the line above. THe system will hold the execution and sync automatically
// wait method to show all the products on the page. We need to wait until all this call are made
// the code is:

//await page.waitForLoadState('networkidle'); // not working all the time

// we can use this instead

await titleCaption.locator("h5 b").first().waitFor();

/*
console.log ("The caption for the second product is: " + await titleCaption.locator('h5 b').nth(1).textContent());
console.log ("The caption for the third product is: " + await titleCaption.locator('h5 b').nth(2).textContent());
*/

//another way to print the all captions is(you have to leave the first titleCaption value displayed to be able to see the whole textCOntents values):

const titleAllCaption = await titleCaption.locator('h5 b').allTextContents();

console.log("The product title captions are: " + titleAllCaption);
console.log("The price for the first product " + await titleCaption.locator('h5 b').nth(0).textContent() + " is: "

 + await titleCaption.locator("div[class='text-muted']").nth(0).textContent());

console.log("The price for the first product " + await titleCaption.locator('h5 b').nth(1).textContent() + " is: "

+ await titleCaption.locator("div[class='text-muted']").nth(1).textContent());

console.log("The price for the first product " + await titleCaption.locator('h5 b').nth(2).textContent() + " is: "

 + await titleCaption.locator("div[class='text-muted']").nth(2).textContent());

console.log(`The title of the page is: ${title}`);

//await expect(page).toHaveTitle("Let's Shop");

})


test('First Playwright test 5', async function ({page})
{
await page.goto("https://rahulshettyacademy.com/client/");
test.setTimeout(60000);
let title = await page.title();
console.log("The title of the page is: " + title);


//const register = page.locator("a.text-reset");
//await register.click();

const userEmail = page.locator('input#userEmail');
await userEmail.fill("kerraprouk11@gmail.com");
console.log("The entered email is: " + await userEmail.inputValue());

const password = page.locator("input#userPassword"); //#userPassword
await password.fill("ChangeMe123");
console.log("The password has been entered successfully.");

const login = page.locator("input[name=login]");
await login.click();

const viewCard = page.locator("button[class='btn w-40 rounded']");
await viewCard.nth(0).click()

const addToTheCard = page.locator("button[class='btn btn-primary']");
await addToTheCard.click();

const contShopping = page.locator(".continue"); //.continue - by class name //text=Continue Shopping
await contShopping.click();

await viewCard.nth(1).click()
await addToTheCard.click();
await contShopping.click();

await viewCard.nth(2).click()
await addToTheCard.click();
await contShopping.click();

const cart = page.locator("button[class='btn btn-custom'] i");
await cart.nth(2).click();

console.log("My cart has 3 selected items");

})
test('First Playwright test 6', async function ({page})
{
await page.goto("https://rahulshettyacademy.com/client/");
test.setTimeout(60000);
let title = await page.title();
console.log("The title of the page is: " + title);


//const register = page.locator("a.text-reset");
//await register.click();

const userEmail = page.locator('input#userEmail');
await userEmail.fill("kerraprouk11@gmail.com");
console.log("The entered email is: " + await userEmail.inputValue());

const password = page.locator("input#userPassword"); //#userPassword
await password.fill("ChangeMe123");
console.log("The password has been entered successfully.");

const login = page.locator("input[name=login]");
await login.click();


})