import { NextResponse } from "next/server";
import OpenAI from "openai";

// agrega un post
export async function POST(request: Request) {
  const client = new OpenAI({
    apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
  });

  const response = await client.responses.create({
    model: "gpt-4o",
    instructions: "eres un gasista experto",
    input: "el presupuesto de la instalacion del termotanque 80.000$",
  });
  return NextResponse.json({ mensaje: response });
}
