const { test, expect } = require("@playwright/test");
const testData = require("../../fixtures/loginFixture.json");
const { authenticateUser1 } = require('../../utils/helper.spec.js');
test.beforeEach(async ({ page }) => {
  await page.goto("https://thinking-tester-contact-list.herokuapp.com/");
  await page.locator("#email").fill(testData.validcontact.email);
  await page.locator("#password").fill(testData.validcontact.password);
  await page.locator("#submit").click();
});
test.describe("add edit for contact", () => {
  test("add contact", async ({ page }) => {
    await page.locator("#add-contact").click();
    await page.locator("#firstName").fill(testData.validcontact.firstname);
    await page.locator("#lastName").fill(testData.validcontact.lastname);
    await page.locator("#lastName").fill(testData.validcontact.lastname);
    await page.locator("#lastName").fill(testData.validcontact.lastname);
    await page.locator("#lastName").fill(testData.validcontact.lastname);
    await page.locator("#submit").click();
  });
  test("Contact Edit Test", async ({context, page ,request}) => {
    const contact = new ContactPage(page);
    const Data = {"firstName":"hello","lastName":"world"};
    const accessToken = await authenticateUser1({request});
    const entityId = await createEntity(Data,accessToken); //euta function ho kun chai dynamic ho
    await intercept('https://thinking-tester-contact-list.herokuapp.com/contacts/**',{context,page});
    page.reload();
    await contact.contactEdit();
  });
}); 
