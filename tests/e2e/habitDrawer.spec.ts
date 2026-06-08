import { test, expect } from "@playwright/test";

test.describe("Habit Drawer", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/habit-app/");
  });

  test("should open habit drawer when date is clicked", async ({ page }) => {
    await page
      .getByTestId("day")
      .filter({ hasText: /^[1-9]|[12][0-9]|3[01]$/ })
      .first()
      .click();
    const drawer = page.getByTestId("habit-drawer");
    await expect(drawer).toBeVisible();
  });

  test("should show same date on drawer which date is clicked", async ({
    page,
  }) => {
    await page.getByTestId("day").filter({ hasText: /22/ }).first().click();
    const previousMonthDate = new Date(
      new Date().getFullYear(),
      new Date().getMonth() - 1,
      22,
    ).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const habitDrawer = page.getByTestId("habit-drawer");
    await expect(habitDrawer).toBeVisible();
    await expect(habitDrawer).toContainText(previousMonthDate);
  });

  test("should close habit drawer when clicked anywhere outside the drawer", async ({
    page,
  }) => {
    await page
      .getByTestId("day")
      .filter({ hasText: /^[1-9]|[12][0-9]|3[01]$/ })
      .first()
      .click();
    const drawer = page.getByTestId("habit-drawer");
    await expect(drawer).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(drawer).not.toBeVisible();
  });
});
