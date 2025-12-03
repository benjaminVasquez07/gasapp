import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.message) {
      return NextResponse.json(
        { error: "No se recibió el mensaje" },
        { status: 400 }
      );
    }

    const response = await client.responses.create({
      model: "gpt-4o",
      instructions:
        "Sos un asistente técnico experto en instalaciones de gas. Respondes de forma formal, clara y amistosa. No hablás de política ni inventás datos.",
      input: body.message,
    });

    const text = response.output_text;

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error("ERROR IA:", error);

    return NextResponse.json(
      { error: "Error interno en la IA" },
      { status: 500 }
    );
  }
}
