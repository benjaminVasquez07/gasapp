import { test, expect } from '@playwright/test';

test.describe("Cotizacion automatica - UI - Switch de conexion", () => {
  test("Cotizacion automatica - UI - Switch de conexion - 4 puntos", async ({ page }) => {
   await page.goto('http://localhost:4000/');
  await page.getByRole('button', { name: 'Ir al Switch de Conexión' }).click();
  await expect(page.getByRole('heading', { name: 'aprox de Cotización Automá' })).toBeVisible();
  await expect(page.getByText('Activar cotización automática')).toBeVisible();
  await page.getByRole('checkbox').check();
  await page.getByRole('combobox').first().selectOption('Reparación');
  await page.getByRole('combobox').nth(1).selectOption('Alta');
  await page.getByRole('button', { name: 'Generar presupuesto' }).click();
  await expect(page.getByText('Presupuesto estimado')).toBeVisible();
  await expect(page.getByText('$')).toBeVisible();

  });
});