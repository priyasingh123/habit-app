import { test, expect, Page, chromium } from "@playwright/test";

test.describe("Habit Calendar tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173/habit-app/");
  });

  test("should land on page with title 'habit-app'", async ({ page }) => {
    await expect(page).toHaveTitle("habit-app");
  });

  test("should display current month calender with correct number of days", async ({
    page,
  }) => {
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString("default", {
      month: "short",
    });
    const currentYear = currentDate.getFullYear();
    const daysInMonth = new Date(
      currentYear,
      currentDate.getMonth() + 1,
      0,
    ).getDate();
    const monthTitle = `${currentMonth} ${currentYear}`;
    const heading = page.getByText(monthTitle);

    await expect(heading).toBeVisible();
    const month = page.getByTestId(`month-${monthTitle}`);
    const realDays = month
      .getByTestId("day")
      .filter({ hasText: /^[1-9]|[12][0-9]|3[01]$/ });

    await expect(realDays).toHaveCount(daysInMonth);
  });

  test("should display next and previous month on landing page", async ({
    page,
  }) => {
    const currentDate = new Date();
    const nextMonthDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1,
    );
    const prevMonthDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1,
    );

    const previousMonth = prevMonthDate.toLocaleString("default", {
      month: "short",
    });
    const nextMonth = nextMonthDate.toLocaleString("default", {
      month: "short",
    });

    const previousMonthTitle = `${previousMonth} ${prevMonthDate.getFullYear()}`;
    const nextMonthTitle = `${nextMonth} ${nextMonthDate.getFullYear()}`;
    const heading = page.getByText(previousMonthTitle);
    await expect(heading).toBeVisible();
    const heading2 = page.getByText(nextMonthTitle);
    await expect(heading2).toBeVisible();
  });

  test("should display next to next month when next button is clicked", async ({
    page,
  }) => {
    const currentDate = new Date();
    const nextToNextMonthDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 2,
      1,
    );
    const nextToNextMonth = nextToNextMonthDate.toLocaleString("default", {
      month: "short",
    });
    const nextToNextMonthTitle = `${nextToNextMonth} ${nextToNextMonthDate.getFullYear()}`;
    const nextButton = page.getByTestId("right-arrow");
    await nextButton.click();
    const heading = page.getByText(nextToNextMonthTitle);
    await expect(heading).toBeVisible();
  });

  test("should display previous to previous month when previous button is clicked", async ({
    page,
  }) => {
    const currentDate = new Date();
    const prevToPrevMonthDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 2,
      1,
    );
    const prevToPrevMonth = prevToPrevMonthDate.toLocaleString("default", {
      month: "short",
    });
    const prevToPrevMonthTitle = `${prevToPrevMonth} ${prevToPrevMonthDate.getFullYear()}`;
    const prevButton = page.getByTestId("left-arrow");
    await prevButton.click();
    const heading = page.getByText(prevToPrevMonthTitle);
    await expect(heading).toBeVisible();
  });
});
