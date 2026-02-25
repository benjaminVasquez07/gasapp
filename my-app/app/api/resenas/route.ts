import { NextResponse } from "next/server";

export async function GET() {
  const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTHN2NSBC6aQvHuWIszTx9qlW8oluc6VAom4sl0U7J3aMLsMsZMz91uS86ImbAcpdnNglS17yN4IaBd/pub?output=csv";

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