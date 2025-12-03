"use client";

import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}



// Función simple para generar la respuesta del bot
const getBotResponse = (userText: string): string => {
  const lowerText = userText.toLowerCase();

  if (
    lowerText.includes("hola") ||
    lowerText.includes("buenas") ||
    lowerText.includes("buenos dias")
  ) {
    return "¡Hola! Para ayudarte mejor y coordinar el servicio, ¿podrías decirme **qué tipo de servicio necesitas**? (Ej: Revisión de artefactos, instalación, prueba de hermeticidad).";
  } else if (
    lowerText.includes("revision") ||
    lowerText.includes("instalacion") ||
    lowerText.includes("artefacto")
  ) {
    return "¿En qué zona o barrio estás ubicado/a? Así te asignamos el gasista matriculado más cercano.";
  } else if (
    lowerText.includes("presupuesto") ||
    lowerText.includes("cuanto")
  ) {
    return "Para darte un presupuesto aproximado, necesitamos saber la dirección exacta del trabajo y una breve descripción. ¿Me la podrías enviar?";
  } else if (lowerText.includes("gracias")) {
    return "¡De nada! Si tienes otra consulta, no dudes en escribir. En breve un gasista se pondrá en contacto contigo.";
  }

  // Respuesta por defecto si no coincide con nada
  return "Gracias por tu mensaje. El gasista matriculado ha recibido tu consulta y te responderá personalmente a este chat en unos minutos para coordinar el servicio.";
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Mensaje inicial del bot
  useEffect(() => {
    setMessages([
      {
        id: 1,
        text: "¡Hola! Dejá tu consulta y nuestro gasista matriculado te responderá a la brevedad para coordinar tu servicio.",
        sender: "bot",
        timestamp: new Date(),
      },
    ]);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Desplazarse al final cuando se añaden mensajes
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const text = inputMessage.trim();
    if (!text) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: text,
      sender: "user",
      timestamp: new Date(),
    };

    // 1. Añadir el mensaje del usuario
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");

    // 2. Generar y programar la respuesta del bot
    const botResponseText = getBotResponse(text);

    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: botResponseText,
        sender: "bot",
        timestamp: new Date(),
      };

      // 3. Añadir la respuesta del bot
      setMessages((prev) => [...prev, botResponse]);
    }, 1000); // Retraso de 1 segundo para simular que está "escribiendo"
  };

  return (
    <>
      <Head>
        <title>Contacto - Gasista Matriculado | GasApp</title>
        <meta
          name="description"
          content="Deja tu consulta para servicios de gasista matriculado"
        />
      </Head>

      <main className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <span>Volver al Inicio</span>
                </button>
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-800">
                    Contacto Gasista
                  </h1>
                  <p className="text-sm text-gray-500">Gasista Matriculado</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-6 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg h-[600px] flex flex-col">
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-4 ${
                        message.sender === "user"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      <p className="break-words">{message.text}</p>
                      <div
                        className={`text-xs mt-2 ${
                          message.sender === "user"
                            ? "text-blue-200"
                            : "text-gray-600"
                        }`}
                      >
                        {message.timestamp.toLocaleTimeString("es-AR", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>

            <form
              onSubmit={handleSendMessage}
              className="border-t p-4 bg-white"
            >
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Escribe tu consulta aquí..."
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-500"
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim()}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              💡 Los mensajes no se guardan automáticamente. Al salir del chat
              se perderá el historial.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
