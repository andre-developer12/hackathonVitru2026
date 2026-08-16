// Dados mockados para o pitch — Dashboard do Gestor
export const resumoGeral = {
  totalAlunos: 1000131,
  comRisco: 142518,
  semRisco: 857613,
  taxaDesistencia: 14.2,
  taxaRetencao: 85.8,
  mediaEngajamento: 71.6
};

export const distribuicaoPersonas = {
  Acelerador: 285037,
  Construtor: 370048,
  Realizador: 210027,
  Explorador: 135019
};

export const alunosRisco = [
  {
    curso: "Pedagogia",
    instituicao: "UniCesumar",
    semestre: "3º",
    persona: "Explorador",
    risco: 0.91,
    horasSemanais: 2,
    intencaoDesistencia: true,
    preocupacao: "carreira",
    ultimoAcesso: "3 dias atrás"
  },
  {
    curso: "Administração",
    instituicao: "UNIASSELVI",
    semestre: "2º",
    persona: "Construtor",
    risco: 0.84,
    horasSemanais: 3,
    intencaoDesistencia: true,
    preocupacao: "financeiro",
    ultimoAcesso: "5 dias atrás"
  },
  {
    curso: "Engenharia de Produção",
    instituicao: "UniCesumar",
    semestre: "4º",
    persona: "Realizador",
    risco: 0.78,
    horasSemanais: 4,
    intencaoDesistencia: true,
    preocupacao: "tempo",
    ultimoAcesso: "1 dia atrás"
  },
  {
    curso: "Serviço Social",
    instituicao: "UNIASSELVI",
    semestre: "1º",
    persona: "Explorador",
    risco: 0.85,
    horasSemanais: 1,
    intencaoDesistencia: true,
    preocupacao: "isolamento",
    ultimoAcesso: "7 dias atrás"
  },
  {
    curso: "Ciências Contábeis",
    instituicao: "UniCesumar",
    semestre: "5º",
    persona: "Acelerador",
    risco: 0.62,
    horasSemanais: 5,
    intencaoDesistencia: false,
    preocupacao: "tempo",
    ultimoAcesso: "hoje"
  }
];

export const evolucaoMensal = [
  { mes: "Jan", risco: 11.4, retencao: 88.6 },
  { mes: "Fev", risco: 11.9, retencao: 88.1 },
  { mes: "Mar", risco: 12.7, retencao: 87.3 },
  { mes: "Abr", risco: 13.1, retencao: 86.9 },
  { mes: "Mai", risco: 13.8, retencao: 86.2 },
  { mes: "Jun", risco: 14.2, retencao: 85.8 }
];

export const preocupacoes = {
  carreira: { label: "Clareza de carreira", total: 33952, percentual: 23.8 },
  tempo: { label: "Falta de tempo", total: 46746, percentual: 32.8 },
  financeiro: { label: "Dificuldade financeira", total: 36198, percentual: 25.4 },
  isolamento: { label: "Isolamento/solidão", total: 25622, percentual: 18.0 }
};

