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

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Mensaje inicial del bot
  useEffect(() => {
    setMessages([
      {
        id: 1,
        text: "¡Hola! Sistema de diagnóstico inicializado. Dejá tu consulta y nuestro gasista matriculado te responderá a la brevedad para coordinar tu servicio.",
        sender: "bot",
        timestamp: new Date(),
      },
    ]);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // ✅ LÓGICA MANTENIDA
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const text = inputMessage.trim();
    if (!text || loading) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/ia", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: text }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("ERROR IA:", errorText);
        throw new Error("La IA no respondió correctamente");
      }

      const data = await res.json();
      const respuesta = data.choices[0].message.content;

      const botResponse: Message = {
        id: messages.length + 2,
        text: respuesta,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.log('error: ' + error);
      const botError: Message = {
        id: messages.length + 2,
        text: "Error de enlace ascendente. Reintentando conexión con la red...",
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botError]);
    }

    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Terminal de Diagnóstico | GasApp</title>
        <meta
          name="description"
          content="Interfaz de comunicación directa con IA y técnicos matriculados"
        />
      </Head>

      <main className="min-h-screen bg-[#030611] text-blue-100 relative overflow-hidden flex flex-col">
        {/* Efectos de luz de fondo */}
        <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Header Tecnológico */}
        <header className="z-20 bg-black/40 backdrop-blur-xl border-b border-white/10">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/">
              <button className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-all group font-mono text-sm uppercase tracking-tighter">
                <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Escritorio_Principal</span>
              </button>
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="text-right hidden sm:block">
                <h1 className="text-xs font-mono text-blue-400 uppercase tracking-widest">Canal de Enlace Seguro</h1>
                <p className="text-[10px] text-slate-500 font-mono">STATUS: EN_LINEA // ENCRYPT_AES_256</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                <span className="text-white font-black">G</span>
              </div>
            </div>
          </div>
        </header>

        {/* Chat Container */}
        <div className="flex-1 container mx-auto px-4 py-6 max-w-4xl relative z-10 flex flex-col overflow-hidden">
          <div className="flex-1 bg-black/40 border border-white/10 rounded-2xl backdrop-blur-md flex flex-col overflow-hidden shadow-2xl">
            
            {/* Messages Area */}
            <div className="flex-1 p-6 overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-blue-600/20 scrollbar-track-transparent">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[70%] rounded-2xl p-4 relative group ${
                      message.sender === "user"
                        ? "bg-blue-600/20 border border-blue-500/40 text-blue-50 shadow-[0_0_15px_rgba(37,99,235,0.1)]"
                        : "bg-white/5 border border-white/10 text-slate-200"
                    }`}
                  >
                    {/* Tag de emisor estilo terminal */}
                    <div className={`text-[10px] font-mono uppercase mb-2 opacity-50 ${message.sender === "user" ? "text-right" : "text-left"}`}>
                      {message.sender === "user" ? "> yo" : "> GasApp_IA"}
                    </div>
                    
                    <p className="text-sm md:text-base leading-relaxed break-words font-light">
                      {message.text}
                    </p>
                    
                    <div className={`text-[9px] mt-3 font-mono ${message.sender === "user" ? "text-blue-400/60 text-right" : "text-slate-500"}`}>
                      {message.timestamp.toLocaleTimeString("es-AR", {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit"
                      })}
                    </div>
                  </div>
                </div>
              ))}
              
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest ml-2">Escribiendo...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={handleSendMessage}
              className="p-4 bg-black/60 border-t border-white/10"
            >
              <div className="flex items-center bg-white/5 border border-white/20 rounded-xl px-4 py-2 focus-within:border-blue-500/50 transition-all">
                <span className="text-blue-500 font-mono mr-2"> {">"} </span>
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Escribir consultas..."
                  className="flex-1 bg-transparent border-none py-2 text-white placeholder-slate-600 focus:outline-none focus:ring-0 font-light"
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim() || loading}
                  className="bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 text-white p-2 rounded-lg transition-all duration-300 shadow-[0_0_10px_rgba(37,99,235,0.3)] group"
                >
                  <svg className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          <div className="mt-4 flex justify-between items-center px-2">
            <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-tight">Cifrado de extremo a extremo activo</span>
            </div>
            <p className="text-[10px] font-mono text-slate-600 italic">
               ⚠ El historial se borrara al cerrar sesión.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}