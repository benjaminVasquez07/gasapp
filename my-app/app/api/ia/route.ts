import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { message } = await req.json();
  const reply = await fetch("http://localhost:1337/v1/chat/completions", 
    {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
        messages: [
          {role: "system",
            content: "Sos un gasista matriculado con experiencia, responde de forma breve y simple"},
          { role: "user", content: message }
        ],
        model: "gpt-4.1-mini",
        provider: "OIVSCodeSer0501",
    })}
  );

  const data = await reply.json();

  return NextResponse.json(data);
}




/*import { NextResponse } from "next/server";
import OpenAI from "openai";

import { G4F } from "g4f";

async function run() {
}

run();

export async function GET(request: Request) {
  const g4f = new G4F();

  const options = {
      debug: true,
      proxy: ""
  };
  const response = await g4f.chatCompletion([
      { role: "system", content: "Sos un gasista matriculado experto." },
      { role: "user", content: "¿Cuánto sale instalar un calefón?" }
    ], options);

  console.log("Respuesta del modelo:", response);
  return NextResponse.json({ mensaje: '' });/*




   /*const response = await g4f.chatCompletion(messages, options);
  return NextResponse.json({ mensaje: response });*/
/*
  })();
*/
  //open ia
  /*
  const client = new OpenAI({
    apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
  });

  const response = await client.responses.create({
    model: "gpt-4o",
    instructions: "eres un gasista experto",
    input: "el presupuesto de la instalacion del termotanque 80.000$",
  });
  */
//}







// https://github.com/VictorMRojas/g4f-ts?tab=readme-ov-file#installation
// https://github.com/xtekky/gpt4free?tab=readme-ov-file#installation
