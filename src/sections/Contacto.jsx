// src/sections/Contacto.jsx
import React, { useState } from "react";
import emailjs from '@emailjs/browser';
// Si prefieres importar la imagen desde src/assets:
// import contactoHero from '../assets/contacto-hero.jpg';

// Configuración de EmailJS:
// 1. Crear una cuenta en https://www.emailjs.com/
// 2. Crear un servicio de email (Gmail, Outlook, etc.)
// 3. Crear una plantilla de email
// 4. Obtener las credenciales:
//    - Service ID: En la sección "Email Services"
//    - Template ID: En la sección "Email Templates"
//    - Public Key: En la sección "Account" > "API Keys"
// 5. Crear un archivo .env en la raíz del proyecto y agregar:
//    VITE_EMAILJS_SERVICE_ID=tu_service_id
//    VITE_EMAILJS_TEMPLATE_ID=tu_template_id
//    VITE_EMAILJS_PUBLIC_KEY=tu_public_key

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);
    
    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      if (result.text === 'OK') {
        setSubmitStatus({ type: 'success', message: '¡Mensaje enviado correctamente!' });
        setForm({ nombre: "", email: "", telefono: "", mensaje: "" });
      } else {
        setSubmitStatus({ type: 'error', message: 'Error al enviar el mensaje. Intenta nuevamente.' });
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Error al enviar el mensaje. Por favor, intenta nuevamente más tarde.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contacto"
      className="bg-gray-100 min-h-screen flex items-center"
    >
      <div className="container mx-auto px-6 lg:px-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen pb-4">
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
              disabled={isLoading}
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={form.email}
              onChange={handleChange}
              className="w-full h-12 px-4 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              disabled={isLoading}
            />
            <input
              type="tel"
              name="telefono"
              placeholder="Número de teléfono"
              value={form.telefono}
              onChange={handleChange}
              className="w-full h-12 px-4 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              disabled={isLoading}
            />
            <textarea
              name="mensaje"
              rows="5"
              placeholder="Mensaje"
              value={form.mensaje}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              required
              disabled={isLoading}
            />
            {submitStatus && (
              <div className={`p-4 rounded-lg ${
                submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {submitStatus.message}
              </div>
            )}
            <button
              type="submit"
              className={`mt-2 inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg transition ${
                isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
              }`}
              disabled={isLoading}
            >
              {isLoading ? 'Enviando...' : 'Enviar información'}
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
