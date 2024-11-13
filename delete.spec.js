const { test, expect } = require("@playwright/test");
const testData = require("../../fixtures/loginFixture.json");
const { authenticateUser1 } = require('../../utils/helper.spec.js');
test.beforeEach(async ({ page }) => {
  await page.goto("https://thinking-tester-contact-list.herokuapp.com/");
  await page.locator("#email").fill(testData.validcontact.email);
  await page.locator("#password").fill(testData.validcontact.password);
  await page.locator("#submit").click();
});
test.describe("Delete contact", () => {
    test("Delete contact", async ({ page }) => {
      await page.locator("#delete-contact").click();
      
    });
  }); 
  