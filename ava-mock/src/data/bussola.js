// Dados simulados — dois alunos para demonstração
export const alunos = {
  marina: {
    id: 'marina',
    iniciais: 'MR',
    nome: "Marina",
    sobrenome: "Rocha",
    curso: "Administração",
    semestre: 3,
    persona_predominante: "Construtor",
    persona_secundaria: "Acelerador",
    pensamento_chave: "Quero construir algo sólido e crescer rápido na carreira.",
    perfil_potencial: {
      analise: 0.70,
      criatividade: 0.40,
      colaboracao: 0.60,
      comunicacao: 0.50,
      organizacao: 0.85,
      protagonismo: 0.30
    },
    perfil_direcao: {
      estabilidade: 0.90,
      renda: 0.75,
      flexibilidade: 0.80,
      proposito: 0.50,
      impacto: 0.40
    },
    perfil_necessidades: {
      horas_semanais_estimadas: 4,
      suporte_prioritario: "Orientação de carreira e flexibilidade de prazos",
      intencao_desistencia: true
    },
    contexto_aprendizagem: {
      formato_preferido: "assíncrono",
      duracao_bloco_minutos: 40,
      tipo_atividade: "prática curta"
    },
    plano_carreira: {
      cargo_atual: "Estagiário(a) Administrativo",
      cargo_proximo: "Analista de Operações Jr.",
      cargo_meta: "Gerente de Projetos",
      tempo_estimado_meta: "4-6 anos",
      etapas: [
        { titulo: "Fundamentos", status: "em_andamento", descricao: "Concluir a graduação e certificações básicas", prazo: "Atual" },
        { titulo: "Primeira posição", status: "proximo", descricao: "Analista Jr. em operações ou processos", prazo: "1-2 anos" },
        { titulo: "Especialização", status: "futuro", descricao: "Pós-graduação ou certificação PMP/Six Sigma", prazo: "2-4 anos" },
        { titulo: "Liderança", status: "futuro", descricao: "Coordenação de equipe ou projetos", prazo: "4-6 anos" }
      ]
    },
    mercado_trabalho: {
      area_destaque: "Gestão de Projetos e Operações",
      tendencia: "alta",
      vagas_abertas: 12400,
      crescimento_anual: "+18%",
      empresas_destaque: ["Ambev", "Magazine Luiza", "Nubank", "iFood", "Votorantim"],
      habilidades_mais_pedidas: [
        { nome: "Excel/Power BI", demanda: 92 },
        { nome: "Gestão de Processos", demanda: 87 },
        { nome: "Metodologias Ágeis", demanda: 81 },
        { nome: "Comunicação", demanda: 76 },
        { nome: "Análise de Dados", demanda: 73 }
      ]
    },
    evolucao_salarial: {
      salario_estagio: 1800,
      salario_junior: 4200,
      salario_pleno: 7500,
      salario_senior: 12000,
      salario_gerencia: 18000,
      media_mercado_formado: 5800,
      projecao_5_anos: 9500,
      comparativo: {
        sem_graduacao: 2200,
        com_graduacao: 5800,
        com_especializacao: 9500
      }
    },
    sugestoes_acao: [
      { tipo: "curso", titulo: "Power BI para Negócios", origem: "Plataforma AVA", duracao: "12 horas", relevancia: 95, icone: "📊" },
      { tipo: "certificacao", titulo: "CAPM (Gestão de Projetos)", origem: "PMI", duracao: "3 meses", relevancia: 88, icone: "🏆" },
      { tipo: "experiencia", titulo: "Projeto Integrador: Otimização de Estoque", origem: "Disciplina optativa", duracao: "8 semanas", relevancia: 82, icone: "🔬" },
      { tipo: "networking", titulo: "Mentoria com profissional da área", origem: "Programa Alumni", duracao: "30 min/semana", relevancia: 79, icone: "🤝" },
      { tipo: "soft_skill", titulo: "Workshop: Liderança para Iniciantes", origem: "Extensão universitária", duracao: "4 horas", relevancia: 71, icone: "💡" }
    ],
    areas_impacto_sugeridas: ["Operações e Eficiência", "Dados e Decisão", "Gestão de Projetos"],
    resumo_parecer: "Você demonstra excelente capacidade de organização e raciocínio analítico. Com foco em ferramentas de dados e gestão de processos, pode alcançar posições de liderança em 4-6 anos.",
    diagnostico_pontos: {
      forte: ["Organização", "Raciocínio analítico", "Foco em resultados"],
      desenvolver: ["Protagonismo", "Criatividade", "Comunicação interpessoal"],
      oportunidade: ["Dados e BI", "Gestão ágil", "Liderança de equipe"]
    }
  },
  julio: {
    id: 'julio',
    iniciais: 'JL',
    nome: "Julio",
    sobrenome: "Lemos",
    curso: "História",
    semestre: 2,
    persona_predominante: "Explorador",
    persona_secundaria: "Realizador",
    pensamento_chave: "Quero encontrar um caminho que una minha paixão por história com uma carreira sustentável.",
    perfil_potencial: {
      analise: 0.55,
      criatividade: 0.80,
      colaboracao: 0.70,
      comunicacao: 0.85,
      organizacao: 0.45,
      protagonismo: 0.60
    },
    perfil_direcao: {
      estabilidade: 0.50,
      renda: 0.55,
      flexibilidade: 0.70,
      proposito: 0.90,
      impacto: 0.85
    },
    perfil_necessidades: {
      horas_semanais_estimadas: 6,
      suporte_prioritario: "Clareza de carreira e conexão com mercado",
      intencao_desistencia: false
    },
    contexto_aprendizagem: {
      formato_preferido: "colaborativo",
      duracao_bloco_minutos: 60,
      tipo_atividade: "projeto em grupo"
    },
    plano_carreira: {
      cargo_atual: "Estudante",
      cargo_proximo: "Pesquisador / Curador de Conteúdo Jr.",
      cargo_meta: "Gestor de Patrimônio Cultural",
      tempo_estimado_meta: "5-7 anos",
      etapas: [
        { titulo: "Fundamentos acadêmicos", status: "em_andamento", descricao: "Concluir graduação com foco em patrimônio e cultura", prazo: "Atual" },
        { titulo: "Experiência prática", status: "proximo", descricao: "Estágio em museu, editora ou instituição cultural", prazo: "1-2 anos" },
        { titulo: "Especialização", status: "futuro", descricao: "Mestrado em Patrimônio Cultural ou Museologia", prazo: "3-5 anos" },
        { titulo: "Gestão cultural", status: "futuro", descricao: "Coordenar projetos culturais ou educacionais", prazo: "5-7 anos" }
      ]
    },
    mercado_trabalho: {
      area_destaque: "Cultura, Educação e Conteúdo",
      tendencia: "estavel",
      vagas_abertas: 4800,
      crescimento_anual: "+9%",
      empresas_destaque: ["SESC", "Itaú Cultural", "Google Arts", "Netflix (docs)", "Museu do Amanhã"],
      habilidades_mais_pedidas: [
        { nome: "Pesquisa e Curadoria", demanda: 88 },
        { nome: "Produção de Conteúdo", demanda: 84 },
        { nome: "Comunicação Digital", demanda: 79 },
        { nome: "Gestão de Projetos Culturais", demanda: 72 },
        { nome: "Inglês Avançado", demanda: 68 }
      ]
    },
    evolucao_salarial: {
      salario_estagio: 1200,
      salario_junior: 3200,
      salario_pleno: 5500,
      salario_senior: 8500,
      salario_gerencia: 13000,
      media_mercado_formado: 4200,
      projecao_5_anos: 7000,
      comparativo: {
        sem_graduacao: 1800,
        com_graduacao: 4200,
        com_especializacao: 7000
      }
    },
    sugestoes_acao: [
      { tipo: "curso", titulo: "Produção de Conteúdo Digital", origem: "Plataforma AVA", duracao: "10 horas", relevancia: 92, icone: "✍️" },
      { tipo: "experiencia", titulo: "Estágio: Curadoria no Museu Municipal", origem: "Parceria institucional", duracao: "6 meses", relevancia: 89, icone: "🏛️" },
      { tipo: "curso", titulo: "Storytelling e Narrativas Históricas", origem: "Extensão", duracao: "8 horas", relevancia: 85, icone: "📖" },
      { tipo: "networking", titulo: "Grupo de pesquisa: Memória e Identidade", origem: "Departamento de História", duracao: "2h/semana", relevancia: 78, icone: "🔍" },
      { tipo: "soft_skill", titulo: "Oratória e Apresentações", origem: "Extensão universitária", duracao: "6 horas", relevancia: 74, icone: "🎤" }
    ],
    areas_impacto_sugeridas: ["Patrimônio Cultural", "Educação e Conteúdo", "Mídia e Documentários"],
    resumo_parecer: "Você tem forte capacidade comunicativa e criativa, com paixão por propósito e impacto. Caminhos em cultura, educação e conteúdo digital permitem unir seus interesses a uma carreira sustentável.",
    diagnostico_pontos: {
      forte: ["Comunicação", "Criatividade", "Pensamento crítico"],
      desenvolver: ["Organização", "Análise quantitativa", "Gestão de tempo"],
      oportunidade: ["Curadoria digital", "Produção de conteúdo", "Educação museal"]
    }
  }
};

// Manter compatibilidade
export const bussolaDiagnostico = alunos.marina;
