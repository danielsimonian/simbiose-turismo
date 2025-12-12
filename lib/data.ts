import { Mountain, Droplets, MapPin } from 'lucide-react';
import { Pacote } from './types';

export const heroImages = [
  'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200&auto=format&fit=crop'
];

export const pacotes: Pacote[] = [
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