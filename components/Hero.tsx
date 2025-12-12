import { Mountain, Droplets, MapPin } from 'lucide-react';

export default function Hero() {
  return (
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
  );
}