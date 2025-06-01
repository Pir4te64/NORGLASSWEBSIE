// src/sections/Tecnologia.jsx
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    title: "Vidrios Laminados 3+3",
    img: "/10.png",
    bullets: [
      "Compuesto por dos capas de vidrio de 3 mm unidas por una lámina de PVB.",
      "Aplicaciones: Seguridad en edificios, control térmico/acústico y diseño arquitectónico personalizado.",
      "Ventajas: Resistencia a impactos, reducción de ruido, protección UV y estética adaptable.",
    ],
  },
  {
    title: "DVH (Doble Vidriado Hermético)",
    img: "/11.png",
    bullets: [
      "Producto en desarrollo, actualmente en construcción en su fábrica del Parque Industrial Posadas.",
      "Objetivo: Satisfacer la demanda creciente gracias a sus ventajas técnicas y energéticas.",
      "El DVH reduce hasta un 70 % las pérdidas de calor o frío.",
    ],
  },
  {
    title: "Espejos",
    img: "/12.png",
    bullets: [
      "Disponibles en biselados, con marcos metálicos o sin marco, adaptables a estilos modernos, clásicos o minimalistas, ideales para baños, salas de espejos o decoración de interiores.",
      "Superficie tratada para reducir reflejos molestos y resistir la humedad, perfecta para espacios húmedos o exteriores.",
    ],
  },
  {
    title: "Vidrios Monolíticos",
    img: "/13.png",
    bullets: [
      "Cuando hablamos de vidrio o cristal monolítico nos referimos a aquellos vidrios formados solo por una masa vítrea, sin ningún otro tipo de capa o tratamiento.",
      "Los vidrios monolíticos son realmente esa primera plancha de vidrio, que tiene como resultado un vidrio común.",
    ],
  },
  {
    title: "Proyectos a Medida",
    img: "/14.png",
    bullets: [
      "En Norglass entendemos que cada obra es única. Por eso, además de ofrecer vidrios de alta calidad, brindamos soluciones personalizadas para proyectos especiales.",
      "Nuestro equipo acompaña cada etapa del proceso: desde el asesoramiento técnico hasta la fabricación del vidrio con las especificaciones exactas que tu proyecto necesita.",
    ],
  },
];

export default function Tecnologia() {
  const swiperRef = useRef(null);

  return (
    <section
      id="tecnologia"
      className="min-h-screen bg-blue-50 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-32 py-20">
        <div className="space-y-12">
          {/* Título y subtítulo según la imagen de referencia */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Proyectos especiales:{" "}
              <span className="text-primary">
                Multilaminados y templados laminados
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-400 font-medium">
              Vidrios cortados a medida
            </p>
          </div>

          {/* Carrusel de tarjetas con Swiper y flechas minimalistas */}
          <div className="relative w-full flex items-center">
            <button
              className="absolute left-0 z-20 bg-white border border-gray-300 rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-blue-100 transition-all"
              style={{ transform: "translateX(-60%)" }}
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Anterior"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={40}
              slidesPerView={3}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              className="!pb-10"
              navigation={false}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {products.map((p) => (
                <SwiperSlide key={p.title}>
                  <div className="bg-white rounded-2xl border border-blue-200 shadow transition-shadow duration-300 hover:shadow-md p-4 h-full flex flex-col">
                    <div className="h-[200px] w-full mb-4">
                      <img
                        src={p.img}
                        alt={p.title}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <div className="px-2 pb-2 text-left flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {p.title}
                      </h3>
                      <ul className="space-y-2">
                        {p.bullets.map((b) => (
                          <li
                            key={b}
                            className="text-gray-600 leading-relaxed text-sm"
                          >
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              className="absolute right-0 z-20 bg-white border border-gray-300 rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-blue-100 transition-all"
              style={{ transform: "translateX(60%)" }}
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Siguiente"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <style>
        {`
.swiper-button-next, .swiper-button-prev { display: none !important; }
`}
      </style>
    </section>
  );
}
