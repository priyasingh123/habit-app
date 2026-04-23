import { expect, test } from "@playwright/test";

test.describe("Habit List", () => {
  test.beforeEach(async ({ page }) => {
    await page.route("**/habits**", async (route) => {
      if (route.request().method() === "GET") {
        await route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify([
            { _id: "1", title: "Walk for 15 mins", isArchived: false },
            { _id: "2", title: "Read Book", isArchived: false },
            { _id: "3", title: "Meditate", isArchived: false },
          ]),
        });
      } else {
        await route.continue();
      }
    });
    await page.goto("/habit-app/");
    await page.getByTestId("day").filter({ hasText: /22/ }).first().click();
  });
  test("should display all the habits in list", async ({ page }) => {
    const habitDrawer = page.getByTestId("habit-drawer");
    await expect(habitDrawer).toBeVisible();
    await expect(habitDrawer.locator(".habit")).toHaveCount(3);
    await expect(habitDrawer.locator(".habit").nth(0)).toHaveText(
      "Walk for 15 mins",
    );
    await expect(habitDrawer.locator(".habit").nth(1)).toHaveText("Read Book");
    await expect(habitDrawer.locator(".habit").nth(2)).toHaveText("Meditate");
  });
});
