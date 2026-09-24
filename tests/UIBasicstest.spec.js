const {test,expect} = require('@playwright/test');

test('First Playwright Test', async ({page}) => {
  await page.goto('https://www.google.com/');
  console.log(await page.title());
  await expect(page).toHaveTitle('Google');
});

test('UI control', async ({page}) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await page.locator('[name="username"]').fill('rahulshettyacademy');
  await page.locator('#password').fill('Learning@830$3mK2');
  //await page.locator('#signInBtn').click();
  await page.locator('.checkmark').last().click();
  await expect(page.locator('.checkmark').last()).toBeChecked();
   const status=await page.locator('.checkmark').last().isChecked();
   console.log(status);
//validating link is blinking or not
await expect(page.locator('[href*=docu]')).toHaveClass('blinkingText');

});

//Handling child window
test('Handling child window', async ({browser}) => {
   const context= await browser.newContext();
   const page=     await context.newPage();
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  const link =  page.locator("[href*='doc']");

const [newpage]=await Promise.all([
     context.waitForEvent('page'),
     link.click()
]);
console.log(await newpage.title());

});

//Handling dynamic dropdown
test('Handling dynamic dropdown', async ({page}) => {
  await page.goto('https://www.yatra.com/');
  await page.locator("[title='New Delhi']").click();
  await page.locator("#input-with-icon-adornment").pressSequentially("Mum");
  await page.locator("div[class*='MuiBox-root css-134xwrj']").filter({hasText:'Navi Mumbai International Airport '}).click();

  
});

//Popup validation
test('Javascriptalert Popup validation', async ({page}) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  await page.locator("#alertbtn").click();
  page.on('dialog', dialog => dialog.accept());
   await page.locator("input#name").pressSequentially("PiyushSinha");
   //await page.pause();
   //Need to Mouse over on the element
await page.locator("#mousehover").hover();
await page.locator("div.mouse-hover-content").filter({hasText:'Top'}).click();
});

