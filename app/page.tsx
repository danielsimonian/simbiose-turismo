"use client"

import React, { useState } from 'react';
import { Mountain, Droplets, MapPin, Calendar, Phone, Mail, Instagram, Facebook, Menu, X, Check, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

interface GaleriaItem {
  url: string;
  caption: string;
}

interface Pacote {
  id: string;
  titulo: string;
  descricao: string;
  preco: string;
  duracao: string;
  dificuldade: string;
  icone: any;
  destaques: string[];
  galeria: GaleriaItem[];
  descricaoDetalhada: string;
  roteiro: string[];
}

export default function SimbioseTurismo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPackage, setSelectedPackage] = useState<Pacote | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    data: '',
    pacote: '',
    pessoas: '1',
    mensagem: ''
  });
  const [formStatus, setFormStatus] = useState('');

  // Imagens do PETAR (usando Unsplash para fotos de cavernas, cachoeiras e natureza)
  const heroImages = [
    'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200&auto=format&fit=crop'
  ];

  const pacotes: Pacote[] = [
    {
      id: 'cavernas',
      titulo: 'Expedição Cavernas',
      descricao: 'Explore as incríveis cavernas do PETAR com formações milenares',
      preco: 'A partir de R$ 150',
      duracao: '4-6 horas',
      dificuldade: 'Moderada',
      icone: Mountain,
      destaques: ['Caverna do Santana', 'Caverna do Diabo', 'Equipamentos inclusos', 'Guia especializado'],
      galeria: [
        {
          url: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=800&auto=format&fit=crop',
          caption: 'Caverna do Santana - Formações de estalactites'
        },
        {
          url: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&auto=format&fit=crop',
          caption: 'Interior da caverna com iluminação natural'
        },
        {
          url: 'https://images.unsplash.com/photo-1601439678777-b2d6b6e8d6d0?w=800&auto=format&fit=crop',
          caption: 'Estalactites e estalagmites milenares'
        },
        {
          url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
          caption: 'Caverna do Diabo - Pórtico impressionante'
        },
        {
          url: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&auto=format&fit=crop',
          caption: 'Explorando as galerias subterrâneas'
        },
        {
          url: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&auto=format&fit=crop',
          caption: 'Caverna do Morro Preto'
        }
      ],
      descricaoDetalhada: 'O PETAR abriga mais de 300 cavernas catalogadas, sendo uma das maiores concentrações de cavernas do Brasil. A Caverna do Santana é a mais conhecida e ornamentada, com 9km de extensão (visitação de 495m). A Caverna do Diabo possui um dos maiores pórticos do mundo com 215m de altura. As formações de estalactites e estalagmites levaram milhões de anos para se formar, criando um espetáculo único da natureza.',
      roteiro: [
        'Encontro no Núcleo Santana às 9h',
        'Equipagem com capacete e lanterna',
        'Trilha de acesso às cavernas (30 min)',
        'Exploração da Caverna do Santana (2-3h)',
        'Almoço (não incluso)',
        'Opcional: Caverna do Morro Preto',
        'Retorno previsto para 16h'
      ]
    },
    {
      id: 'cachoeiras',
      titulo: 'Trilha das Cachoeiras',
      descricao: 'Banhos refrescantes nas mais belas cachoeiras da região',
      preco: 'A partir de R$ 120',
      duracao: '3-5 horas',
      dificuldade: 'Leve',
      icone: Droplets,
      destaques: ['Cachoeira do Couto', 'Cachoeira Meu Deus', 'Parada para banho', 'Lanche incluso'],
      galeria: [
        {
          url: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&auto=format&fit=crop',
          caption: 'Cachoeira das Andorinhas'
        },
        {
          url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop',
          caption: 'Mata Atlântica preservada'
        },
        {
          url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
          caption: 'Poço cristalino para banho'
        },
        {
          url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&auto=format&fit=crop',
          caption: 'Trilha em meio à floresta'
        },
        {
          url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&auto=format&fit=crop',
          caption: 'Vista panorâmica da região'
        },
        {
          url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&auto=format&fit=crop',
          caption: 'Rio Betari - águas cristalinas'
        }
      ],
      descricaoDetalhada: 'As cachoeiras do PETAR são verdadeiros paraísos escondidos na Mata Atlântica. A Cachoeira das Andorinhas, com 35m de altura, é a mais exótica do parque. A Cachoeira do Couto tem águas geladas que saem diretamente da caverna. O roteiro inclui banhos revigorantes em poços naturais de águas cristalinas, cercados pela floresta preservada.',
      roteiro: [
        'Encontro no Núcleo Santana às 8h',
        'Trilha do Betari (2h caminhada)',
        'Cachoeira do Couto - banho (30 min)',
        'Lanche na trilha',
        'Cachoeira das Andorinhas (1h)',
        'Cachoeira do Betarizinho - banho (45 min)',
        'Retorno pela mesma trilha',
        'Chegada prevista para 14h'
      ]
    },
    {
      id: 'completo',
      titulo: 'Aventura Completa',
      descricao: 'Combinação perfeita de cavernas, trilhas e cachoeiras',
      preco: 'A partir de R$ 250',
      duracao: 'Dia inteiro',
      dificuldade: 'Moderada',
      icone: MapPin,
      destaques: ['Caverna + Cachoeira', 'Almoço incluso', 'Fotos profissionais', 'Transporte incluso'],
      galeria: [
        {
          url: 'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=800&auto=format&fit=crop',
          caption: 'Cavernas impressionantes'
        },
        {
          url: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&auto=format&fit=crop',
          caption: 'Cachoeiras deslumbrantes'
        },
        {
          url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&auto=format&fit=crop',
          caption: 'Trilhas na Mata Atlântica'
        },
        {
          url: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&auto=format&fit=crop',
          caption: 'Explorando o mundo subterrâneo'
        },
        {
          url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
          caption: 'Natureza preservada'
        },
        {
          url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&auto=format&fit=crop',
          caption: 'Vista do Vale do Ribeira'
        }
      ],
      descricaoDetalhada: 'O pacote completo oferece a melhor experiência do PETAR em um único dia. Você visitará as principais cavernas do parque pela manhã, incluindo a famosa Caverna do Santana com suas formações impressionantes. Após o almoço, seguimos para as cachoeiras mais bonitas da região. Um fotógrafo acompanha o grupo para registrar os melhores momentos da aventura.',
      roteiro: [
        'Saída da pousada às 8h com transporte incluso',
        'Visita à Caverna do Santana (2h)',
        'Trilha até Caverna do Morro Preto (1h)',
        'Almoço típico da região (incluso)',
        'Trilha das Cachoeiras (2h)',
        'Banho na Cachoeira do Couto',
        'Coffee break com vista panorâmica',
        'Retorno à pousada às 18h'
      ]
    }
  ];

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setFormStatus('enviando');
    
    setTimeout(() => {
      setFormStatus('sucesso');
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        data: '',
        pacote: '',
        pessoas: '1',
        mensagem: ''
      });
      
      setTimeout(() => setFormStatus(''), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const navigateToPackage = (packageId: string) => {
    const pkg = pacotes.find(p => p.id === packageId);
    if (pkg) {
      setSelectedPackage(pkg);
      setCurrentPage('package-detail');
      setCurrentImageIndex(0);
      window.scrollTo(0, 0);
    }
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    setSelectedPackage(null);
    window.scrollTo(0, 0);
  };

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

  // Página de detalhes do pacote
  if (currentPage === 'package-detail' && selectedPackage) {
    const IconComponent = selectedPackage.icone;
    
    return (
      <div className="min-h-screen bg-white">
        {/* Header/Navbar */}
        <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <button 
                onClick={navigateToHome}
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
                      onClick={navigateToHome}
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
        <section id="agendamento" className="py-20 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-purple-900 mb-4">Agende Seu Passeio</h2>
                <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
                <p className="text-lg text-gray-700">
                  Preencha o formulário e entraremos em contato para confirmar sua reserva
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-purple-900 font-semibold mb-2">Nome Completo *</label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:border-teal-500"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <label className="block text-purple-900 font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:border-teal-500"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-purple-900 font-semibold mb-2">Telefone *</label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:border-teal-500"
                      placeholder="(00) 00000-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-purple-900 font-semibold mb-2">Data Desejada *</label>
                    <input
                      type="date"
                      name="data"
                      value={formData.data}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:border-teal-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-purple-900 font-semibold mb-2">Pacote *</label>
                    <select
                      name="pacote"
                      value={formData.pacote || selectedPackage.id}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:border-teal-500"
                    >
                      <option value={selectedPackage.id}>{selectedPackage.titulo}</option>
                      {pacotes.filter(p => p.id !== selectedPackage.id).map(p => (
                        <option key={p.id} value={p.id}>{p.titulo}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-purple-900 font-semibold mb-2">Número de Pessoas *</label>
                    <input
                      type="number"
                      name="pessoas"
                      value={formData.pessoas}
                      onChange={handleChange}
                      min="1"
                      className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:border-teal-500"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-purple-900 font-semibold mb-2">Mensagem</label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:border-teal-500"
                    placeholder="Alguma observação ou dúvida?"
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={formStatus === 'enviando'}
                  className="w-full bg-gradient-to-r from-teal-500 to-purple-900 text-white py-4 rounded-full text-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
                >
                  {formStatus === 'enviando' ? 'Enviando...' : 'Solicitar Agendamento'}
                </button>

                {formStatus === 'sucesso' && (
                  <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
                    ✓ Solicitação enviada com sucesso! Entraremos em contato em breve.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

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

  // Página Home
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navbar */}
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

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-purple-900 via-purple-800 to-teal-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Explore a Natureza do PETAR
              </h1>
              <p className="text-xl text-purple-100">
                Viva experiências inesquecíveis nas cavernas, trilhas e cachoeiras mais incríveis do Vale do Ribeira
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#pacotes" className="bg-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-600 transition text-center">
                  Ver Pacotes
                </a>
                <a href="#agendamento" className="bg-white text-purple-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition text-center">
                  Agendar Passeio
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="space-y-4 text-white">
                  <div className="flex items-center space-x-3">
                    <Mountain className="text-teal-400" size={32} />
                    <div>
                      <h3 className="font-bold text-lg">Mais de 300 Cavernas</h3>
                      <p className="text-purple-200">Formações únicas</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Droplets className="text-teal-400" size={32} />
                    <div>
                      <h3 className="font-bold text-lg">Cachoeiras Cristalinas</h3>
                      <p className="text-purple-200">Águas puras e refrescantes</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-teal-400" size={32} />
                    <div>
                      <h3 className="font-bold text-lg">Guias Especializados</h3>
                      <p className="text-purple-200">Monitores credenciados</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o PETAR */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-900 mb-4">Parque Estadual Turístico do Alto Ribeira</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              O PETAR é um dos principais destinos de ecoturismo do Brasil, localizado entre Iporanga e Apiaí, no sul de São Paulo. 
              Com mais de 35 mil hectares de Mata Atlântica preservada, o parque abriga uma das maiores concentrações de cavernas do Brasil.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-purple-50 rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Cavernas Incríveis</h3>
              <p className="text-gray-700">Mais de 300 cavernas catalogadas com formações milenares de estalactites e estalagmites</p>
            </div>

            <div className="bg-teal-50 rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Rios e Cachoeiras</h3>
              <p className="text-gray-700">Águas cristalinas para banho e contemplação em meio à natureza preservada</p>
            </div>

            <div className="bg-purple-50 rounded-2xl p-8 text-center hover:shadow-xl transition">
              <div className="bg-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Mata Atlântica</h3>
              <p className="text-gray-700">Biodiversidade única com fauna e flora preservadas em trilhas ecológicas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Fotos */}
      <section id="galeria" className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-900 mb-4">Conheça o PETAR</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Descubra as belezas naturais que te esperam nesta aventura única
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { url: heroImages[0], caption: 'Cavernas Milenares', category: 'Cavernas' },
              { url: heroImages[1], caption: 'Cachoeiras Cristalinas', category: 'Cachoeiras' },
              { url: heroImages[2], caption: 'Mata Atlântica Preservada', category: 'Natureza' },
              { url: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&auto=format&fit=crop', caption: 'Formações Rochosas', category: 'Cavernas' },
              { url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format&fit=crop', caption: 'Trilhas Ecológicas', category: 'Trilhas' },
              { url: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&auto=format&fit=crop', caption: 'Quedas D\'água', category: 'Cachoeiras' }
            ].map((image, index) => (
              <div key={index} className="group relative aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                <img 
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block bg-teal-500 text-white text-xs px-3 py-1 rounded-full mb-2">{image.category}</span>
                    <h3 className="text-white text-xl font-bold">{image.caption}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pacotes */}
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
                      onClick={() => navigateToPackage(pacote.id)}
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

      {/* Formulário de Agendamento */}
      <section id="agendamento" className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-purple-900 mb-4">Agende Seu Passeio</h2>
              <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-700">
                Preencha o formulário abaixo e entraremos em contato para confirmar sua reserva
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-purple-900 font-semibold mb-2">Nome Completo *</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:border-teal-500"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="block text-purple-900 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:border-teal-500"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-purple-900 font-semibold mb-2">Telefone *</label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:border-teal-500"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <label className="block text-purple-900 font-semibold mb-2">Data Desejada *</label>
                  <input
                    type="date"
                    name="data"
                    value={formData.data}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-purple-900 font-semibold mb-2">Pacote *</label>
                  <select
                    name="pacote"
                    value={formData.pacote}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:border-teal-500"
                  >
                    <option value="">Selecione um pacote</option>
                    <option value="cavernas">Expedição Cavernas</option>
                    <option value="cachoeiras">Trilha das Cachoeiras</option>
                    <option value="completo">Aventura Completa</option>
                  </select>
                </div>

                <div>
                  <label className="block text-purple-900 font-semibold mb-2">Número de Pessoas *</label>
                  <input
                    type="number"
                    name="pessoas"
                    value={formData.pessoas}
                    onChange={handleChange}
                    min="1"
                    className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-purple-900 font-semibold mb-2">Mensagem</label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:border-teal-500"
                  placeholder="Alguma observação ou dúvida?"
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                disabled={formStatus === 'enviando'}
                className="w-full bg-gradient-to-r from-teal-500 to-purple-900 text-white py-4 rounded-full text-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
              >
                {formStatus === 'enviando' ? 'Enviando...' : 'Solicitar Agendamento'}
              </button>

              {formStatus === 'sucesso' && (
                <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
                  ✓ Solicitação enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
            <div className="w-20 h-1 bg-teal-400 mx-auto mb-6"></div>
            <p className="text-xl text-purple-100">
              Estamos prontos para tornar sua aventura inesquecível
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={28} className="text-teal-400" />
              </div>
              <h3 className="font-bold text-lg mb-2">Telefone</h3>
              <p className="text-purple-100">(15) 99999-9999</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={28} className="text-teal-400" />
              </div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-purple-100">contato@simbiosepetar.com.br</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={28} className="text-teal-400" />
              </div>
              <h3 className="font-bold text-lg mb-2">Localização</h3>
              <p className="text-purple-100">Iporanga/Eldorado - SP</p>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mt-12">
            <a href="#" className="bg-white/10 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center hover:bg-teal-500 transition">
              <Instagram size={24} />
            </a>
            <a href="#" className="bg-white/10 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center hover:bg-teal-500 transition">
              <Facebook size={24} />
            </a>
          </div>
        </div>
      </section>

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