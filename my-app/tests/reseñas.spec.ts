import { test, expect } from '@playwright/test';

test.describe("Valoraciones y reseñas - UI", () => {
  test("Valoraciones y reseñas - UI_ 2 puntos", async ({ page }) => {
    await page.goto('http://localhost:4000/');
  await expect(page.getByText('demasido god')).toBeVisible();
  await expect(page.getByRole('main')).toContainText('buenisimo');
  await expect(page.getByRole('main')).toContainText('demasido god');
  await expect(page.getByText('demasido god')).toBeVisible();
  });
});