import { test, expect } from '@playwright/test';

const logindata = { userEmail: 'piyushgolu9199@gmail.com', userPassword: 'Piyush@1997' };

// test.beforeAll('Session Storage', async ({browser}) => {
//  const context =  await  browser.newContext();
//    const page=    await context.newPage();
// await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
// await page.getByPlaceholder('email@example.com').fill('piyushgolu9199@gmail.com');
// await page.getByPlaceholder('enter your passsword').fill('Piyush@1997');
// await page.getByRole('button', { name: 'login' }).click();
// await page.waitForLoadState('networkidle');
// await context.storageState({path:'state.json'});
// })

test('Playwright Special locators', async ({page}) => {

    await page.goto('https://rahulshettyacademy.com/client/#/dashboard/dash');
});


test.only('Request API test', async ({request}) => {
  const response = await request.post('https://rahulshettyacademy.com/api/ecom/auth/login',

     {
    data: logindata,
  });

  // Debugging: print status and body
  console.log('Status:', response.status());
  console.log('Body:', await response.text());

  expect(response.ok()).toBeTruthy();
});
