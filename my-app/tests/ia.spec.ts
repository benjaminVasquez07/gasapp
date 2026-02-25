import { test, expect } from "@playwright/test";

test.describe("Cotizacion automatica - Implementacion IA Chat", () => {
  test("Cotizacion automatica - Implementacion IA Chat- 6 puntos", async ({
    page,
  }) => {
    await page.goto("http://localhost:4000/");
    await page
      .getByRole("button", { name: "Solicitar Cotización Instantá" })
      .click();
    await expect(page.getByRole("main")).toContainText(
      "¡Hola! Dejá tu consulta y nuestro gasista matriculado te responderá a la brevedad para coordinar tu servicio.",
    );
    await page
      .getByRole("textbox", { name: "Escribe tu consulta aquí" })
      .click();
    await page
      .getByRole("textbox", { name: "Escribe tu consulta aquí" })
      .fill("hola colsulta de gas");
    await page.getByRole("button", { name: "Enviar" }).click();
    await expect(page.getByRole("main")).toContainText(
      "¡Hola! Soy gasista matriculado.",
    );
  });
});
