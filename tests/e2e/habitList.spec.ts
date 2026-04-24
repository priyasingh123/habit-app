import { expect, test } from "@playwright/test";

test.describe("Habit List", () => {
  test.beforeEach(async ({ page }) => {
    await page.route("**/dayrecords**", async (route) => {
      if (route.request().method() === "GET") {
        await route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({ date: "1", completed: ["1", "3"] }),
        });
      } else {
        await route.continue();
      }
    });
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

  test("should mark habit completed based on service response", async ({
    page,
  }) => {
    const habitDrawer = page.getByTestId("habit-drawer");

    await expect(habitDrawer).toBeVisible();

    const walkHabit = habitDrawer.locator(".habit").filter({
      hasText: "Walk for 15 mins",
    });

    await expect(walkHabit.locator(".check_icon")).toHaveAttribute(
      "data-completed",
      "true",
    );

    const meditateHabit = habitDrawer.locator(".habit").filter({
      hasText: "Meditate",
    });

    await expect(meditateHabit.locator(".check_icon")).toHaveAttribute(
      "data-completed",
      "true",
    );

    const readHabit = habitDrawer.locator(".habit").filter({
      hasText: "Read Book",
    });

    await expect(readHabit.locator(".check_icon")).toHaveAttribute(
      "data-completed",
      "false",
    );
  });

  test("should show correct percentage completed in summary section", async ({
    page,
  }) => {
    const summarySection = page.locator(".inner_circle");
    await expect(summarySection).toBeVisible();
    await expect(summarySection).toHaveText("66.67%");
  });
});
