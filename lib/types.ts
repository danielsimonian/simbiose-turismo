export interface GaleriaItem {
  url: string;
  caption: string;
}

export interface Pacote {
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