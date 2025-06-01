// src/sections/Contacto.jsx
import React, { useState } from "react";
// Si prefieres importar la imagen desde src/assets:
// import contactoHero from '../assets/contacto-hero.jpg';

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí tu lógica de envío (API, email, etc.)
    console.log("Formulario enviado:", form);
  };

  return (
    <section id="contacto" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 lg:px-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Columna izquierda: encabezado + formulario */}
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight text-gray-900">
            ¡Transforme sus proyectos con vidrios de alta tecnología!
          </h2>
          <p className="text-gray-600">
            Complete el formulario ahora y reciba asesoría personalizada,
            cotizaciones express y soluciones adaptadas a sus necesidades
            arquitectónicas.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre y Apellido"
              value={form.nombre}
              onChange={handleChange}
              className="w-full h-12 px-4 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={form.email}
              onChange={handleChange}
              className="w-full h-12 px-4 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="tel"
              name="telefono"
              placeholder="Número de teléfono"
              value={form.telefono}
              onChange={handleChange}
              className="w-full h-12 px-4 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="mensaje"
              rows="5"
              placeholder="Mensaje"
              value={form.mensaje}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              required
            />
            <button
              type="submit"
              className="mt-2 inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Enviar información
            </button>
          </form>
        </div>

        {/* Columna derecha: imagen */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          {/* Usar ruta pública: coloca la imagen en public/assets/contacto-hero.jpg */}
          <img
            src="/15.png"
            alt="Asesoría de proyectos de vidrio laminado"
            className="w-full h-auto object-cover"
          />
          {/* O, si importas la imagen desde src/assets: */}
          {/* <img src={contactoHero} alt="..." className="w-full h-auto object-cover" /> */}
        </div>
      </div>
    </section>
  );
}
