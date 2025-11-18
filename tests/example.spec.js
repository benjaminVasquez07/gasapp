import { test, expect } from "@playwright/test";

test("botón de compartir funciona correctamente", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  const shareButton = page.locator('button:has-text("Compartir")');

  // Verificar que el botón está visible y funciona
  await expect(shareButton).toBeVisible();
  await shareButton.click();

  // Verificar que cambia a "¡Copiado!"
  await expect(shareButton).toHaveText("¡Copiado!");

  // Verificar que copia la URL
  const clipboardText = await page.evaluate(() =>
    navigator.clipboard.readText()
  );
  expect(clipboardText).toBe(await page.url());

  // Verificar que vuelve a "Compartir"
  await page.waitForTimeout(2500);
  await expect(shareButton).toHaveText("Compartir");
});
