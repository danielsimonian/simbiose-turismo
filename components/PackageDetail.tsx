"use client"

import { useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, Calendar, Mountain, MapPin, Check } from 'lucide-react';
import { Pacote } from '@/lib/types';
import BookingForm from './BookingForm';

interface PackageDetailProps {
  package: Pacote;
  onBack: () => void;
}

export default function PackageDetail({ package: selectedPackage, onBack }: PackageDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const IconComponent = selectedPackage.icone;

  const nextImage = () => {
    if (selectedPackage && selectedPackage.galeria) {
      setCurrentImageIndex((prev) => 
        prev === selectedPackage.galeria.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedPackage && selectedPackage.galeria) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedPackage.galeria.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={onBack}
              className="flex items-center space-x-2 text-purple-900 hover:text-teal-500 transition"
            >
              <ArrowLeft size={24} />
              <span className="text-2xl font-bold">SIMBIOSE</span>
            </button>
            
            <a href="#agendamento" className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition">
              Agendar Agora
            </a>
          </div>
        </nav>
      </header>

      {/* Hero do Pacote */}
      <section className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-purple-900 via-purple-800 to-teal-600">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              {/* Galeria Principal */}
              <div className="relative h-96 md:h-[500px] bg-gray-900">
                <img 
                  src={selectedPackage.galeria[currentImageIndex].url}
                  alt={selectedPackage.galeria[currentImageIndex].caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white text-lg">{selectedPackage.galeria[currentImageIndex].caption}</p>
                </div>
                
                {/* Controles da galeria */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition"
                >
                  <ChevronLeft className="text-white" size={28} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition"
                >
                  <ChevronRight className="text-white" size={28} />
                </button>

                {/* Indicadores */}
                <div className="absolute bottom-20 left-0 right-0 flex justify-center space-x-2">
                  {selectedPackage.galeria.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition ${
                        index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Informações do Pacote */}
              <div className="p-8 md:p-12">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-br from-teal-500 to-purple-900 p-4 rounded-2xl">
                    <IconComponent className="text-white" size={40} />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold text-purple-900">{selectedPackage.titulo}</h1>
                    <p className="text-xl text-teal-600 font-semibold">{selectedPackage.preco}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-purple-50 rounded-xl p-4">
                    <Calendar className="text-teal-500 mb-2" size={24} />
                    <p className="text-sm text-gray-600">Duração</p>
                    <p className="text-lg font-semibold text-purple-900">{selectedPackage.duracao}</p>
                  </div>
                  <div className="bg-teal-50 rounded-xl p-4">
                    <Mountain className="text-purple-900 mb-2" size={24} />
                    <p className="text-sm text-gray-600">Dificuldade</p>
                    <p className="text-lg font-semibold text-purple-900">{selectedPackage.dificuldade}</p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-4">
                    <MapPin className="text-teal-500 mb-2" size={24} />
                    <p className="text-sm text-gray-600">Local</p>
                    <p className="text-lg font-semibold text-purple-900">PETAR - Iporanga</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-purple-900 mb-4">Sobre este Passeio</h2>
                  <p className="text-gray-700 text-lg leading-relaxed">{selectedPackage.descricaoDetalhada}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-purple-900 mb-4">O que está incluído</h2>
                    <div className="space-y-3">
                      {selectedPackage.destaques.map((destaque, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <Check size={20} className="text-teal-500 flex-shrink-0" />
                          <span className="text-gray-700">{destaque}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-purple-900 mb-4">Roteiro do Dia</h2>
                    <div className="space-y-3">
                      {selectedPackage.roteiro.map((item, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="bg-teal-500 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                            {i + 1}
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Galeria de Miniaturas */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-purple-900 mb-4">Galeria de Fotos</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedPackage.galeria.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative aspect-video rounded-xl overflow-hidden hover:scale-105 transition ${
                          index === currentImageIndex ? 'ring-4 ring-teal-500' : ''
                        }`}
                      >
                        <img 
                          src={image.url}
                          alt={image.caption}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#agendamento" 
                    className="flex-1 bg-gradient-to-r from-teal-500 to-purple-900 text-white text-center py-4 rounded-full text-lg font-semibold hover:opacity-90 transition"
                  >
                    Agendar Este Passeio
                  </a>
                  <button 
                    onClick={onBack}
                    className="flex-1 bg-purple-100 text-purple-900 py-4 rounded-full text-lg font-semibold hover:bg-purple-200 transition"
                  >
                    Ver Outros Pacotes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Agendamento */}
      <BookingForm selectedPackage={selectedPackage} />

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-2">SIMBIOSE</div>
          <p className="text-purple-300 mb-4">Turismo Ecológico no PETAR</p>
          <p className="text-sm text-purple-400">
            © 2024 Simbiose Turismo. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}