"use client"

import { useState } from 'react';
import { pacotes } from '@/lib/data';
import { Pacote } from '@/lib/types';

interface BookingFormProps {
  selectedPackage?: Pacote | null;
}

export default function BookingForm({ selectedPackage }: BookingFormProps) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    data: '',
    pacote: selectedPackage?.id || '',
    pessoas: '1',
    mensagem: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.nome || !formData.email || !formData.telefone || !formData.data || !formData.pacote) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    
    setFormStatus('enviando');
    
    try {
      const response = await fetch('/api/send-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
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
        
        setTimeout(() => setFormStatus(''), 5000);
      } else {
        setFormStatus('erro');
        setTimeout(() => setFormStatus(''), 5000);
      }
    } catch (error) {
      console.error('Erro ao enviar:', error);
      setFormStatus('erro');
      setTimeout(() => setFormStatus(''), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
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
                  className="text-gray-900 w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:border-teal-500"
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
                  className="text-gray-900 w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:border-teal-500"
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
                  className="text-gray-900 w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:border-teal-500"
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
                  className="text-gray-900 w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:border-teal-500"
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
                  className="text-gray-900 w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:border-teal-500"
                >
                  {!selectedPackage && <option value="">Selecione um pacote</option>}
                  {pacotes.map(p => (
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
                  className="text-gray-900 w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:border-teal-500"
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
                className="text-gray-900 w-full px-4 py-3 rounded-lg border border-purple-200 focus:outline-none focus:border-teal-500"
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

            {formStatus === 'erro' && (
              <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-center">
                ✗ Erro ao enviar solicitação. Tente novamente.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}