const {test,expect}= require('@playwright/test');

test('Playwright Special locators', async ({page}) => {
  await page.goto('https://rahulshettyacademy.com/angularpractice/');
  await page.getByRole('textbox').nth(0).fill('Piyush Golu');
  await page.getByRole('textbox').nth(1).fill('piyushgolu9199@gmail.com');
  await page.getByLabel("Check me out if you Love IceCreams!").click();
  await page.getByLabel("Employed").check();
  await page.getByLabel("Gender").selectOption("Female");
  await page.getByRole('textbox').nth(3).type('28-08-1997');
  await page.pause('1000');
  
});