import { test, expect } from "@playwright/test";

test("cambia el texto a ¡Copiado! luego de compartir", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  // Click en el botón Compartir
  await page.getByRole("button", { name: "Compartir" }).click();

  // Ahora esperamos que aparezca un botón con el texto ¡Copiado!
  await expect(page.getByRole("button", { name: "¡Copiado!" })).toBeVisible();
});
