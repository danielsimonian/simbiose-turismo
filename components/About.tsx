import { Mountain, Droplets, MapPin } from 'lucide-react';

export default function About() {
  return (
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
  );
}