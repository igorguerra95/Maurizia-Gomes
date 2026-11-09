export interface AreaAtuacao {
  id: string;
  titulo: string;
  subtitulo: string;
  categoria: 'individual' | 'casal' | 'desafios';
  descricao: string;
  sintomasComuns: string[];
  beneficios: string[];
  duracao: string;
  modalidade: string;
  icone: string;
}

export interface PerguntaFrequente {
  id: string;
  pergunta: string;
  resposta: string;
  categoria: string;
}

export interface SolicitacaoAgendamento {
  nome: string;
  whatsapp: string;
  email: string;
  modalidade: 'online' | 'presencial';
  motivoPrincipal: string;
  preferenciaHorario: 'manha' | 'tarde' | 'noite' | 'qualquer';
  mensagem?: string;
}

export interface DepoimentoAnonimo {
  id: string;
  relato: string;
  tempoTerapia: string;
  focoTrabalhado: string;
  iniciais: string;
}
