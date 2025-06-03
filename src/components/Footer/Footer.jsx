import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-screen bg-black text-white py-10">
      {/* Contenedor centrado con ancho máximo */}
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center space-y-6">
        {/* Logos */}
        <div className="flex items-center justify-center w-full space-x-12">
          <img src="/logo.svg" alt="Norglass logo" className="h-4 w-auto invert brightness-0" />
          <img 
            src="/agc-glass-seeklogo.svg" 
            alt="AGC Glass" 
            className="h-14 w-auto invert brightness-0"
          />
          <img 
            src="/guardian-glass-seeklogo.svg" 
            alt="Guardian Glass" 
            className="h-20 w-auto invert brightness-0"
          />
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
            <a
              href="#caracteristicas"
              className="hover:text-blue-500 transition"
            >
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
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            className="hover:text-blue-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            className="hover:text-blue-500 transition"
          >
            <FaFacebookF />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          &copy; 2025 Norglass, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
