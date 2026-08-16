import { perguntas } from './data/perguntas.js';
import { alunos } from './data/bussola.js';

let currentStep = 0; // 0=landing, 1-6=perguntas, 7=resultado
let respostas = [];
let selectedOption = null;
let resultadoTab = 'visao-geral';
let alunoAtivo = 'marina'; // chave do aluno ativo
let selectorOpen = false;

function getAluno() {
  return alunos[alunoAtivo];
}

function renderHeader() {
  const d = getAluno();
  const outroAluno = alunoAtivo === 'marina' ? alunos.julio : alunos.marina;

  return `
    <header class="bussola-header">
      <div class="bussola-brand">
        <span class="bussola-icon">🧭</span>
        <span class="bussola-name">Bússola</span>
      </div>
      <nav class="bussola-nav">
        <a href="#" class="nav-link active">Minha jornada</a>
        <a href="#" class="nav-link">Explorar carreiras</a>
      </nav>
      <div class="bussola-user-selector">
        <div class="user-selector-trigger" id="userSelectorTrigger">
          <div class="user-avatar-sm">${d.iniciais}</div>
          <div class="user-selector-info">
            <span class="user-selector-name">${d.nome} ${d.sobrenome}</span>
            <span class="user-selector-course">${d.curso} · ${d.semestre}º sem</span>
          </div>
          <span class="selector-arrow ${selectorOpen ? 'open' : ''}">▾</span>
        </div>
        <div class="user-selector-dropdown ${selectorOpen ? 'show' : ''}" id="userDropdown">
          <div class="dropdown-label">Trocar aluno</div>
          <div class="dropdown-item" data-aluno="${outroAluno.id}">
            <div class="user-avatar-sm">${outroAluno.iniciais}</div>
            <div>
              <span class="dropdown-item-name">${outroAluno.nome} ${outroAluno.sobrenome}</span>
              <span class="dropdown-item-course">${outroAluno.curso} · ${outroAluno.semestre}º sem</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  `;
}

function renderLanding() {
  return `
    ${renderHeader()}
    <main class="landing-main">
      <div class="landing-content">
        <span class="landing-tag">SUA CARREIRA COMEÇA AQUI</span>
        <h1 class="landing-title">
          Descubra para onde você pode ir
          <em>e como chegar lá.</em>
        </h1>
        <p class="landing-desc">
          Em 6 perguntas, mapeamos seu perfil e montamos um plano de carreira personalizado com salários, oportunidades do mercado e próximos passos concretos.
        </p>
        <button class="btn-descobrir" id="btnDescobrir">
          <span class="btn-icon">🚀</span>
          Descobrir meu caminho
        </button>
        <div class="landing-stats">
          <div class="stat-item">
            <span class="stat-number">12.4k</span>
            <span class="stat-label">vagas mapeadas</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">+164%</span>
            <span class="stat-label">ganho salarial médio</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">6 min</span>
            <span class="stat-label">para seu plano</span>
          </div>
        </div>
      </div>
      <div class="landing-preview">
        <div class="preview-card">
          <div class="preview-header">
            <span class="preview-badge">✨ Prévia do seu resultado</span>
          </div>
          <div class="preview-content">
            <div class="preview-salary">
              <div class="salary-item">
                <span class="salary-label">Hoje</span>
                <span class="salary-value small">R$ 1.800</span>
              </div>
              <div class="salary-arrow">→</div>
              <div class="salary-item">
                <span class="salary-label">Formado(a)</span>
                <span class="salary-value medium">R$ 5.800</span>
              </div>
              <div class="salary-arrow">→</div>
              <div class="salary-item">
                <span class="salary-label">5 anos</span>
                <span class="salary-value large">R$ 9.500</span>
              </div>
            </div>
            <div class="preview-path">
              <div class="path-step done"><span>📋</span> Diagnóstico</div>
              <div class="path-step"><span>🗺️</span> Plano de Carreira</div>
              <div class="path-step"><span>📈</span> Mercado & Salário</div>
              <div class="path-step"><span>🎯</span> Próximos Passos</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  `;
}

