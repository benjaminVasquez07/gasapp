// components/CopyToClipboardButton.js
"use client";

import React, { useState } from "react";

const CopyToClipboardButton = () => {
  // Estado para controlar el texto del botón: 'Copiar' o '¡Copiado!'
  const [buttonText, setButtonText] = useState("🔗 Copiar Enlace de la Página");

  const handleCopy = async () => {
    // 1. Obtener la URL actual del navegador
    const pageUrl = window.location.href;

    try {
      // 2. Usar la API moderna del portapapeles
      await navigator.clipboard.writeText(pageUrl);

      // 3. Confirmación visual: cambiar el estado y el texto
      setButtonText("✅ ¡Copiado!");

      // 4. Resetear el texto después de 2 segundos
      setTimeout(() => {
        setButtonText("🔗 Copiar Enlace de la Página");
      }, 2000);
    } catch (err) {
      console.error("Error al intentar copiar al portapapeles:", err);
      alert("❌ Error al copiar el enlace. Por favor, cópialo manualmente.");
      // Opcional: podrías usar una alternativa más antigua aquí.
    }
  };

  return (
    <button
      onClick={handleCopy}
      // Estilos CSS inline para la demostración
      style={{
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "12px 25px",
        fontSize: "1.1em",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        margin: "5px",
      }}
    >
      {buttonText}
    </button>
  );
};

export default CopyToClipboardButton;
