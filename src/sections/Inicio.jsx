// src/sections/Inicio.jsx
import React from 'react';

export default function Inicio() {
  return (
    <div className="relative overflow-hidden bg-white min-h-screen">
      {/* Contenido principal */}
      <section
        id="inicio"
        className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between py-20 px-8 lg:px-32"
      >
        {/* Texto */}
        <div className="max-w-2xl space-y-6">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900">
            NORGLASS: Liderazgo Global en Vidrios Laminados
          </h1>
          <p className="text-lg lg:text-xl text-gray-700">
            Transformando Espacios con Tecnología Avanzada: Seguridad, Aislamiento y Diseño
            Personalizado. Tu Socio en Proyectos Arquitectónicos de Alto Impacto.
          </p>
          <a
            href="#soluciones"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Conozca más
          </a>
        </div>

        {/* Imagen hero */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="/assets/hero-image.jpg"
            alt="Vidrio laminado en planta"
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </section>
    </div>
  );
}
