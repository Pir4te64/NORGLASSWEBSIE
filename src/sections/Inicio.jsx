// src/sections/Inicio.jsx
import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Inicio() {
  return (
    <section id="inicio" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Innovación en Vidrio Laminado
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Soluciones avanzadas en vidrio laminado para la industria moderna.
              Calidad, seguridad y diseño en cada proyecto.
            </p>
            <a
              href="#contacto"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition"
            >
              Contactar
            </a>
          </div>
          <div className="w-full lg:w-1/2 h-[400px] rounded-2xl overflow-hidden">
            <Spline scene="https://prod.spline.design/mxh-lN4LSsexh5Rg/scene.splinecode" />
          </div>
        </div>
      </div>
    </section>
  );
}
