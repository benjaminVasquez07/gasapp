"use client";

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Resenas from "./components/Resenas";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyLinkToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar: ", err);
      const textArea = document.createElement("textarea");
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      <Head>
        <title>GasApp - El Futuro de la Instalación de Gas</title>
        <meta
          name="description"
          content="Cotizaciones instantáneas con IA para instalaciones de gas con profesionales matriculados"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Fondo con profundidad y orbe de luz */}
      <main className="min-h-screen bg-[#030611] text-blue-100 overflow-hidden relative">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        {/* Header - Minimalista y transparente */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#030611]/60 backdrop-blur-md">
          <div className="container mx-auto px-6 py-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2.5">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                  <span className="text-white font-black text-xl">G</span>
                </div>
                <h1 className="text-2xl font-black text-white tracking-tighter">Gas<span className="text-blue-500">App</span></h1>
              </div>

              <button
                onClick={copyLinkToClipboard}
                className="group border border-white/20 bg-black/30 text-white/90 px-5 py-2 rounded-xl text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:border-blue-400/60 hover:text-blue-200 flex items-center space-x-2.5"
              >
                <svg
                  className="w-4 h-4 transition-transform group-hover:rotate-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span>{copied ? "Copiado" : "Compartir"}</span>
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section - Estilo "Terminal" y Conceptual */}
        <section className="container mx-auto px-6 pt-32 pb-24 relative z-10 flex flex-col items-center">
          <div className="inline-block bg-blue-500/10 border border-blue-400/30 text-blue-300 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase mb-10 shadow-inner">
            Proyecto del cole
          </div>

          <div className="text-center relative max-w-5xl">
            {/* Título - Conceptual, sin colores directos al principio */}
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-black text-white leading-none tracking-tightest mb-8 uppercase">
              COTIZACIONES
              <br />
              <span className="relative inline-block mt-3">
                <span className="absolute -inset-2 rounded-xl bg-blue-600 blur-3xl opacity-30"></span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-emerald-300">INSTANTÁNEAS</span>
              </span>
            </h2>

            <p className="text-xl text-blue-200/80 mb-14 max-w-2xl mx-auto leading-relaxed font-light">
              Obtén presupuestos automáticos en minutos con nuestro gasista matriculado. Sin visitas innecesarias, sin perder tiempo.
            </p>

            {/* CTA Button con efecto "Glow" y animaciones */}
            <div className="flex justify-center relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <Link href="/chat">
                <button className="relative bg-[#030611] border border-blue-400/60 hover:bg-blue-600 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform group-hover:scale-105 group-active:scale-95 flex items-center">
                  <span>Presupuesto automatico</span>
                  <svg className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section - Estilo "Tarjetas de Estado/Sistema" */}
        <section className="bg-black/40 border-y border-white/5 py-28 relative z-10">
          <div className="container mx-auto px-6">
            <div className="max-w-xl mx-auto text-center mb-20">
              <h3 className="text-sm font-mono tracking-widest text-blue-500 uppercase">
                 Gasista Profesional Matriculado
              </h3>
              <p className="text-3xl font-bold text-white mt-3">Procesamiento de Solicitudes</p>
            </div>

            <div className="flex justify-center">
              <div className="relative p-1 rounded-2xl bg-gradient-to-br from-blue-600/30 via-cyan-400/10 to-blue-600/30 group max-w-md">
                <div className="bg-[#050a15] p-8 rounded-2xl h-full border border-white/5">
                  <div className="w-16 h-16 bg-blue-600/10 border border-blue-500/30 rounded-full flex items-center justify-center text-blue-400 font-mono text-2xl font-black mb-7 shadow-inner">
                    01
                  </div>
                  <h4 className="text-2xl font-extrabold text-white mb-4 tracking-tight">
                  <span className="text-cyan-400">Cotización automática con IA</span>
                  </h4>
                  <p className="text-blue-200/70 leading-relaxed font-light">
                     Obtén presupuestos automáticos en minutos con nuestro gasista
                    matriculado. Sin visitas innecesarias, sin perder tiempo.
                  </p>
                  <div className="mt-8 flex space-x-1.5 opacity-60">
                    <div className="h-1 w-10 bg-blue-600 rounded-full"></div>
                    <div className="h-1 w-3 bg-slate-700 rounded-full"></div>
                    <div className="h-1 w-3 bg-slate-700 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sección de Reseñas - Sutilmente Integrada */}
        <div className="py-20 bg-[#030611]">
          <Resenas />
        </div>
        
        {/* Footer - Súper Técnico y Minimalista */}
        <footer className="bg-black py-10 border-t border-white/5">
          <div className="container mx-auto px-6 text-center">
            <p className="text-xs font-mono tracking-wider text-slate-600 uppercase">
              // Benjamin vasquez 6to D // &copy; 2025 //
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}