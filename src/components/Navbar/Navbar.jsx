import React from 'react';
import ContactButton from '../ContactButton/ContactButton.jsx';

export default function Navbar() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="sticky top-0 bg-white z-50 shadow-lg shadow-blue-500/20">
      <div className="container mx-auto flex items-center py-4 px-6 justify-start">
        <a
          href="#inicio"
          onClick={scrollTo('inicio')}
          className="text-2xl font-bold text-primary transition"
        >
          NORGLASS
        </a>
        <ul className="hidden md:flex space-x-8 ml-8">
          <li>
            <a
              href="#inicio"
              onClick={scrollTo('inicio')}
              className="hover:text-primary transition"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#soluciones"
              onClick={scrollTo('soluciones')}
              className="hover:text-primary transition"
            >
              Soluciones
            </a>
          </li>
          <li>
            <a
              href="#caracteristicas"
              onClick={scrollTo('caracteristicas')}
              className="hover:text-primary transition"
            >
              Características
            </a>
          </li>
          <li>
            <a
              href="#tecnologia"
              onClick={scrollTo('tecnologia')}
              className="hover:text-primary transition"
            >
              Tecnología
            </a>
          </li>
          <li>
            <a
              href="#productos"
              onClick={scrollTo('productos')}
              className="hover:text-primary transition"
            >
              Productos
            </a>
          </li>
        </ul>
        <div className="ml-auto flex items-center">
          <ContactButton />
          <div className="md:hidden">
            {/* Aquí podrías añadir lógica para menú móvil */}
            <button aria-label="Abrir menú">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
