import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nome, email, telefone, data, pacote, pessoas, mensagem } = body;

    // Mapeamento dos pacotes
    const pacoteNomes: { [key: string]: string } = {
      cavernas: 'Expedição Cavernas',
      cachoeiras: 'Trilha das Cachoeiras',
      completo: 'Aventura Completa'
    };

    const pacoteNome = pacoteNomes[pacote] || pacote;

    const { data: emailData, error } = await resend.emails.send({
      from: 'Simbiose Turismo <onboarding@resend.dev>', // Depois muda pra seu domínio
      to: ['danielsimonian@gmail.com'], // Email onde vai receber os agendamentos
      replyTo: email,
      subject: `Novo Agendamento - ${pacoteNome}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #581c87 0%, #14b8a6 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 32px;">SIMBIOSE</h1>
            <p style="color: #e9d5ff; margin: 5px 0 0 0;">Novo Agendamento de Passeio</p>
          </div>
          
          <div style="background: #f9fafb; padding: 30px;">
            <h2 style="color: #581c87; margin-top: 0;">📋 Detalhes do Agendamento</h2>
            
            <div style="background: white; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
              <p style="margin: 10px 0;"><strong>👤 Nome:</strong> ${nome}</p>
              <p style="margin: 10px 0;"><strong>📧 Email:</strong> ${email}</p>
              <p style="margin: 10px 0;"><strong>📱 Telefone:</strong> ${telefone}</p>
            </div>

            <div style="background: white; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
              <p style="margin: 10px 0;"><strong>📦 Pacote:</strong> ${pacoteNome}</p>
              <p style="margin: 10px 0;"><strong>📅 Data Desejada:</strong> ${new Date(data).toLocaleDateString('pt-BR')}</p>
              <p style="margin: 10px 0;"><strong>👥 Número de Pessoas:</strong> ${pessoas}</p>
            </div>

            ${mensagem ? `
            <div style="background: white; padding: 20px; border-radius: 10px;">
              <p style="margin: 10px 0;"><strong>💬 Mensagem:</strong></p>
              <p style="margin: 10px 0; color: #666;">${mensagem}</p>
            </div>
            ` : ''}
          </div>

          <div style="background: #581c87; padding: 20px; text-align: center;">
            <p style="color: #e9d5ff; margin: 0; font-size: 14px;">
              Simbiose Turismo - PETAR<br>
              Iporanga/Eldorado - SP
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Erro ao enviar email:', error);
      return NextResponse.json({ error: 'Erro ao enviar email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: emailData }, { status: 200 });
  } catch (error) {
    console.error('Erro na API:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}