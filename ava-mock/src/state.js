// Estado global — aluno ativo e dados mockados por aluno

const alunosData = {
  marina: {
    id: 'marina',
    iniciais: 'MR',
    nome: 'Marina',
    sobrenome: 'Rocha',
    curso: 'Administração',
    semestre: 3,
    persona: 'Construtor',
    personaSecundaria: 'Acelerador',
    // Dashboard data
    evolucaoSemestre: {
      semestre: '2024/2',
      disciplinas: [
        { codigo: 'ADM101', mediaAluno: 7.8, mediaTurma: 6.5 },
        { codigo: 'FIN202', mediaAluno: 8.2, mediaTurma: 7.0 },
        { codigo: 'MKT110', mediaAluno: 6.9, mediaTurma: 6.8 },
        { codigo: 'EST303', mediaAluno: 9.0, mediaTurma: 7.2 },
        { codigo: 'RH150', mediaAluno: 7.5, mediaTurma: 6.9 },
      ],
      concluido: 42,
      aproveitamento: 78
    },
    evolucaoCurso: {
      semestres: [
        { periodo: '2023/1', mediaAluno: 7.2, mediaTurma: 6.8 },
        { periodo: '2023/2', mediaAluno: 7.6, mediaTurma: 6.9 },
        { periodo: '2024/1', mediaAluno: 7.9, mediaTurma: 7.0 },
        { periodo: '2024/2', mediaAluno: 8.0, mediaTurma: 7.1 },
      ],
      concluido: 42
    },
    evolucaoSalarial: {
      dados: [
        { periodo: '2023/2', evolucaoAluno: 0.5, evolucaoCurso: 0.3 },
        { periodo: '2024/1', evolucaoAluno: 1.2, evolucaoCurso: 0.8 },
        { periodo: '2024/2', evolucaoAluno: 2.1, evolucaoCurso: 1.5 },
      ]
    },
    pendencias: [
      { icon: '📋', texto: 'Atividade Complementar' },
      { icon: '🔑', texto: 'Matrícula/Rematrícula' },
    ],
    avisos: [
      { data: '15/08/2024', texto: 'Workshop: Power BI para Negócios' },
      { data: '14/08/2024', texto: 'Abertura de estágio em Operações' },
      { data: '12/08/2024', texto: 'Novo módulo de Gestão de Projetos' },
    ],
    // Dados da Bússola (resumo para o card grande)
    bussola: {
      realizado: true,
      empresas: ['Ambev', 'Magazine Luiza', 'Nubank', 'iFood', 'Votorantim'],
      areas_alta: ['Operações e Eficiência', 'Dados e Decisão', 'Gestão de Projetos'],
      habilidades_top: [
        { nome: 'Excel/Power BI', demanda: 92 },
        { nome: 'Gestão de Processos', demanda: 87 },
        { nome: 'Metodologias Ágeis', demanda: 81 },
        { nome: 'Comunicação', demanda: 76 },
        { nome: 'Análise de Dados', demanda: 73 },
      ],
      caminho: [
        { titulo: 'Fundamentos', descricao: 'Concluir graduação e certificações básicas', prazo: 'Atual', status: 'atual' },
        { titulo: 'Primeira posição', descricao: 'Analista Jr. em operações ou processos', prazo: '1-2 anos', status: 'proximo' },
        { titulo: 'Especialização', descricao: 'Pós-graduação ou certificação PMP', prazo: '2-4 anos', status: 'futuro' },
        { titulo: 'Liderança', descricao: 'Gerente de Projetos', prazo: '4-6 anos', status: 'futuro' },
      ],
      proxima_acao: { titulo: 'Power BI para Negócios', tipo: 'Curso', duracao: '12h' },
      chat_mensagem: 'Oi Marina! Encontrei 3 vagas interessantes essa semana que combinam com seu perfil de Construtor e foco em Gestão de Projetos:',
      chat_vagas: [
        'Estágio em Operações — Nubank (São Paulo)',
        'Assistente de Projetos — Ambev (Remoto)',
        'Trainee Gestão — Magazine Luiza (SP)'
      ]
    }
  },
  julio: {
    id: 'julio',
    iniciais: 'JL',
    nome: 'Julio',
    sobrenome: 'Lemos',
    curso: 'História',
    semestre: 2,
    persona: 'Explorador',
    personaSecundaria: 'Realizador',
    // Dashboard data
    evolucaoSemestre: {
      semestre: '2024/2',
      disciplinas: [
        { codigo: 'HIS101', mediaAluno: 8.5, mediaTurma: 7.0 },
        { codigo: 'SOC201', mediaAluno: 7.9, mediaTurma: 6.8 },
        { codigo: 'FIL110', mediaAluno: 8.8, mediaTurma: 7.5 },
        { codigo: 'ANT150', mediaAluno: 7.2, mediaTurma: 6.5 },
        { codigo: 'GEO105', mediaAluno: 6.8, mediaTurma: 6.9 },
      ],
      concluido: 28,
      aproveitamento: 85
    },
    evolucaoCurso: {
      semestres: [
        { periodo: '2024/1', mediaAluno: 7.8, mediaTurma: 6.9 },
        { periodo: '2024/2', mediaAluno: 8.1, mediaTurma: 7.1 },
      ],
      concluido: 28
    },
    evolucaoSalarial: {
      dados: [
        { periodo: '2024/1', evolucaoAluno: 0.3, evolucaoCurso: 0.2 },
        { periodo: '2024/2', evolucaoAluno: 0.8, evolucaoCurso: 0.5 },
      ]
    },
    pendencias: [
      { icon: '📋', texto: 'Relatório de Pesquisa' },
      { icon: '📚', texto: 'Horas de Extensão' },
      { icon: '🔑', texto: 'Matrícula/Rematrícula' },
    ],
    avisos: [
      { data: '15/08/2024', texto: 'Inscrição: Grupo de Pesquisa Memória' },
      { data: '13/08/2024', texto: 'Palestra: Patrimônio Cultural Digital' },
      { data: '11/08/2024', texto: 'Vagas de estágio em Museus abertas' },
    ],
    // Dados da Bússola (resumo para o card grande)
    bussola: {
      realizado: true,
      // Dados específicos do Julio: participação, projetos, contatos
      vantagens: [
        { icone: '🎯', texto: 'Aplicar o que aprende em projetos reais' },
        { icone: '🤝', texto: 'Construir rede com colegas e professores' },
        { icone: '📄', texto: 'Montar portfólio antes de se formar' },
        { icone: '🏆', texto: 'Certificado de extensão no currículo' },
        { icone: '💡', texto: 'Descobrir sua área de atuação na prática' }
      ],
      sugestoes: [
        { tipo: 'Extensão', nome: 'Memória e Patrimônio Digital' },
        { tipo: 'Curso', nome: 'Produção de Conteúdo para Museus' },
        { tipo: 'Material', nome: 'Guia: Como montar um artigo acadêmico' },
        { tipo: 'Extensão', nome: 'Narrativas Históricas e Storytelling' }
      ],
      projetos: [
        { tipo: 'Artigo', titulo: 'Memória Afro-brasileira no Acervo Digital', preview: 'Pesquisa sobre digitalização de acervos culturais afro-brasileiros e acessibilidade...', autor: 'Prof. Carla Mendes', data: 'Ago/2024' },
        { tipo: 'Projeto', titulo: 'Mapeamento de Patrimônio Local', preview: 'Projeto colaborativo para catalogar bens culturais materiais e imateriais da região...', autor: 'Grupo de Pesquisa', data: 'Jul/2024' },
        { tipo: 'Artigo', titulo: 'Educação Museal no Pós-Pandemia', preview: 'Análise das transformações nas práticas educativas em museus após 2020...', autor: 'Prof. Ricardo Lopes', data: 'Jun/2024' }
      ],
      contatos: [
        { nome: 'Prof. Carla Mendes', papel: 'Orientadora', iniciais: 'CM' },
        { nome: 'Lucas Ferreira', papel: 'Tutor acadêmico', iniciais: 'LF' },
        { nome: 'Ana Beatriz', papel: 'Veterana (8º sem)', iniciais: 'AB' },
        { nome: 'Prof. Ricardo Lopes', papel: 'Coord. Extensão', iniciais: 'RL' }
      ]
    }
  }
};

let alunoAtivo = 'marina';
let onChangeCallbacks = [];

export function getAlunoAtivo() {
  return alunosData[alunoAtivo];
}

export function getOutroAluno() {
  const outroId = alunoAtivo === 'marina' ? 'julio' : 'marina';
  return alunosData[outroId];
}

export function trocarAluno() {
  alunoAtivo = alunoAtivo === 'marina' ? 'julio' : 'marina';
  // Re-render tudo
  onChangeCallbacks.forEach(cb => cb());
}

export function onAlunoChange(callback) {
  onChangeCallbacks.push(callback);
}
