// src/sections/Soluciones.jsx
import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Soluciones() {
  return (
    <section id="soluciones" className="min-h-screen bg-white pt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start h-full">
          {/* Modelo 3D a la izquierda */}
          <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-100 flex items-start">
            <Spline scene="https://prod.spline.design/1R8LkuWqjB-1A9mZ/scene.splinecode" />
          </div>

          {/* Texto a la derecha */}
          <div className="space-y-6 text-left flex flex-col justify-start h-full">
            {/* Título */}
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              <span className="text-primary">Soluciones Integrales</span> en Vidrios Laminados
            </h2>
            {/* Subtítulo */}
            <p className="text-gray-500 text-base md:text-lg">
              Donde la Seguridad, la Eficiencia Energética y el Diseño Innovador se Unen para Transformar tus Espacios
            </p>
            {/* Lista de soluciones */}
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <img
                  src="/assets/icons/pvb.svg"
                  alt=""
                  className="w-6 h-6 flex-shrink-0 text-primary mt-1"
                />
                <div>
                  <h3 className="text-base md:text-lg font-semibold">
                    Seguridad Avanzada con Tecnología PVB
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base">
                    Dos hojas de vidrio unidas por PVB que mantienen los fragmentos cohesionados, minimizando riesgos de lesiones y garantizando protección superior ante impactos.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <img
                  src="/assets/icons/acoustic.svg"
                  alt=""
                  className="w-6 h-6 flex-shrink-0 text-primary mt-1"
                />
                <div>
                  <h3 className="text-base md:text-lg font-semibold">
                    Eficiencia Acústica y Térmica
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base">
                    Aislamiento de ruido exterior y control solar integrado para ambientes más tranquilos y confortables, adaptándose a climas extremos con máximo rendimiento energético.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <img
                  src="/assets/icons/design.svg"
                  alt=""
                  className="w-6 h-6 flex-shrink-0 text-primary mt-1"
                />
                <div>
                  <h3 className="text-base md:text-lg font-semibold">
                    Diseño Personalizado para Proyectos Únicos
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base">
                    Acabados versátiles y opciones de personalización que fusionan funcionalidad con estética, potenciando la innovación arquitectónica y el valor visual de tus espacios.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
