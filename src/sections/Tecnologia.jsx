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
    <section id="tecnologia" className="min-h-screen bg-blue-50 flex items-center">
      <div className="max-w-7xl mx-auto px-8 lg:px-32 py-20">
        <div className="space-y-12">
          {/* Título */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Tecnología y Diseño en Vidrio:{' '}
              <span className="text-primary">
                Soluciones que Definen el Futuro de la Construcción
              </span>
            </h2>
            {/* Subtítulo */}
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explora nuestra gama de Vidrios Laminados 3+3, DVH y Espejos – Seguridad, Aislamiento y
              Estética para proyectos arquitectónicos de alto impacto
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
            {products.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-[300px]">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900">{p.title}</h3>
                  <ul className="space-y-3">
                    {p.bullets.map((b) => (
                      <li key={b} className="text-gray-600 leading-relaxed">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
