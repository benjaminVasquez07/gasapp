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

      <main className="min-h-screen bg-[#030611] text-blue-100 overflow-hidden relative">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        {/* HEADER */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#030611]/60 backdrop-blur-md">
          <div className="container mx-auto px-6 py-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2.5">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                  <span className="text-white font-black text-xl">G</span>
                </div>

                <h1 className="text-2xl font-black text-white tracking-tighter">
                  Gas<span className="text-blue-500">App</span>
                </h1>
              </div>

              <button
                onClick={copyLinkToClipboard}
                className="group border border-white/20 bg-black/30 text-white/90 px-5 py-2 rounded-xl text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:border-blue-400/60 hover:text-blue-200 flex items-center space-x-2.5"
              >
                <span>{copied ? "Copiado" : "Compartir"}</span>
              </button>
            </div>
          </div>
        </header>

        {/* HERO */}
        <section
          className="relative pt-32 pb-24 flex flex-col items-center bg-cover bg-center"
          style={{ backgroundImage: "url('/gas.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#030611]/80"></div>

          <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
            <div className="inline-block bg-blue-500/10 border border-blue-400/30 text-blue-300 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase mb-10 shadow-inner">
              ROBERTO VASQUEZ - GASISTA MATRICULADO
            </div>

            <div className="text-center max-w-5xl">
              <h2 className="text-6xl sm:text-7xl md:text-8xl font-black text-white mb-8 uppercase">
                ¿NECESITÁS
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-emerald-300">
                  UN GASISTA?
                </span>
              </h2>

              <p className="text-xl text-blue-200/80 mb-14 max-w-2xl mx-auto">
                <span className="font-bold">Presupuestos automáticos.</span>
                <br />
                En minutos sin visitas innecesarias, sin perder tiempo.
              </p>

              <Link href="/chat">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-bold text-lg transition">
                  Presupuesto automatico
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* TARJETAS */}
        <section className="bg-black/40 border-y border-white/5 py-28">
          <div className="container mx-auto px-6">
            <div className="max-w-xl mx-auto text-center mb-20">
              <h3 className="text-sm font-mono tracking-widest text-blue-500 uppercase">
                Roberto Vasquez - Gasista Matriculado
              </h3>

              <p className="text-3xl font-bold text-white mt-3">
                Procesamiento de Solicitudes
              </p>
            </div>

            <div className="flex justify-center gap-8 flex-wrap">
              {/* 01 */}
              <div className="bg-[#050a15] p-6 rounded-2xl border border-white/5 max-w-sm">
                <div className="text-blue-400 text-3xl font-black mb-4">01</div>

                <h4 className="text-xl font-bold text-cyan-400 mb-2">
                  Cotización automática con IA
                </h4>

                <p className="text-blue-200/70 text-sm">
                  Obtén presupuestos automáticos en minutos con nuestro gasista
                  matriculado.
                </p>
              </div>

              {/* 02 */}
              <div className="bg-[#050a15] p-6 rounded-2xl border border-white/5 max-w-sm">
                <div className="text-blue-400 text-3xl font-black mb-4">02</div>

                <h4 className="text-xl font-bold text-cyan-400 mb-2">
                  Encuentro con el gasista
                </h4>

                <p className="text-blue-200/70 text-sm">
                  Coordina una visita con el gasista matriculado para revisar el
                  problema.
                </p>
              </div>

              {/* 03 */}
              <div className="bg-[#050a15] p-6 rounded-2xl border border-white/5 max-w-sm">
                <div className="text-blue-400 text-3xl font-black mb-4">03</div>

                <h4 className="text-xl font-bold text-cyan-400 mb-2">
                  Solución del problema
                </h4>

                <p className="text-blue-200/70 text-sm">
                  El gasista realiza el trabajo y deja la instalación
                  funcionando correctamente.
                </p>
              </div>
            </div>
          </div>
        </section>


       <p className="text-2xl font-bold text-blue-200/80 mt-16 mb-14 max-w-3xl mx-auto text-center leading-relaxed">
        COCINAS · ESTUFAS · CALEFONES · TERMOTANQUES · HORNOS · FUGAS · MANTENIMIENTO · PÉRDIDAS DE AGUA · CAMBIO DE LLAVES Y GRIFERÍAS · CAÑERÍAS · DESAGÜES · CONEXIONES · HOGARES Y COMERCIOS ·
      </p>


        {/* PERFIL DEL GASISTA */}
        <section className="py-28 bg-[#030611] border-t border-white/5">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <img
                  src="/foto gasista.jpg"
                  alt="Gasista Roberto Vasquez"
                  className="w-80 h-80 object-cover rounded-2xl border border-white/10"
                />
              </div>

              <div>
                <h3 className="text-sm font-mono tracking-widest text-blue-500 uppercase mb-3">
                  Gasista Profesional
                </h3>

                <h2 className="text-4xl font-bold text-white mb-6">
                  Roberto Vasquez
                </h2>

                <p className="text-blue-200/70 mb-8">
                  Gasista matriculado especializado en instalaciones
                  domiciliarias, mantenimiento de artefactos y detección de
                  fugas. Más de 20 años de experiencia realizando trabajos
                  seguros y certificados.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-[#050a15] border border-white/5 rounded-xl p-4">
                    <p className="text-cyan-400 font-bold text-lg">20+</p>
                    <p className="text-blue-200/70 text-sm">
                      Años de experiencia
                    </p>
                  </div>

                  <div className="bg-[#050a15] border border-white/5 rounded-xl p-4">
                    <p className="text-cyan-400 font-bold text-lg">100+</p>
                    <p className="text-blue-200/70 text-sm">
                      Trabajos realizados
                    </p>
                  </div>

                  <div className="bg-[#050a15] border border-white/5 rounded-xl p-4">
                    <p className="text-cyan-400 font-bold text-lg">Ubicación</p>
                    <p className="text-blue-200/70 text-sm">Villa Lugano</p>
                  </div>

                  <div className="bg-[#050a15] border border-white/5 rounded-xl p-4">
                    <p className="text-cyan-400 font-bold text-lg">24h</p>
                    <p className="text-blue-200/70 text-sm">
                      Atención y urgencias
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* CONTACTO WHATSAPP */}
        <section className="py-12 bg-black/40 border-t border-white/5">
          <div className="container mx-auto px-6 text-center max-w-3xl">

            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6" >
              WhatsApp
            </h2>

            <p className="text-xl text-blue-200/80 mb-8">
            Contacto del gasista: <br />
              +54 9 11 1234-5678
            </p>

            <a
              href="https://wa.me/5491112345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Enviar mensaje por WhatsApp
            </a>

          </div>
        </section>
          

        </section>

        {/* RESEÑAS */}
        <div className="py-20 bg-[#030611]">
          <Resenas />
        </div>

        {/* FOOTER */}
        <footer className="bg-black py-10 border-t border-white/5">
          <div className="container mx-auto px-6 text-center">
            <p className="text-xs font-mono tracking-wider text-slate-600 uppercase">
              // Benjamin vasquez 6to D // © 2025 //
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
