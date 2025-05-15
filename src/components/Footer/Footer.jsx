import React from 'react';
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="w-screen bg-black text-white py-10">
      {/* Contenedor centrado con ancho máximo */}
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center space-y-6">
        {/* Logo */}
        <div className="text-3xl font-bold tracking-wider">
          NORGLASS
        </div>

        {/* Enlaces de navegación */}
        <ul className="flex flex-wrap justify-center space-x-8">
          <li>
            <a href="#inicio" className="hover:text-blue-500 transition">
              Inicio
            </a>
          </li>
          <li>
            <a href="#soluciones" className="hover:text-blue-500 transition">
              Soluciones
            </a>
          </li>
          <li>
            <a href="#caracteristicas" className="hover:text-blue-500 transition">
              Características
            </a>
          </li>
          <li>
            <a href="#tecnologia" className="hover:text-blue-500 transition">
              Tecnología
            </a>
          </li>
        </ul>

        {/* Iconos sociales */}
        <div className="flex space-x-6 text-xl">
          <a href="https://instagram.com" aria-label="Instagram" className="hover:text-blue-500 transition">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-500 transition">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" aria-label="X" className="hover:text-blue-500 transition">
            <SiX />
          </a>
          <a href="https://youtube.com" aria-label="YouTube" className="hover:text-blue-500 transition">
            <FaYoutube />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          &copy; 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
