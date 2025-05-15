// src/sections/Tecnologia.jsx
import React from 'react';

const products = [
  {
    title: 'Vidrios Laminados 3+3',
    img: '/assets/laminados-3x3.jpg',
    bullets: [
      'Compuesto por dos capas de vidrio de 3 mm unidas por una lámina de PVB.',
      'Aplicaciones: Seguridad en edificios, control térmico/acústico y diseño arquitectónico personalizado.',
      'Ventajas: Resistencia a impactos, reducción de ruido, protección UV y estética adaptable.',
    ],
  },
  {
    title: 'DVH (Doble Vidriado Hermético)',
    img: '/assets/dvh.jpg',
    bullets: [
      'Producto en desarrollo, actualmente en construcción en su fábrica del Parque Industrial Posadas.',
      'Objetivo: Satisfacer la demanda creciente gracias a sus ventajas técnicas y energéticas.',
      'El DVH reduce hasta un 70 % las pérdidas de calor o frío.',
    ],
  },
  {
    title: 'Espejos',
    img: '/assets/espejos.jpg',
    bullets: [
      'Disponibles en biselados, con marcos metálicos o sin marco, adaptables a estilos modernos, clásicos o minimalistas, ideales para baños, salas de espejos o decoración de interiores.',
      'Superficie tratada para reducir reflejos molestos y resistir la humedad, perfecta para espacios húmedos o exteriores.',
    ],
  },
];

export default function Tecnologia() {
  return (
    <section id="tecnologia" className="bg-blue-50 py-20 px-8 lg:px-32">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Título */}
        <h2 className="text-3xl lg:text-4xl font-bold text-center">
          Tecnología y Diseño en Vidrio:{' '}
          <span className="text-blue-500">
            Soluciones que Definen el Futuro de la Construcción
          </span>
        </h2>
        {/* Subtítulo */}
        <p className="text-center text-gray-500">
          Explora nuestra gama de Vidrios Laminados 3+3, DVH y Espejos – Seguridad, Aislamiento y
          Estética para proyectos arquitectónicos de alto impacto
        </p>

        {/* Cards */}
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.title} className="flex flex-col space-y-4">
              <img
                src={p.img}
                alt={p.title}
                className="w-full rounded-2xl object-cover shadow-sm"
              />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
