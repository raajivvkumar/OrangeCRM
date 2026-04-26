import { test, Page } from "@playwright/test";

test.describe("First Test Case", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("First TC", async ({ page }) => {
    console.log(page.url);
  });
  test("Second TC", async ({ page }) => {
    console.log(page.url);
  });
});
