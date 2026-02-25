import { NextResponse } from "next/server";

export async function GET() {
  const url = process.env.GOOGLE_SHEET_CSV_URL!;

  const response = await fetch(url);
  const text = await response.text();

  const filas = text.trim().split("\n");

  const datos = filas.slice(1).map((fila) => {
    const columnas = fila.split(",");

    return {
      nombre: columnas[3]?.trim() || "Anónimo",
      calificacion: Number(columnas[1]) || 0,
      comentario: columnas[2]?.trim() || "",
    };
  });

  return NextResponse.json(datos);
}