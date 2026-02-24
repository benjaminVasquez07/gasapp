import { test, expect } from "@playwright/test";

test.describe("Cotizacion automatica - UI", () => {
  test("chat_basico", async ({ page }) => {
    await page.goto("http://localhost:4000/");
    await page
      .getByRole("button", { name: "Solicitar Cotización Instantá" })
      .click();
    await page
      .getByRole("textbox", { name: "Escribe tu consulta aquí" })
      .click();
    await page
      .getByRole("textbox", { name: "Escribe tu consulta aquí" })
      .fill("hola");
    await page.getByRole("button", { name: "Enviar" }).click();
    await expect(page.getByRole("main")).toContainText(
      "¡Hola! Para ayudarte mejor y coordinar el servicio, ¿podrías decirme **qué tipo de servicio necesitas**? (Ej: Revisión de artefactos, instalación, prueba de hermeticidad)."
    );
  });
});
