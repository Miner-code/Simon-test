import React from "react";
import logo from "../assets/K_logo.png";

export default function Navbar() {
  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50 backdrop-blur bg-opacity-70">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center scroll-smooth">
        <div className="flex items-center gap-3">
          <img src={logo} alt="KodiBuild logo" className="h-8" />
          <span className="text-xl font-bold tracking-wide">KODIBUILD</span>
        </div>
        <nav className="flex items-center gap-6 font-medium text-sm">
          <a href="#fonctionnalites" className="hover:text-[#a300ab] transition">Fonctionnalités</a>
          <a href="#tarifs" className="hover:text-[#a300ab] transition">Tarifs</a>
          <a href="#chiffres" className="hover:text-[#a300ab] transition">À propos</a>
          <a href="#contact" className="bg-[#8e00ae] hover:bg-[#a300ab] px-4 py-2 rounded-lg transition text-white inline-block align-middle">
            Contactez
          </a>
        </nav>
      </div>
    </header>
  );
}