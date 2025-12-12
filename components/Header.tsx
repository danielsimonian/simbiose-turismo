"use client"

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-3xl font-bold text-purple-900">SIMBIOSE</div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-purple-900 hover:text-teal-500 transition">Início</a>
            <a href="#sobre" className="text-purple-900 hover:text-teal-500 transition">Sobre</a>
            <a href="#galeria" className="text-purple-900 hover:text-teal-500 transition">Galeria</a>
            <a href="#pacotes" className="text-purple-900 hover:text-teal-500 transition">Pacotes</a>
            <a href="#agendamento" className="text-purple-900 hover:text-teal-500 transition">Agendar</a>
            <a href="#contato" className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition">Contato</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-purple-900"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <a href="#home" className="block text-purple-900 hover:text-teal-500 transition py-2" onClick={() => setMenuOpen(false)}>Início</a>
            <a href="#sobre" className="block text-purple-900 hover:text-teal-500 transition py-2" onClick={() => setMenuOpen(false)}>Sobre</a>
            <a href="#galeria" className="block text-purple-900 hover:text-teal-500 transition py-2" onClick={() => setMenuOpen(false)}>Galeria</a>
            <a href="#pacotes" className="block text-purple-900 hover:text-teal-500 transition py-2" onClick={() => setMenuOpen(false)}>Pacotes</a>
            <a href="#agendamento" className="block text-purple-900 hover:text-teal-500 transition py-2" onClick={() => setMenuOpen(false)}>Agendar</a>
            <a href="#contato" className="block bg-teal-500 text-white px-6 py-2 rounded-full text-center" onClick={() => setMenuOpen(false)}>Contato</a>
          </div>
        )}
      </nav>
    </header>
  );
}