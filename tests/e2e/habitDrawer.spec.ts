import { test, expect } from "@playwright/test";

test.describe(() => {
  test("should open habit drawer when date is clicked", async ({ page }) => {
    await page.goto("/habit-app/");
    await page.getByTestId("day").first().click();
    const drawer = page.getByTestId("habit-drawer");
    await expect(drawer).toBeVisible({ timeout: 5000 });
  });
});