function renderPergunta(index) {
  const p = perguntas[index];
  const progress = ((index + 1) / perguntas.length) * 100;
  const isLast = index === perguntas.length - 1;

  return `
    ${renderHeader()}
    <main class="pergunta-main">
      <aside class="pergunta-sidebar">
        <div class="sidebar-icon">🧭</div>
        <span class="sidebar-tag">MAPEANDO SEU PERFIL</span>
        <h2 class="sidebar-title">Cada resposta molda seu plano de carreira.</h2>
        <div class="sidebar-progress">
          <div class="sidebar-progress-bar" style="width: ${progress}%"></div>
        </div>
        <span class="sidebar-counter">${index + 1} de ${perguntas.length}</span>
        <div class="sidebar-benefits">
          <div class="benefit-item ${index >= 0 ? 'active' : ''}">
            <span>🎯</span> Perfil profissional
          </div>
          <div class="benefit-item ${index >= 2 ? 'active' : ''}">
            <span>💰</span> Projeção salarial
          </div>
          <div class="benefit-item ${index >= 4 ? 'active' : ''}">
            <span>🗺️</span> Plano personalizado
          </div>
        </div>
      </aside>
      <section class="pergunta-content">
        <a href="#" class="btn-voltar" id="btnVoltar">← Voltar</a>
        <span class="pergunta-categoria">${p.categoria}</span>
        <h1 class="pergunta-titulo">${p.titulo}</h1>
        <p class="pergunta-subtitulo">${p.subtitulo}</p>
        <div class="opcoes-list">
          ${p.opcoes.map((op, i) => `
            <div class="opcao-card ${selectedOption === i ? 'selected' : ''}" data-index="${i}">
              <span class="opcao-letra">${op.letra}</span>
              <div class="opcao-texto">
                <strong>${op.label}</strong>
                <p>${op.descricao}</p>
              </div>
              ${selectedOption === i ? '<span class="opcao-check">✓</span>' : ''}
            </div>
          `).join('')}
        </div>
        <div class="pergunta-footer">
          <button class="btn-continuar ${selectedOption !== null ? 'active' : ''}" id="btnContinuar" ${selectedOption === null ? 'disabled' : ''}>
            ${isLast ? 'Ver meu plano de carreira' : 'Continuar'} →
          </button>
        </div>
      </section>
    </main>
  `;
}

function renderResultado() {
  const d = getAluno();

  return `
    ${renderHeader()}
    <main class="resultado-main">
      <!-- Profile Banner -->
      <div class="resultado-banner">
        <div class="banner-left">
          <div class="banner-avatar">${d.iniciais}</div>
          <div class="banner-info">
            <h1 class="banner-name">${d.nome} ${d.sobrenome}</h1>
            <p class="banner-course">${d.curso} · ${d.semestre}º semestre</p>
            <div class="banner-tags">
              <span class="tag-perfil">${d.persona_predominante === 'Construtor' ? '🏗️' : d.persona_predominante === 'Explorador' ? '🔍' : '🎯'} ${d.persona_predominante}</span>
              <span class="tag-perfil secondary">${d.persona_secundaria === 'Acelerador' ? '⚡' : d.persona_secundaria === 'Realizador' ? '🎯' : '🏗️'} ${d.persona_secundaria}</span>
            </div>
          </div>
        </div>
        <div class="banner-right">
          <div class="banner-stat">
            <span class="stat-value">R$ ${d.evolucao_salarial.projecao_5_anos.toLocaleString('pt-BR')}</span>
            <span class="stat-desc">projeção em 5 anos</span>
          </div>
          <div class="banner-stat">
            <span class="stat-value">${d.plano_carreira.cargo_meta}</span>
            <span class="stat-desc">cargo meta</span>
          </div>
        </div>
      </div>

      <!-- Tabs superiores -->
      <nav class="resultado-tabs">
        <button class="tab-btn ${resultadoTab === 'visao-geral' ? 'active' : ''}" data-tab="visao-geral">
          📋 Visão Geral
        </button>
        <button class="tab-btn ${resultadoTab === 'carreira' ? 'active' : ''}" data-tab="carreira">
          🗺️ Plano de Carreira
        </button>
        <button class="tab-btn ${resultadoTab === 'mercado' ? 'active' : ''}" data-tab="mercado">
          📈 Mercado & Salário
        </button>
        <button class="tab-btn ${resultadoTab === 'acoes' ? 'active' : ''}" data-tab="acoes">
          🎯 Próximos Passos
        </button>
      </nav>

      <!-- Área central principal — Diagnóstico interativo -->
      <div class="resultado-centro">
        ${renderDiagnosticoCentral()}
      </div>

      <!-- Conteúdo das tabs (abaixo) -->
      <div class="resultado-content">
        ${renderTabContent()}
      </div>

      <!-- Footer CTA -->
      <div class="resultado-cta">
        <div class="cta-content">
          <span class="cta-icon">🧭</span>
          <div>
            <h4>Jornada mapeada. Agora é com você, ${d.nome}.</h4>
            <p>"${d.pensamento_chave}"</p>
          </div>
        </div>
        <div class="cta-actions">
          <button class="btn-cta-secondary" id="btnRefazer">Refazer diagnóstico</button>
          <button class="btn-cta-primary">Começar meu plano →</button>
        </div>
      </div>
    </main>
  `;
}

