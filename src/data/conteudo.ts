import { AreaAtuacao, PerguntaFrequente, DepoimentoAnonimo } from '../types';

export const DADOS_PSICOLOGA = {
  nome: 'Maurizia Gomes',
  tituloProfissional: 'Psicóloga Clínica & Terapeuta Humanista',
  crp: 'CRP 06/148920',
  telefoneWhatsapp: '5511999998888', // Telefone para abertura de WhatsApp
  whatsappFormatado: '(11) 99999-8888',
  email: 'contato@mauriziagomespsicologia.com.br',
  atendimento: 'Atendimento Online para todo o Brasil e Exterior • Consultório Acolhedor',
  slogan: 'Onde o silêncio ganha voz e a sua história encontra acolhimento sem julgamentos.',
  subtituloHero: 'Psicoterapia para quem busca serenidade interior, superação da ansiedade e reconciliação com a própria trajetória através de uma escuta ética, científica e profundamente humana.',
};

export const AREAS_ATUACAO: AreaAtuacao[] = [
  {
    id: 'ansiedade-panico',
    titulo: 'Ansiedade e Crises de Pânico',
    subtitulo: 'Regulação do sistema nervoso e clareza mental diante das sobrecargas',
    categoria: 'individual',
    descricao: 'Para quem convive com pensamentos acelerados, aperto no peito, medo constante do futuro ou sensação de perda de controle. Desenvolvemos estratégias práticas de autorregulação e autoconhecimento para desarmar gatilhos internos.',
    sintomasComuns: [
      'Preocupação crônica e antecipação catastrófica',
      'Taquicardia, tensão muscular e insônia',
      'Dificuldade de concentração e hipervigilância',
      'Medo de crises em ambientes públicos'
    ],
    beneficios: [
      'Alívio fisiológico com técnicas de regulação autonômica',
      'Ressignificação de crenças e pensamentos automáticos',
      'Retomada gradual da segurança no cotidiano'
    ],
    duracao: '50 minutos por sessão',
    modalidade: 'Online ou Presencial',
    icone: 'Activity'
  },
  {
    id: 'depressao-desanimo',
    titulo: 'Depressão e Vazio Emocional',
    subtitulo: 'Reconstrução de sentido, validação da dor e resgate do prazer de viver',
    categoria: 'individual',
    descricao: 'O cansaço que não passa com o sono muitas vezes é um sinal de que a mente e o corpo estão exaustos de carregar pesos silenciosos. Um espaço seguro para acolher a tristeza profunda sem cobranças de positividade forçada.',
    sintomasComuns: [
      'Falta de energia, anedonia e desânimo persistente',
      'Sensação de inadequação ou culpa excessiva',
      'Isolamento afetivo e perda de propósito',
      'Sensação de sobrecarga em tarefas básicas'
    ],
    beneficios: [
      'Compreensão profunda das origens do sofrimento',
      'Pequenos passos viáveis para reconectar-se à rotina',
      'Espaço protegido onde todo sentimento é acolhido'
    ],
    duracao: '50 minutos por sessão',
    modalidade: 'Online ou Presencial',
    icone: 'HeartHandshake'
  },
  {
    id: 'terapia-casal',
    titulo: 'Terapia de Casal & Relações',
    subtitulo: 'Comunicação empática, quebra de ciclos defensivos e reconexão íntima',
    categoria: 'casal',
    descricao: 'Ajuda parceiros a saírem de discussões repetitivas e a reconstruírem pontes de diálogo. O objetivo não é determinar culpados, mas sim compreender as necessidades não atendidas que alimentam o afastamento.',
    sintomasComuns: [
      'Conversas que terminam em ataque ou fechamento emocional',
      'Divergências sobre projetos de vida, finanças ou filhos',
      'Sensação de solidão mesmo estando a dois',
      'Dificuldade de perdoar mágoas acumuladas'
    ],
    beneficios: [
      'Prática de comunicação não-violenta e escuta mútua',
      'Identificação de padrões relacionais disfuncionais',
      'Alinhamento transparente de pactos e acordos conscientes'
    ],
    duracao: '60 minutos por sessão',
    modalidade: 'Online ou Presencial',
    icone: 'Users'
  },
  {
    id: 'autoestima-autoconhecimento',
    titulo: 'Autoconhecimento e Autoestima',
    subtitulo: 'Libertação da necessidade de aprovação e construção de limites saudáveis',
    categoria: 'individual',
    descricao: 'Quantas decisões você tomou na vida para agradar aos outros e negligenciar a si mesma? Na terapia, fortalecemos a sua voz interior, o amor-próprio sustentável e a coragem de dizer "não" com tranquilidade.',
    sintomasComuns: [
      'Dificuldade de colocar limites e medo de desagradar',
      'Crítica interna implacável e síndrome da impostora',
      'Dependência da validação alheia para sentir valor',
      'Desconexão com as próprias vontades autênticas'
    ],
    beneficios: [
      'Autonomia afetiva e segurança em tomadas de decisão',
      'Redução da autocobrança e cultivo da autocompaixão',
      'Relações mais equilibradas e sem submissão'
    ],
    duracao: '50 minutos por sessão',
    modalidade: 'Online ou Presencial',
    icone: 'Sparkles'
  },
  {
    id: 'burnout-sobrecarga',
    titulo: 'Burnout & Gestão de Estresse',
    subtitulo: 'Para quem cuida de tudo e de todos, mas esqueceu de cuidar de si',
    categoria: 'desafios',
    descricao: 'O esgotamento mental e físico decorrente do excesso de demandas profissionais ou familiares. Trabalhamos a desaceleração consciente, limites no trabalho e estratégias para reabilitar a vitalidade perdida.',
    sintomasComuns: [
      'Exaustão crônica e sensação de impotência',
      'Despersonalização, cinismo ou irritabilidade incomum',
      'Queda acentuada na produtividade e lapsos de memória',
      'Fadiga ao acordar mesmo após horas na cama'
    ],
    beneficios: [
      'Reorganização da relação com a produtividade e o tempo',
      'Estratégias de desaceleração sem culpa',
      'Proteção da saúde mental contra exigências tóxicas'
    ],
    duracao: '50 minutos por sessão',
    modalidade: 'Online ou Presencial',
    icone: 'ShieldCheck'
  },
  {
    id: 'transicoes-luto',
    titulo: 'Luto & Transições de Vida',
    subtitulo: 'Amparo sensível para fechar ciclos e encontrar esperança no recomeço',
    categoria: 'desafios',
    descricao: 'Términos de relacionamento, perdas de entes queridos, mudanças de carreira, imigração ou novas fases familiares. O luto é uma resposta natural ao amor e à ruptura, exigindo cuidado atencioso para ser elaborado.',
    sintomasComuns: [
      'Sensação de desorientação e choque perante a mudança',
      'Dificuldade de se adaptar à nova realidade',
      'Oscilações abruptas entre tristeza, raiva e negação',
      'Medo do futuro e sensação de vazio no peito'
    ],
    beneficios: [
      'Validação de todas as etapas do processo de luto',
      'Desenvolvimento de resiliência e adaptação suave',
      'Honrar o passado enquanto se constrói um novo amanhã'
    ],
    duracao: '50 minutos por sessão',
    modalidade: 'Online ou Presencial',
    icone: 'Compass'
  }
];