// Alunos detalhados por persona — estrutura: clusters com totais e cursos
export const alunosPorPersona = {
  Acelerador: {
    Tecnologia: {
      total: 98412,
      cursos: [
        { instituicao: "UniCesumar", curso: "Administração", semestre: "4º", total: 24103 },
        { instituicao: "UNIASSELVI", curso: "Gestão Comercial", semestre: "3º", total: 21847 },
        { instituicao: "UniCesumar", curso: "Marketing", semestre: "2º", total: 18932 },
        { instituicao: "UNIASSELVI", curso: "Ciências Contábeis", semestre: "5º", total: 17214 },
        { instituicao: "UniCesumar", curso: "Processos Gerenciais", semestre: "1º", total: 16316 },
      ]
    },
    Engenharia: {
      total: 72318,
      cursos: [
        { instituicao: "UniCesumar", curso: "Engenharia de Produção", semestre: "4º", total: 28104 },
        { instituicao: "UNIASSELVI", curso: "Engenharia Civil", semestre: "3º", total: 24890 },
        { instituicao: "UniCesumar", curso: "Engenharia Mecânica", semestre: "5º", total: 19324 },
      ]
    },
    Saúde: {
      total: 61205,
      cursos: [
        { instituicao: "UniCesumar", curso: "Farmácia", semestre: "3º", total: 22140 },
        { instituicao: "UNIASSELVI", curso: "Biomedicina", semestre: "2º", total: 20831 },
        { instituicao: "UniCesumar", curso: "Nutrição", semestre: "4º", total: 18234 },
      ]
    },
    Licenciatura: {
      total: 34891,
      cursos: [
        { instituicao: "UNIASSELVI", curso: "Matemática", semestre: "2º", total: 18423 },
        { instituicao: "UniCesumar", curso: "Educação Física", semestre: "3º", total: 16468 },
      ]
    },
    Gerais: {
      total: 18211,
      cursos: [
        { instituicao: "UniCesumar", curso: "Relações Internacionais", semestre: "1º", total: 10312 },
        { instituicao: "UNIASSELVI", curso: "Teologia", semestre: "2º", total: 7899 },
      ]
    }
  },
  Construtor: {
    Licenciatura: {
      total: 125018,
      cursos: [
        { instituicao: "UNIASSELVI", curso: "Pedagogia", semestre: "3º", total: 42108 },
        { instituicao: "UniCesumar", curso: "Letras", semestre: "2º", total: 31204 },
        { instituicao: "UNIASSELVI", curso: "História", semestre: "4º", total: 28712 },
        { instituicao: "UniCesumar", curso: "Geografia", semestre: "1º", total: 22994 },
      ]
    },
    Tecnologia: {
      total: 98230,
      cursos: [
        { instituicao: "UNIASSELVI", curso: "Recursos Humanos", semestre: "4º", total: 34210 },
        { instituicao: "UniCesumar", curso: "Logística", semestre: "1º", total: 33108 },
        { instituicao: "UNIASSELVI", curso: "Gestão Pública", semestre: "3º", total: 30912 },
      ]
    },
    Saúde: {
      total: 72400,
      cursos: [
        { instituicao: "UniCesumar", curso: "Serviço Social", semestre: "2º", total: 38200 },
        { instituicao: "UNIASSELVI", curso: "Enfermagem", semestre: "5º", total: 34200 },
      ]
    },
    Engenharia: {
      total: 51200,
      cursos: [
        { instituicao: "UNIASSELVI", curso: "Segurança do Trabalho", semestre: "6º", total: 28100 },
        { instituicao: "UniCesumar", curso: "Engenharia Ambiental", semestre: "3º", total: 23100 },
      ]
    },
    Gerais: {
      total: 23200,
      cursos: [
        { instituicao: "UniCesumar", curso: "Ciências Sociais", semestre: "2º", total: 12400 },
        { instituicao: "UNIASSELVI", curso: "Filosofia", semestre: "1º", total: 10800 },
      ]
    }
  },
  Realizador: {
    Saúde: {
      total: 82104,
      cursos: [
        { instituicao: "UniCesumar", curso: "Enfermagem", semestre: "4º", total: 29840 },
        { instituicao: "UNIASSELVI", curso: "Psicologia", semestre: "6º", total: 28132 },
        { instituicao: "UniCesumar", curso: "Farmácia", semestre: "3º", total: 24132 },
      ]
    },
    Engenharia: {
      total: 54312,
      cursos: [
        { instituicao: "UniCesumar", curso: "Engenharia de Produção", semestre: "5º", total: 30120 },
        { instituicao: "UNIASSELVI", curso: "Engenharia Elétrica", semestre: "4º", total: 24192 },
      ]
    },
    Licenciatura: {
      total: 38901,
      cursos: [
        { instituicao: "UNIASSELVI", curso: "Direito", semestre: "7º", total: 21340 },
        { instituicao: "UniCesumar", curso: "Pedagogia", semestre: "5º", total: 17561 },
      ]
    },
    Tecnologia: {
      total: 22510,
      cursos: [
        { instituicao: "UniCesumar", curso: "Análise de Sistemas", semestre: "3º", total: 12810 },
        { instituicao: "UNIASSELVI", curso: "Gestão de TI", semestre: "2º", total: 9700 },
      ]
    },
    Gerais: {
      total: 12200,
      cursos: [
        { instituicao: "UNIASSELVI", curso: "Comunicação Social", semestre: "3º", total: 7100 },
        { instituicao: "UniCesumar", curso: "Design", semestre: "2º", total: 5100 },
      ]
    }
  },
  Explorador: {
    Licenciatura: {
      total: 62108,
      cursos: [
        { instituicao: "UNIASSELVI", curso: "Letras", semestre: "1º", total: 18230 },
        { instituicao: "UniCesumar", curso: "História", semestre: "2º", total: 16104 },
        { instituicao: "UNIASSELVI", curso: "Sociologia", semestre: "1º", total: 14892 },
        { instituicao: "UniCesumar", curso: "Filosofia", semestre: "3º", total: 12882 },
      ]
    },
    Gerais: {
      total: 31204,
      cursos: [
        { instituicao: "UNIASSELVI", curso: "Artes Visuais", semestre: "2º", total: 12340 },
        { instituicao: "UniCesumar", curso: "Cinema e Audiovisual", semestre: "1º", total: 10200 },
        { instituicao: "UNIASSELVI", curso: "Música", semestre: "1º", total: 8664 },
      ]
    },
    Tecnologia: {
      total: 21407,
      cursos: [
        { instituicao: "UniCesumar", curso: "Design Gráfico", semestre: "2º", total: 11807 },
        { instituicao: "UNIASSELVI", curso: "Publicidade", semestre: "1º", total: 9600 },
      ]
    },
    Saúde: {
      total: 12300,
      cursos: [
        { instituicao: "UniCesumar", curso: "Educação Física", semestre: "1º", total: 7200 },
        { instituicao: "UNIASSELVI", curso: "Terapia Ocupacional", semestre: "2º", total: 5100 },
      ]
    },
    Engenharia: {
      total: 8000,
      cursos: [
        { instituicao: "UniCesumar", curso: "Engenharia de Software", semestre: "1º", total: 4800 },
        { instituicao: "UNIASSELVI", curso: "Engenharia Civil", semestre: "1º", total: 3200 },
      ]
    }
  }
};

