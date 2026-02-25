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

    // Precio base
    if (tipo === "Instalación") total += 20000;
    else if (tipo === "Reparación") total += 15000;
    else total += 10000;

    // Complejidad
    if (dificultad === "Media") total += 5000;
    if (dificultad === "Alta") total += 10000;

    // Materiales
    if (materiales) total += 8000;

    setPrecio(total);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cotización automática de gas</h1>

      {/* 🔘 Switch de conexión */}
      <label>
        <input
          type="checkbox"
          checked={iaActiva}
          onChange={() => setIaActiva(!iaActiva)}
        />
        Activar cotización automática
      </label>

      {iaActiva && (
        <>
          <h2>Responder preguntas</h2>

          <label>
            Tipo de trabajo:
            <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
              <option>Instalación</option>
              <option>Reparación</option>
              <option>Revisión</option>
            </select>
          </label>

          <br />

          <label>
            Complejidad:
            <select
              value={dificultad}
              onChange={(e) => setDificultad(e.target.value)}
            >
              <option>Baja</option>
              <option>Media</option>
              <option>Alta</option>
            </select>
          </label>

          <br />

          <label>
            <input
              type="checkbox"
              checked={materiales}
              onChange={() => setMateriales(!materiales)}
            />
            ¿Se necesitan materiales?
          </label>

          <br />
          <br />

          <button onClick={generarPresupuesto}>
            Generar presupuesto
          </button>

          {precio !== null && (
            <h2>Presupuesto estimado: ${precio}</h2>
          )}
        </>
      )}

      {!iaActiva && (
        <p>Activá la cotización automática para comenzar</p>
      )}
    </div>
  );
}