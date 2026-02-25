import { test, expect } from '@playwright/test';

test.describe("Valoraciones y reseñas - registro de reseñas automatico", () => {
  test("Valoraciones y reseñas - registro de reseñas automatico - 8 puntos", async ({ page }) => {
  
await page.goto('http://localhost:4000/');
  await expect(page.getByText('Me obligaron')).toBeVisible();
  await expect(page.getByText('benja therian mono')).toBeVisible();
  await expect(page.getByRole('main')).toContainText('Me obligaron');
  await expect(page.getByRole('main')).toContainText('benja therian mono');

  });
});