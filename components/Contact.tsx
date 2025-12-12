import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
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
  );
}