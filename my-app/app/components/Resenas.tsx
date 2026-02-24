"use client";
import { useEffect, useState } from "react";

export default function Resenas() {
  const [resenas, setResenas] = useState([]);

  useEffect(() => {
    fetch("/resenas.csv")
      .then(res => res.text())
      .then(text => {
        const filas = text.trim().split("\n");

        const datos = filas.slice(1).map(fila => {
          const [nombre, calificacion, comentario] = fila.split(",");

          return {
            nombre,
            calificacion: Number(calificacion),
            comentario,
          };
        });

        setResenas(datos);
      });
  }, []);

  const promedio =
    resenas.reduce((acc, r) => acc + r.calificacion, 0) /
    (resenas.length || 1);

  return (
    <section style={{ padding: "40px", background: "#f5f5f5", color: "black" }}>
      <h2 style={{ textAlign: "center" }}>
        ⭐ Opiniones de nuestros clientes
      </h2>

      <p style={{ textAlign: "center", fontSize: "20px" }}>
        Promedio: {promedio.toFixed(1)} ⭐
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {resenas.map((r, i) => (
          <div
            key={i}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h4>{r.nombre}</h4>
            <p>{"⭐".repeat(r.calificacion)}</p>
            <p>{r.comentario}</p>
          </div>
        ))}
      </div>
    </section>
  );
}