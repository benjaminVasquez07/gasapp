import { test, expect } from "@playwright/test";

test.describe("Cotizacion automatica - Implementacion IA Chat contexto para presupuestos precisos", () => {
  test("Cotizacion automatica - Implementacion IA Chat contexto para presupuestos precisos - 2 puntos", async ({
    page,
  }) => {
     await page.goto("http://localhost:4000/");
  await page.getByRole('button', { name: 'Solicitar Cotización Instantá' }).click();
  await expect(page.getByRole('main')).toContainText('¡Hola! Dejá tu consulta y nuestro gasista matriculado te responderá a la brevedad para coordinar tu servicio.');
  await page.getByRole('textbox', { name: 'Escribe tu consulta aquí' }).click();
  await page.getByRole('textbox', { name: 'Escribe tu consulta aquí' }).fill('queria saber el precio de ');
  await page.getByRole('textbox', { name: 'Escribe tu consulta aquí' }).click();
  await page.getByRole('textbox', { name: 'Escribe tu consulta aquí' }).fill('queria saber el precio de reparacion de emergencia de un escape de gas en la cocina');
  await page.getByRole('button', { name: 'Enviar' }).click();
  await expect(page.getByRole('main')).toContainText('Sí. Para una reparación de emergencia de una fuga de gas en la cocina: - Urgencia: recargo de 50.000 pesos.'

  );
  });
});