function renderDiagnosticoCentral() {
  const d = getAluno();
  const pontos = d.diagnostico_pontos;

  return `
    <div class="diagnostico-central">
      <div class="diag-left">
        <div class="diag-section">
          <span class="diag-label">✅ PONTOS FORTES</span>
          <div class="diag-chips fortes">
            ${pontos.forte.map(p => `<span class="diag-chip forte">${p}</span>`).join('')}
          </div>
        </div>
        <div class="diag-section">
          <span class="diag-label">📈 A DESENVOLVER</span>
          <div class="diag-chips desenvolver">
            ${pontos.desenvolver.map(p => `<span class="diag-chip desenvolver">${p}</span>`).join('')}
          </div>
        </div>
        <div class="diag-section">
          <span class="diag-label">🚀 OPORTUNIDADES</span>
          <div class="diag-chips oportunidades">
            ${pontos.oportunidade.map(p => `<span class="diag-chip oportunidade">${p}</span>`).join('')}
          </div>
        </div>
      </div>
      <div class="diag-right">
        <div class="diag-parecer">
          <span class="diag-parecer-icon">💬</span>
          <h4>Parecer personalizado</h4>
          <p>${d.resumo_parecer}</p>
        </div>
        <div class="diag-rapido">
          <div class="diag-rapido-item">
            <span class="rapido-label">Área ideal</span>
            <span class="rapido-value">${d.mercado_trabalho.area_destaque}</span>
          </div>
          <div class="diag-rapido-item">
            <span class="rapido-label">Ritmo</span>
            <span class="rapido-value">${d.perfil_necessidades.horas_semanais_estimadas}h/sem · blocos de ${d.contexto_aprendizagem.duracao_bloco_minutos} min</span>
          </div>
          <div class="diag-rapido-item">
            <span class="rapido-label">Formato</span>
            <span class="rapido-value">${d.contexto_aprendizagem.formato_preferido}</span>
          </div>
          <div class="diag-rapido-item">
            <span class="rapido-label">Meta</span>
            <span class="rapido-value">${d.plano_carreira.cargo_meta} (${d.plano_carreira.tempo_estimado_meta})</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderTabContent() {
  switch (resultadoTab) {
    case 'visao-geral': return renderVisaoGeral();
    case 'carreira': return renderCarreira();
    case 'mercado': return renderMercado();
    case 'acoes': return renderAcoes();
    default: return renderVisaoGeral();
  }
}

function renderVisaoGeral() {
  const d = getAluno();
  const personas = [
    { nome: d.persona_predominante, icone: d.persona_predominante === 'Construtor' ? '🏗️' : '🔍', cor: '#2c6e49', valor: 84 },
    { nome: d.persona_secundaria, icone: d.persona_secundaria === 'Acelerador' ? '⚡' : '🎯', cor: '#e74c3c', valor: 69 },
    { nome: 'Realizador', icone: '🎯', cor: '#9b59b6', valor: alunoAtivo === 'marina' ? 56 : 72 },
    { nome: 'Explorador', icone: '🔍', cor: '#f5a623', valor: alunoAtivo === 'marina' ? 48 : 85 },
  ];

  return `
    <div class="tab-visao-geral">
      <div class="vg-grid">
        <!-- Perfil Motivacional -->
        <div class="vg-card vg-perfil">
          <span class="vg-label">PERFIL MOTIVACIONAL</span>
          <h3>O que te move</h3>
          <div class="perfil-barras">
            ${personas.map(p => `
              <div class="perfil-barra-item">
                <span class="barra-nome">${p.icone} ${p.nome}</span>
                <div class="barra-bg">
                  <div class="barra-fill" style="width: ${p.valor}%; background: ${p.cor}"></div>
                </div>
                <span class="barra-valor">${p.valor}%</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Mini Salário -->
        <div class="vg-card vg-salario-mini">
          <span class="vg-label">EVOLUÇÃO SALARIAL</span>
          <h3>Seu potencial de ganho</h3>
          <div class="salario-mini-chart">
            <div class="salario-bar-group">
              <div class="salario-bar" style="height: ${(d.evolucao_salarial.salario_estagio / d.evolucao_salarial.salario_gerencia) * 100}%">
                <span class="salario-bar-value">R$ ${(d.evolucao_salarial.salario_estagio / 1000).toFixed(1)}k</span>
              </div>
              <span class="salario-bar-label">Estágio</span>
            </div>
            <div class="salario-bar-group">
              <div class="salario-bar highlight" style="height: ${(d.evolucao_salarial.salario_junior / d.evolucao_salarial.salario_gerencia) * 100}%">
                <span class="salario-bar-value">R$ ${(d.evolucao_salarial.salario_junior / 1000).toFixed(1)}k</span>
              </div>
              <span class="salario-bar-label">Júnior</span>
            </div>
            <div class="salario-bar-group">
              <div class="salario-bar highlight" style="height: ${(d.evolucao_salarial.salario_pleno / d.evolucao_salarial.salario_gerencia) * 100}%">
                <span class="salario-bar-value">R$ ${(d.evolucao_salarial.salario_pleno / 1000).toFixed(1)}k</span>
              </div>
              <span class="salario-bar-label">Pleno</span>
            </div>
            <div class="salario-bar-group">
              <div class="salario-bar highlight" style="height: ${(d.evolucao_salarial.salario_senior / d.evolucao_salarial.salario_gerencia) * 100}%">
                <span class="salario-bar-value">R$ ${(d.evolucao_salarial.salario_senior / 1000).toFixed(1)}k</span>
              </div>
              <span class="salario-bar-label">Sênior</span>
            </div>
            <div class="salario-bar-group">
              <div class="salario-bar featured" style="height: 100%">
                <span class="salario-bar-value">R$ ${(d.evolucao_salarial.salario_gerencia / 1000).toFixed(0)}k</span>
              </div>
              <span class="salario-bar-label">Gerência</span>
            </div>
          </div>
        </div>

        <!-- Mini Caminho -->
        <div class="vg-card vg-caminho-mini">
          <span class="vg-label">SEU CAMINHO</span>
          <h3>Próximas etapas</h3>
          <div class="caminho-mini-list">
            ${d.plano_carreira.etapas.map(e => `
              <div class="caminho-mini-item ${e.status}">
                <div class="caminho-mini-dot"></div>
                <div class="caminho-mini-info">
                  <strong>${e.titulo}</strong>
                  <span>${e.prazo}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Top ações -->
        <div class="vg-card vg-top-acoes">
          <span class="vg-label">AÇÕES PRIORITÁRIAS</span>
          <h3>Comece por aqui</h3>
          <div class="top-acoes-list">
            ${d.sugestoes_acao.slice(0, 3).map(s => `
              <div class="top-acao-item">
                <span class="top-acao-icon">${s.icone}</span>
                <div class="top-acao-info">
                  <strong>${s.titulo}</strong>
                  <span>${s.duracao} · ${s.relevancia}% relevante</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderCarreira() {
  const d = getAluno();

  return `
    <div class="tab-carreira">
      <div class="carreira-timeline">
        <div class="timeline-header-section">
          <h2>Seu Plano de Carreira</h2>
          <p>Baseado no seu perfil de ${d.persona_predominante} com foco em ${d.mercado_trabalho.area_destaque}</p>
        </div>
        <div class="timeline-visual">
          <div class="timeline-line"></div>
          ${d.plano_carreira.etapas.map((e, i) => `
            <div class="timeline-node ${e.status}">
              <div class="node-dot">
                ${e.status === 'em_andamento' ? '📍' : e.status === 'proximo' ? '🎯' : '🔮'}
              </div>
              <div class="node-card">
                <span class="node-prazo">${e.prazo}</span>
                <h4>${e.titulo}</h4>
                <p>${e.descricao}</p>
                ${i === 0 ? `<span class="node-badge">Você está aqui</span>` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="carreira-cargos">
        <h3>Progressão de Cargos</h3>
        <div class="cargos-flow">
          <div class="cargo-card atual">
            <span class="cargo-status">ATUAL</span>
            <h4>${d.plano_carreira.cargo_atual}</h4>
            <span class="cargo-salario">R$ ${d.evolucao_salarial.salario_estagio.toLocaleString('pt-BR')}/mês</span>
          </div>
          <div class="cargo-arrow">→</div>
          <div class="cargo-card proximo">
            <span class="cargo-status">PRÓXIMO</span>
            <h4>${d.plano_carreira.cargo_proximo}</h4>
            <span class="cargo-salario">R$ ${d.evolucao_salarial.salario_junior.toLocaleString('pt-BR')}/mês</span>
          </div>
          <div class="cargo-arrow">→</div>
          <div class="cargo-card meta">
            <span class="cargo-status">META (${d.plano_carreira.tempo_estimado_meta})</span>
            <h4>${d.plano_carreira.cargo_meta}</h4>
            <span class="cargo-salario">R$ ${d.evolucao_salarial.salario_gerencia.toLocaleString('pt-BR')}/mês</span>
          </div>
        </div>
      </div>

      <div class="carreira-skills">
        <h3>Habilidades para desenvolver</h3>
        <div class="skills-grid">
          ${d.mercado_trabalho.habilidades_mais_pedidas.map(h => `
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-nome">${h.nome}</span>
                <span class="skill-demanda">${h.demanda}% das vagas pedem</span>
              </div>
              <div class="skill-bar">
                <div class="skill-fill" style="width: ${h.demanda}%"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderMercado() {
  const d = getAluno();

  return `
    <div class="tab-mercado">
      <div class="mercado-overview">
        <div class="mercado-stat-card">
          <span class="mercado-stat-icon">📊</span>
          <div>
            <span class="mercado-stat-value">${d.mercado_trabalho.vagas_abertas.toLocaleString('pt-BR')}</span>
            <span class="mercado-stat-label">vagas abertas na área</span>
          </div>
        </div>
        <div class="mercado-stat-card">
          <span class="mercado-stat-icon">📈</span>
          <div>
            <span class="mercado-stat-value">${d.mercado_trabalho.crescimento_anual}</span>
            <span class="mercado-stat-label">crescimento anual</span>
          </div>
        </div>
        <div class="mercado-stat-card">
          <span class="mercado-stat-icon">🏢</span>
          <div>
            <span class="mercado-stat-value">${d.mercado_trabalho.empresas_destaque.length}+</span>
            <span class="mercado-stat-label">empresas contratando</span>
          </div>
        </div>
        <div class="mercado-stat-card">
          <span class="mercado-stat-icon">🎯</span>
          <div>
            <span class="mercado-stat-value">${d.mercado_trabalho.area_destaque}</span>
            <span class="mercado-stat-label">sua área destaque</span>
          </div>
        </div>
      </div>

      <div class="mercado-salario">
        <h3>💰 Evolução Salarial Projetada</h3>
        <div class="salario-comparison">
          <div class="salario-chart-container">
            <div class="salario-chart">
              <div class="chart-bar-item">
                <div class="chart-bar sem-grad" style="height: ${(d.evolucao_salarial.comparativo.sem_graduacao / d.evolucao_salarial.comparativo.com_especializacao) * 100}%">
                  <span class="chart-bar-val">R$ ${(d.evolucao_salarial.comparativo.sem_graduacao / 1000).toFixed(1)}k</span>
                </div>
                <span class="chart-bar-leg">Sem graduação</span>
              </div>
              <div class="chart-bar-item">
                <div class="chart-bar com-grad" style="height: ${(d.evolucao_salarial.comparativo.com_graduacao / d.evolucao_salarial.comparativo.com_especializacao) * 100}%">
                  <span class="chart-bar-val">R$ ${(d.evolucao_salarial.comparativo.com_graduacao / 1000).toFixed(1)}k</span>
                </div>
                <span class="chart-bar-leg">Com graduação</span>
              </div>
              <div class="chart-bar-item">
                <div class="chart-bar com-esp" style="height: 100%">
                  <span class="chart-bar-val">R$ ${(d.evolucao_salarial.comparativo.com_especializacao / 1000).toFixed(1)}k</span>
                </div>
                <span class="chart-bar-leg">Com especialização</span>
              </div>
            </div>
          </div>
          <div class="salario-insight">
            <div class="insight-card">
              <span class="insight-icon">💡</span>
              <h4>Impacto da sua formação</h4>
              <p>Profissionais com graduação em ${d.curso} ganham em média <strong>${((d.evolucao_salarial.comparativo.com_graduacao / d.evolucao_salarial.comparativo.sem_graduacao - 1) * 100).toFixed(0)}% mais</strong> que sem diploma.</p>
              <p>Com especialização, esse ganho sobe para <strong>${((d.evolucao_salarial.comparativo.com_especializacao / d.evolucao_salarial.comparativo.sem_graduacao - 1) * 100).toFixed(0)}% mais</strong>.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mercado-empresas">
        <h3>🏢 Empresas em destaque na área</h3>
        <div class="empresas-grid">
          ${d.mercado_trabalho.empresas_destaque.map(e => `
            <div class="empresa-badge">${e}</div>
          `).join('')}
        </div>
      </div>

      <div class="mercado-areas">
        <h3>🔥 Áreas em alta para seu perfil</h3>
        <div class="areas-cards">
          ${d.areas_impacto_sugeridas.map((area, i) => `
            <div class="area-card">
              <span class="area-number">0${i + 1}</span>
              <h4>${area}</h4>
              <span class="area-tendencia">Tendência: ${d.mercado_trabalho.tendencia === 'alta' ? '📈 Em alta' : '📊 Estável'}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderAcoes() {
  const d = getAluno();

  return `
    <div class="tab-acoes">
      <div class="acoes-header">
        <h2>🎯 Plano de Ação Personalizado</h2>
        <p>Sugestões para <strong>${d.nome}</strong> baseadas no perfil <strong>${d.persona_predominante}</strong></p>
      </div>

      <div class="acoes-grid">
        ${d.sugestoes_acao.map(s => `
          <div class="acao-card">
            <div class="acao-top">
              <span class="acao-icon">${s.icone}</span>
              <span class="acao-tipo">${s.tipo.replace('_', ' ').toUpperCase()}</span>
              <span class="acao-relevancia">${s.relevancia}%</span>
            </div>
            <h4 class="acao-titulo">${s.titulo}</h4>
            <div class="acao-meta">
              <span>📍 ${s.origem}</span>
              <span>⏱️ ${s.duracao}</span>
            </div>
            <div class="acao-progress">
              <div class="acao-progress-bar" style="width: ${s.relevancia}%"></div>
            </div>
            <button class="btn-acao">Começar agora →</button>
          </div>
        `).join('')}
      </div>

      <div class="acoes-plano14">
        <h3>📅 Próximos 14 dias de ${d.nome}</h3>
        <div class="plano14-steps">
          <div class="plano14-step">
            <div class="plano14-week">SEMANA 1</div>
            <div class="plano14-items">
              <div class="plano14-item">
                <span class="plano14-day">Dia 1-3</span>
                <span class="plano14-task">${d.sugestoes_acao[0].titulo} (início)</span>
              </div>
              <div class="plano14-item">
                <span class="plano14-day">Dia 4-5</span>
                <span class="plano14-task">Microdesafio prático da área</span>
              </div>
              <div class="plano14-item">
                <span class="plano14-day">Dia 6-7</span>
                <span class="plano14-task">${d.sugestoes_acao[3] ? d.sugestoes_acao[3].titulo : 'Reflexão e planejamento'}</span>
              </div>
            </div>
          </div>
          <div class="plano14-step">
            <div class="plano14-week">SEMANA 2</div>
            <div class="plano14-items">
              <div class="plano14-item">
                <span class="plano14-day">Dia 8-10</span>
                <span class="plano14-task">${d.sugestoes_acao[0].titulo} (continuação)</span>
              </div>
              <div class="plano14-item">
                <span class="plano14-day">Dia 11-12</span>
                <span class="plano14-task">${d.sugestoes_acao[4] ? d.sugestoes_acao[4].titulo : 'Workshop prático'}</span>
              </div>
              <div class="plano14-item">
                <span class="plano14-day">Dia 13-14</span>
                <span class="plano14-task">Revisar progresso e próximo ciclo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function bindEvents() {
  // User selector
  document.getElementById('userSelectorTrigger')?.addEventListener('click', (e) => {
    e.stopPropagation();
    selectorOpen = !selectorOpen;
    render();
  });

  // Dropdown item
  document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      alunoAtivo = item.dataset.aluno;
      selectorOpen = false;
      resultadoTab = 'visao-geral';
      render();
    });
  });

  // Close dropdown on outside click
  document.addEventListener('click', () => {
    if (selectorOpen) {
      selectorOpen = false;
      render();
    }
  });
}

function render() {
  const app = document.getElementById('bussola-app');

  if (currentStep === 0) {
    app.innerHTML = renderLanding();
    document.getElementById('btnDescobrir')?.addEventListener('click', () => {
      currentStep = 1;
      selectedOption = null;
      render();
    });
    bindEvents();
  } else if (currentStep >= 1 && currentStep <= perguntas.length) {
    app.innerHTML = renderPergunta(currentStep - 1);

    document.getElementById('btnVoltar')?.addEventListener('click', (e) => {
      e.preventDefault();
      currentStep--;
      selectedOption = null;
      render();
    });

    document.querySelectorAll('.opcao-card').forEach(card => {
      card.addEventListener('click', () => {
        selectedOption = parseInt(card.dataset.index);
        render();
      });
    });

    document.getElementById('btnContinuar')?.addEventListener('click', () => {
      if (selectedOption !== null) {
        respostas.push({
          pergunta: perguntas[currentStep - 1].id,
          resposta: perguntas[currentStep - 1].opcoes[selectedOption]
        });
        currentStep++;
        selectedOption = null;
        render();
      }
    });
    bindEvents();
  } else {
    app.innerHTML = renderResultado();

    // Tab navigation
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        resultadoTab = btn.dataset.tab;
        render();
      });
    });

    // Refazer
    document.getElementById('btnRefazer')?.addEventListener('click', () => {
      currentStep = 1;
      respostas = [];
      selectedOption = null;
      resultadoTab = 'visao-geral';
      render();
    });

    bindEvents();
  }
}

document.addEventListener('DOMContentLoaded', render);
