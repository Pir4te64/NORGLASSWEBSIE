import React from 'react';
import { Volume2, Shield, SunDim, Maximize2, Grid, Leaf } from 'lucide-react';

const cards = [
  {
    title: 'Alto Rendimiento Acústico',
    description:
      'Reducción de hasta un 50% en la transmisión de ruido exterior, ideal para edificios en zonas urbanas, oficinas o espacios que requieren tranquilidad y concentración.',
    icon: Volume2,
  },
  {
    title: 'Seguridad Antifragmentación',
    description:
      'Gracias a la capa de PVB, nuestros vidrios mantienen los fragmentos cohesionados ante roturas, reduciendo riesgos de lesiones y garantizando protección en entornos de alto tráfico o impacto.',
    icon: Shield,
  },
  {
    title: 'Control Solar y Térmico',
    description:
      'Capas especializadas bloquean hasta el 90% de los rayos UV y regulan la temperatura interior, optimizando el consumo energético y mejorando el confort en climas extremos.',
    icon: SunDim,
  },
  {
    title: 'Resistencia a Impactos Severos',
    description:
      'Estructura laminada 3+3 que soporta golpes y presiones, perfecta para fachadas, ventanales o áreas expuestas a condiciones climáticas adversas o vandalismo.',
    icon: Maximize2,
  },
  {
    title: 'Personalización Arquitectónica',
    description:
      'Acabados en tonos, texturas y opacidades variables, adaptables a diseños vanguardistas o clásicos, potenciando la estética y funcionalidad de cualquier proyecto.',
    icon: Grid,
  },
  {
    title: 'Sostenibilidad Certificada',
    description:
      'Fabricados con procesos ecoeficientes y materiales reciclables, contribuyen a certificaciones LEED y BREEAM, alineados con estándares globales de construcción verde.',
    icon: Leaf,
  },
];

export default function Caracteristicas() {
  return (
    <section id="caracteristicas" className="bg-gray-50 py-20 px-8 lg:px-32">
      {/* Heading y subtítulo */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Características de nuestros <span className="text-blue-500">vidrios laminados</span>
        </h2>
        <p className="mt-2 text-gray-500">
          Tecnología, Seguridad y Sostenibilidad para Proyectos que Marcan la Diferencia
        </p>
      </div>

      {/* Grid de tarjetas */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, i) => {
          const Icon = card.icon;
          const isActive = i === 0;
          return (
            <div
              key={card.title}
              className={
                `rounded-2xl p-6 space-y-4 transition border ` +
                (isActive
                  ? 'border-blue-500 shadow-xl shadow-blue-500/20'
                  : 'border-gray-200 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20')
              }
            >
              <Icon className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className={isActive ? 'text-blue-600' : 'text-gray-600'}>
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