// Preocupações detalhadas por cluster
export const alunosPorPreocupacao = {
  carreira: {
    Licenciatura: {
      total: 14218,
      cursos: [
        { instituicao: "UNIASSELVI", curso: "Letras", semestre: "1º", total: 4120 },
        { instituicao: "UniCesumar", curso: "História", semestre: "2º", total: 3890 },
        { instituicao: "UNIASSELVI", curso: "Sociologia", semestre: "1º", total: 3418 },
        { instituicao: "UNIASSELVI", curso: "Direito", semestre: "7º", total: 2790 },
      ]
    },
    Tecnologia: {
      total: 9834,
      cursos: [
        { instituicao: "UniCesumar", curso: "Administração", semestre: "4º", total: 5234 },
        { instituicao: "UNIASSELVI", curso: "Gestão de TI", semestre: "2º", total: 4600 },
      ]
    },
    Gerais: {
      total: 5400,
      cursos: [
        { instituicao: "UNIASSELVI", curso: "Artes Visuais", semestre: "2º", total: 3100 },
        { instituicao: "UniCesumar", curso: "Cinema e Audiovisual", semestre: "1º", total: 2300 },
      ]
    },
    Saúde: {
      total: 3100,
      cursos: [
        { instituicao: "UniCesumar", curso: "Educação Física", semestre: "1º", total: 3100 },
      ]
    },
    Engenharia: {
      total: 1400,
      cursos: [
        { instituicao: "UniCesumar", curso: "Engenharia de Software", semestre: "1º", total: 1400 },
      ]
    }
  },
  tempo: {
    Licenciatura: {
      total: 15320,
      cursos: [
        { instituicao: "UNIASSELVI", curso: "Pedagogia", semestre: "3º", total: 8120 },
        { instituicao: "UniCesumar", curso: "Geografia", semestre: "1º", total: 7200 },
      ]
    },
    Engenharia: {
      total: 12890,
      cursos: [
        { instituicao: "UniCesumar", curso: "Engenharia de Produção", semestre: "5º", total: 7340 },
        { instituicao: "UNIASSELVI", curso: "Segurança do Trabalho", semestre: "6º", total: 5550 },
      ]
    },
    Saúde: {
      total: 9836,
      cursos: [
        { instituicao: "UniCesumar", curso: "Enfermagem", semestre: "4º", total: 5210 },
        { instituicao: "UNIASSELVI", curso: "Biomedicina", semestre: "2º", total: 4626 },
      ]
    },
    Tecnologia: {
      total: 6200,
      cursos: [
        { instituicao: "UNIASSELVI", curso: "Recursos Humanos", semestre: "4º", total: 3400 },
        { instituicao: "UniCesumar", curso: "Logística", semestre: "1º", total: 2800 },
      ]
    },
    Gerais: {
      total: 2500,
      cursos: [
        { instituicao: "UniCesumar", curso: "Ciências Sociais", semestre: "2º", total: 2500 },
      ]
    }
  },
  financeiro: {
    Saúde: {
      total: 12840,
      cursos: [
        { instituicao: "UniCesumar", curso: "Serviço Social", semestre: "2º", total: 5120 },
        { instituicao: "UNIASSELVI", curso: "Psicologia", semestre: "6º", total: 4310 },
        { instituicao: "UniCesumar", curso: "Farmácia", semestre: "3º", total: 3410 },
      ]
    },
    Tecnologia: {
      total: 11258,
      cursos: [
        { instituicao: "UNIASSELVI", curso: "Gestão Comercial", semestre: "3º", total: 4120 },
        { instituicao: "UniCesumar", curso: "Logística", semestre: "1º", total: 3918 },
        { instituicao: "UniCesumar", curso: "Processos Gerenciais", semestre: "1º", total: 3220 },
      ]
    },
    Licenciatura: {
      total: 6800,
      cursos: [
        { instituicao: "UNIASSELVI", curso: "Pedagogia", semestre: "3º", total: 3900 },
        { instituicao: "UniCesumar", curso: "Letras", semestre: "2º", total: 2900 },
      ]
    },
    Engenharia: {
      total: 3500,
      cursos: [
        { instituicao: "UniCesumar", curso: "Engenharia Civil", semestre: "3º", total: 3500 },
      ]
    },
    Gerais: {
      total: 1800,
      cursos: [
        { instituicao: "UNIASSELVI", curso: "Teologia", semestre: "2º", total: 1800 },
      ]
    }
  },
  isolamento: {
    Licenciatura: {
      total: 9422,
      cursos: [
        { instituicao: "UNIASSELVI", curso: "Artes Visuais", semestre: "2º", total: 3210 },
        { instituicao: "UniCesumar", curso: "Filosofia", semestre: "3º", total: 3112 },
        { instituicao: "UNIASSELVI", curso: "Música", semestre: "1º", total: 3100 },
      ]
    },
    Tecnologia: {
      total: 7200,
      cursos: [
        { instituicao: "UniCesumar", curso: "Marketing", semestre: "2º", total: 3800 },
        { instituicao: "UNIASSELVI", curso: "Ciências Contábeis", semestre: "5º", total: 3400 },
      ]
    },
    Saúde: {
      total: 4800,
      cursos: [
        { instituicao: "UniCesumar", curso: "Farmácia", semestre: "3º", total: 2600 },
        { instituicao: "UNIASSELVI", curso: "Terapia Ocupacional", semestre: "2º", total: 2200 },
      ]
    },
    Gerais: {
      total: 2600,
      cursos: [
        { instituicao: "UniCesumar", curso: "Design", semestre: "2º", total: 2600 },
      ]
    },
    Engenharia: {
      total: 1600,
      cursos: [
        { instituicao: "UNIASSELVI", curso: "Engenharia Elétrica", semestre: "4º", total: 1600 },
      ]
    }
  }
};

export const acoesSugeridas = [
  {
    prioridade: "alta",
    acao: "Contato urgente com 8.412 alunos com risco > 85%",
    responsavel: "Tutores",
    prazo: "24 horas"
  },
  {
    prioridade: "alta",
    acao: "Campanha de acolhimento para 25.622 alunos com isolamento",
    responsavel: "Comunicação",
    prazo: "48 horas"
  },
  {
    prioridade: "media",
    acao: "Revisão de prazos para alunos com < 4h semanais",
    responsavel: "Coordenação",
    prazo: "1 semana"
  },
  {
    prioridade: "media",
    acao: "Webinar de orientação de carreira para 135 mil Exploradores",
    responsavel: "Tutores",
    prazo: "2 semanas"
  },
  {
    prioridade: "baixa",
    acao: "Microdesafios gamificados para aumentar engajamento geral",
    responsavel: "Conteúdo",
    prazo: "1 mês"
  }
];
