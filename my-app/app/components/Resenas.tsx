"use client";
import { useEffect, useState } from "react";

// 1. Definimos la estructura de una reseña
interface Resena {
  nombre: string;
  calificacion: number;
  comentario: string;
}

export default function Resenas() {
  // 2. Le decimos a useState que usará un arreglo de ese tipo
  const [resenas, setResenas] = useState<Resena[]>([]);

  useEffect(() => {
    fetch("/api/resenas")
      .then((res) => res.json())
      .then((data) => setResenas(data));
  }, []);

  // Ahora TypeScript sabe que 'r' tiene la propiedad 'calificacion'
  const promedio =
    resenas.reduce((acc, r) => acc + r.calificacion, 0) /
    (resenas.length || 1);

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Decoración de fondo específica para reseñas */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono tracking-[0.5em] text-blue-500 uppercase mb-4">
            Opiniones de nuestros clientes
          </h2>
          <div className="flex flex-col items-center justify-center space-y-2">
             <p className="text-5xl md:text-6xl font-black text-white tracking-tighter">
              {promedio.toFixed(1)}
              <span className="text-blue-500 text-3xl ml-2">clasificación</span>
            </p>
            <div className="flex space-x-1 text-cyan-400">
               {"★".repeat(Math.round(promedio))}
               <span className="text-slate-600">{"★".repeat(5 - Math.round(promedio))}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resenas.map((r, i) => (
            <div
              key={i}
              className="group relative bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Indicador de status estilo terminal */}
              <div className="absolute top-4 right-4 flex space-x-1">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
              </div>

              <div className="mb-4">
                <h4 className="text-white font-bold tracking-tight text-lg group-hover:text-blue-400 transition-colors">
                  {r.nombre}
                </h4>
                <div className="flex text-xs text-cyan-500 mt-1 font-mono">
                  {"[ " + "★".repeat(r.calificacion) + " ]"}
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed italic border-l-2 border-blue-500/30 pl-4 py-1">
                "{r.comentario}"
              </p>

              {/* Decoración técnica en la esquina */}
              <div className="absolute bottom-2 right-4 opacity-10 font-mono text-[10px] text-white">
                comentario: 00{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}