export const PERGUNTAS_FREQUENTES: PerguntaFrequente[] = [
  {
    id: 'primeira-sessao',
    categoria: 'Início',
    pergunta: 'Como funciona a primeira sessão de psicoterapia?',
    resposta: 'A primeira sessão é um encontro de acolhimento mútuo. Nela, você terá total liberdade para compartilhar suas preocupações no seu próprio ritmo. Exploramos o que te motivou a buscar ajuda, seus sentimentos atuais e alinhamos as expectativas para o processo. É um momento leve, sem julgamentos e com absoluta confidencialidade.'
  },
  {
    id: 'terapia-online',
    categoria: 'Modalidade',
    pergunta: 'A terapia online tem a mesma eficácia que o atendimento presencial?',
    resposta: 'Sim, absolutamente. Diversos estudos científicos e a regulamentação do Conselho Federal de Psicologia (CFP - Resolução nº 11/2018) comprovam que a psicoterapia online mantém exatamente os mesmos resultados clínicos do atendimento presencial. Você pode realizar suas sessões com total privacidade no conforto da sua casa ou de onde estiver, poupando tempo de deslocamento.'
  },
  {
    id: 'sigilo-etico',
    categoria: 'Segurança',
    pergunta: 'Como é garantido o sigilo das nossas conversas?',
    resposta: 'O sigilo profissional é um dever ético inegociável, assegurado pelo Código de Ética do Psicólogo. Todas as falas, históricos e apontamentos clínicos são rigorosamente protegidos e nunca compartilhados com terceiros. Em atendimentos online, são utilizadas plataformas com criptografia ponta a ponta.'
  },
  {
    id: 'duracao-frequencia',
    categoria: 'Rotina',
    pergunta: 'Qual é a duração e a frequência recomendada das consultas?',
    resposta: 'As sessões individuais têm duração de 50 minutos (e 60 minutos para casais). A frequência padrão inicial é de uma sessão por semana, permitindo continuidade e aprofundamento das reflexões. Conforme os avanços e a estabilidade clínica forem alcançados, os encontros podem ser espaçados para quinzenais em comum acordo.'
  },
  {
    id: 'convenios-reembolso',
    categoria: 'Financeiro',
    pergunta: 'Você atende por planos de saúde ou emite recibo para reembolso?',
    resposta: 'Os atendimentos são particulares, o que garante tempo integral, dedicação exclusiva e sem as limitações temporais impostas pelos convênios. No entanto, forneço recibo detalhado com CRP para que você solicite o reembolso integral ou parcial junto ao seu plano de saúde (conforme as diretrizes da sua operadora).'
  },
  {
    id: 'momento-certo',
    categoria: 'Decisão',
    pergunta: 'Nunca fiz terapia. Como saber se este é o momento certo para começar?',
    resposta: 'Você não precisa esperar uma crise insustentável para procurar ajuda. O momento certo é qualquer momento em que você sinta que seus sentimentos, angústias ou dúvidas merecem ser escutados com respeito. Cuidar da mente é um gesto de responsabilidade e carinho consigo mesma.'
  }
];

