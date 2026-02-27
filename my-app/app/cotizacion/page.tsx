"use client";

import { useState } from "react";

export default function CotizacionPage() {
  const [iaActiva, setIaActiva] = useState(false);
  const [tipo, setTipo] = useState("Instalación");
  const [dificultad, setDificultad] = useState("Baja");
  const [materiales, setMateriales] = useState(false);
  const [precio, setPrecio] = useState<number | null>(null);

  const generarPresupuesto = () => {
    let total = 0;

    // 💰 Nuevos precios (más realistas)
    if (tipo === "Instalación") total += 45000;
    else if (tipo === "Reparación") total += 35000;
    else total += 25000;

    if (dificultad === "Media") total += 15000;
    if (dificultad === "Alta") total += 30000;

    if (materiales) total += 20000;

    setPrecio(total);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg">

        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          aprox de Cotización Automática de Gas
        </h1>

        {/* Switch */}
        <div className="flex items-center justify-between mb-6">
          <span className="font-medium text-gray-700">
            Activar cotización automática
          </span>
          <input
            type="checkbox"
            checked={iaActiva}
            onChange={() => setIaActiva(!iaActiva)}
            className="w-5 h-5"
          />
        </div>

        {iaActiva ? (
          <>
            <div className="space-y-4">

              <div>
                <label className="block mb-1 font-medium text-black">
                  Tipo de trabajo
                </label>
                <select
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                  className="w-full border rounded-lg p-2 text-black"
                >
                  <option>Instalación</option>
                  <option>Reparación</option>
                  <option>Revisión</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium text-black">
                  Complejidad
                </label>
                <select
                  value={dificultad}
                  onChange={(e) => setDificultad(e.target.value)}
                  className="w-full border rounded-lg p-2 text-black"
                >
                  <option>Baja</option>
                  <option>Media</option>
                  <option>Alta</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={materiales}
                  onChange={() => setMateriales(!materiales)}
                />
                <label className="text-black font-medium">
                  Se necesitan materiales adicionales
                </label>
              </div>

              <button
                onClick={generarPresupuesto}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Generar presupuesto
              </button>
            </div>

            {precio !== null && (
              <div className="mt-6 bg-green-50 border border-green-300 rounded-xl p-4 text-center">
                <p className="text-gray-700">Presupuesto estimado</p>
                <p className="text-2xl font-bold text-green-700">
                  ${precio.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Precio estimado sujeto a verificación técnica.
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center text-gray-500">
            Activá el sistema para comenzar la cotización
          </div>
        )}
      </div>
    </div>
  );
}