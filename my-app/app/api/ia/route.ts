import { NextResponse } from "next/server";
import OpenAI from "openai";


export async function POST(request: Request) {
const { G4F } = import ("g4f");
const g4f = new G4F();
const messages = [
    { role: "gasista matriculado", content: "eres un gasista experto"}
];
g4f.chatCompletion(messages).then(console.log);
}

// https://github.com/VictorMRojas/g4f-ts?tab=readme-ov-file#installation
// https://github.com/xtekky/gpt4free?tab=readme-ov-file#installation


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
