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
        <title>GasApp - Servicio Rápido de Gasista Matriculado</title>
        <meta
          name="description"
          content="Cotizaciones instantáneas para instalaciones de gas con profesionales matriculados"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <h1 className="text-2xl font-bold text-gray-800">GasApp</h1>
              </div>

              <button
                onClick={copyLinkToClipboard}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
              >
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
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span>{copied ? "¡Copiado!" : "Compartir"}</span>
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Gasista Profesional Matriculado
            </div>

            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Cotizaciones instantáneas para
              <span className="text-blue-600"> tus instalaciones de gas</span>
            </h2>

            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Obtén presupuestos automáticos en minutos con nuestro gasista
              matriculado. Sin visitas innecesarias, sin perder tiempo.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Link href="/chat">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
                  Solicitar Cotización Instantánea
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                ¿Cómo funciona?
              </h3>

              <div className="flex justify-center">
                <div className="bg-green-50 p-6 rounded-xl max-w-md">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                    1
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Cotización automática con IA
                  </h4>
                  <p className="text-gray-600">
                    Responde preguntas simples sobre tu proyecto y recibe un
                    presupuesto preciso al instante.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Resenas />
        
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>
              &copy; 2024 GasApp - Servicio Profesional de Gasista Matriculado.
              Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