export const DEPOIMENTOS_ANONIMOS: DepoimentoAnonimo[] = [
  {
    id: '1',
    relato: 'Cheguei ao consultório no meio de crises frequentes de ansiedade. Pela primeira vez na vida me senti compreendida sem sentir que estava sendo examinada. Hoje consigo respirar com calma e tomar decisões que antes me paralisavam.',
    tempoTerapia: '8 meses em psicoterapia',
    focoTrabalhado: 'Ansiedade e Síndrome do Pânico',
    iniciais: 'M. S., 34 anos'
  },
  {
    id: '2',
    relato: 'A terapia de casal com a Maurizia salvou o nosso casamento de um ciclo exaustivo de cobranças. Aprendemos a escutar o que o outro sente por trás das palavras duras. Nosso lar voltou a ter paz e cumplicidade.',
    tempoTerapia: '1 ano de acompanhamento',
    focoTrabalhado: 'Comunicação e Vínculo de Casal',
    iniciais: 'C. & R., 41 e 43 anos'
  },
  {
    id: '3',
    relato: 'Sempre me cobrei a perfeição em tudo e vivi à beira do esgotamento. Na terapia, aprendi que meu valor não depende de agradar a todos. O ambiente é acolhedor e seguro como nenhum outro.',
    tempoTerapia: '6 meses em psicoterapia',
    focoTrabalhado: 'Burnout e Autoestima',
    iniciais: 'P. L., 29 anos'
  }
];

export const PASSOS_JORNADA = [
  {
    numero: '01',
    titulo: 'Acolhimento Inicial',
    descricao: 'Você entra em contato pelo site ou WhatsApp. Conversamos brevemente para entender suas preferências de horário e alinhamos a primeira sessão.'
  },
  {
    numero: '02',
    titulo: 'Mapeamento das Queixas',
    descricao: 'Na primeira consulta, construímos um espaço seguro para você expressar o que dói, o que incomoda e quais objetivos deseja alcançar.'
  },
  {
    numero: '03',
    titulo: 'Processo Terapêutico Contínuo',
    descricao: 'Encontros semanais dedicados à desconstrução de padrões, alívio emocional e desenvolvimento de recursos psicológicos próprios.'
  },
  {
    numero: '04',
    titulo: 'Autonomia & Maturidade Emocional',
    descricao: 'O objetivo final da terapia é capacitar você a ser a própria condutora da sua vida, com serenidade, firmeza e compaixão.'
  }
];
