import { test, expect } from "@playwright/test";

test.describe("Habit List CRUD", () => {
  test.beforeEach(async ({ page }) => {
    await page.route("**/dayrecords**", async (route) => {
      const method = route.request().method();
      if (method === "GET") {
        await route.fulfill({
          status: 200,
          json: { date: "1", completed: ["1", "3"] },
        });
      } else {
        await route.continue();
      }
    });
    await page.route("**/habits**", async (route) => {
      const method = route.request().method();
      if (method === "GET") {
        await route.fulfill({
          status: 200,
          json: [
            { _id: "1", title: "Walk for 15 mins", isArchived: false },
            { _id: "2", title: "Read Book", isArchived: false },
            { _id: "3", title: "Meditate", isArchived: false },
          ],
        });
      } else if (method === "POST") {
        await route.fulfill({
          status: 201,
          contentType: "application/json",
          json: [
            { _id: "1", title: "Walk for 15 mins", isArchived: false },
            { _id: "2", title: "Read Book", isArchived: false },
            { _id: "3", title: "Meditate", isArchived: false },
            { _id: "4", title: "New Added", isArchived: false },
          ],
        });
      } else {
        await route.continue();
      }
    });

    await page.goto("/habit-app/");
    await page.getByTestId("day").filter({ hasText: /22/ }).first().click();
  });

  test("should add new habit to the list and display it in the habit drawer", async ({
    page,
  }) => {
    const habitDrawer = page.getByTestId("habit-drawer");
    await expect(habitDrawer).toBeVisible();
    page.locator("#new_text_input").fill("New Added");
    page.locator(".new_btn").click();
    await expect(habitDrawer.locator(".habit").last()).toHaveText("New Added");
  });
});
