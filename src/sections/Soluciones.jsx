// src/sections/Soluciones.jsx
import React from 'react';

export default function Soluciones() {
  return (
    <section id="soluciones" className="bg-white py-20 px-8 lg:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Imagen Hero */}
        <div>
          {/* 
            Coloca tu imagen en public/assets/soluciones-hero.jpg 
            (o dentro de src/assets y usa import solucionesHero from '../assets/soluciones-hero.jpg')
          */}
          <img
            src="/assets/soluciones-hero.jpg"
            alt="Laminado de vidrio en producción"
            className="w-full rounded-2xl object-cover"
          />
        </div>

        {/* Texto e ítems */}
        <div className="space-y-6">
          {/* Título */}
          <h2 className="text-4xl font-bold">
            <span className="text-blue-500">Soluciones Integrales</span>{' '}
            en Vidrios Laminados
          </h2>

          {/* Subtítulo */}
          <p className="text-gray-500">
            Donde la Seguridad, la Eficiencia Energética y el Diseño Innovador se
            Unen para Transformar tus Espacios
          </p>

          {/* Lista de soluciones */}
          <ul className="space-y-6">
            <li className="flex items-start">
              <img
                src="/assets/icons/pvb.svg"
                alt=""
                className="w-6 h-6 flex-shrink-0 text-blue-500 mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">
                  Seguridad Avanzada con Tecnología PVB
                </h3>
                <p className="text-gray-500">
                  Dos capas de vidrio de 3 mm unidas por PVB que mantienen los
                  fragmentos cohesionados, minimizando riesgos de lesiones y
                  garantizando protección superior ante impactos.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <img
                src="/assets/icons/acoustic.svg"
                alt=""
                className="w-6 h-6 flex-shrink-0 text-blue-500 mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">
                  Eficiencia Acústica y Térmica
                </h3>
                <p className="text-gray-500">
                  Aislamiento de ruido exterior y control solar integrado para
                  ambientes más tranquilos y confortables, adaptándose a climas
                  extremos con máximo rendimiento energético.
                </p>
              </div>
            </li>

            <li className="flex items-start">
              <img
                src="/assets/icons/design.svg"
                alt=""
                className="w-6 h-6 flex-shrink-0 text-blue-500 mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">
                  Diseño Personalizado para Proyectos Únicos
                </h3>
                <p className="text-gray-500">
                  Acabados versátiles y opciones de personalización que fusionan
                  funcionalidad con estética, potenciando la innovación
                  arquitectónica y el valor visual de tus espacios.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
