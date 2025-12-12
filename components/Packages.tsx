"use client"

import { Calendar, Check } from 'lucide-react';
import { pacotes } from '@/lib/data';

interface PackagesProps {
  onSelectPackage: (packageId: string) => void;
}

export default function Packages({ onSelectPackage }: PackagesProps) {
  return (
    <section id="pacotes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-900 mb-4">Nossos Pacotes</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Escolha a aventura perfeita para você. Todos os pacotes incluem guia especializado e equipamentos de segurança
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pacotes.map((pacote, index) => {
            const IconComponent = pacote.icone;
            return (
              <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={pacote.galeria[0].url}
                    alt={pacote.titulo}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <IconComponent size={36} className="text-white mb-2" />
                    <h3 className="text-2xl font-bold text-white">{pacote.titulo}</h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-700 mb-4">{pacote.descricao}</p>
                  <div className="text-3xl font-bold text-teal-600 mb-6">{pacote.preco}</div>
                  
                  <div className="flex items-center justify-between mb-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar size={18} className="text-teal-500" />
                      <span className="text-gray-700">{pacote.duracao}</span>
                    </div>
                    <div className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {pacote.dificuldade}
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {pacote.destaques.slice(0, 3).map((destaque, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Check size={18} className="text-teal-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{destaque}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => onSelectPackage(pacote.id)}
                    className="block w-full bg-gradient-to-r from-teal-500 to-purple-900 text-white text-center py-3 rounded-full font-semibold hover:opacity-90 transition"
                  >
                    Ver Detalhes e Fotos
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}