import {
  resumoGeral,
  distribuicaoPersonas,
  alunosRisco,
  evolucaoMensal,
  preocupacoes,
  acoesSugeridas,
  alunosPorPersona,
  alunosPorPreocupacao
} from './data/gestorData.js';

function formatNumber(num) {
  return num.toLocaleString('pt-BR');
}

// ===== MODAL DE DETALHES (2 níveis: clusters → cursos) =====
function openDetailModal(title, clustersData) {
  const existing = document.getElementById('detailModal');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay active';
  overlay.id = 'detailModal';

  const totalGeral = Object.values(clustersData).reduce((sum, c) => sum + c.total, 0);

  overlay.innerHTML = `
    <div class="modal-container gestor-modal">
      <div class="modal-header">
        <div class="modal-title-area">
          <h2>${title}</h2>
          <span class="modal-count">${formatNumber(totalGeral)} alunos</span>
        </div>
        <button class="modal-close" id="closeDetailModal">&times;</button>
      </div>
      <div class="modal-body">
        <div class="clusters-list" id="clustersList">
          ${Object.entries(clustersData).map(([cluster, data]) => `
            <div class="cluster-row" data-cluster="${cluster}">
              <span class="cluster-badge">${cluster}</span>
              <div class="cluster-bar-bg">
                <div class="cluster-bar-fill" style="width: ${(data.total / totalGeral) * 100}%"></div>
              </div>
              <span class="cluster-total">${formatNumber(data.total)}</span>
              <span class="cluster-arrow">›</span>
            </div>
          `).join('')}
        </div>
        <div class="cluster-detail" id="clusterDetail" style="display:none;">
          <button class="btn-voltar-cluster" id="btnVoltarCluster">← Voltar aos clusters</button>
          <h3 id="clusterDetailTitle"></h3>
          <table class="tabela-alunos">
            <thead>
              <tr>
                <th>Instituição</th>
                <th>Curso</th>
                <th>Semestre</th>
                <th>Alunos</th>
              </tr>
            </thead>
            <tbody id="clusterDetailBody"></tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  // Fechar modal
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target.id === 'closeDetailModal') {
      overlay.remove();
    }
  });

  document.body.appendChild(overlay);

  // Click nos clusters
  overlay.querySelectorAll('.cluster-row').forEach(row => {
    row.addEventListener('click', () => {
      const cluster = row.dataset.cluster;
      const data = clustersData[cluster];
      showClusterDetail(overlay, cluster, data);
    });
  });
}

function showClusterDetail(overlay, clusterName, data) {
  const listEl = overlay.querySelector('#clustersList');
  const detailEl = overlay.querySelector('#clusterDetail');
  const titleEl = overlay.querySelector('#clusterDetailTitle');
  const bodyEl = overlay.querySelector('#clusterDetailBody');

  listEl.style.display = 'none';
  detailEl.style.display = 'block';
  titleEl.textContent = `${clusterName} — ${formatNumber(data.total)} alunos`;

  bodyEl.innerHTML = data.cursos.map(c => `
    <tr>
      <td><span class="instituicao-badge ${c.instituicao === 'UniCesumar' ? 'inst-cesumar' : 'inst-asselvi'}">${c.instituicao}</span></td>
      <td><strong>${c.curso}</strong></td>
      <td>${c.semestre}</td>
      <td><strong>${formatNumber(c.total)}</strong></td>
    </tr>
  `).join('');

  // Voltar
  overlay.querySelector('#btnVoltarCluster').addEventListener('click', () => {
    listEl.style.display = 'block';
    detailEl.style.display = 'none';
  });
}

// ===== KPI CARDS =====
function renderKPICards() {
  return `
    <div class="kpi-row">
      <div class="kpi-card">
        <span class="kpi-icon">👥</span>
        <div class="kpi-info">
          <span class="kpi-value">${formatNumber(resumoGeral.totalAlunos)}</span>
          <span class="kpi-label">Total de Alunos</span>
        </div>
      </div>
      <div class="kpi-card kpi-danger">
        <span class="kpi-icon">⚠️</span>
        <div class="kpi-info">
          <span class="kpi-value">${formatNumber(resumoGeral.comRisco)}</span>
          <span class="kpi-label">Em Risco de Desistência</span>
        </div>
      </div>
      <div class="kpi-card kpi-success">
        <span class="kpi-icon">✅</span>
        <div class="kpi-info">
          <span class="kpi-value">${resumoGeral.taxaRetencao}%</span>
          <span class="kpi-label">Taxa de Retenção</span>
        </div>
      </div>
      <div class="kpi-card kpi-warning">
        <span class="kpi-icon">📊</span>
        <div class="kpi-info">
          <span class="kpi-value">${resumoGeral.mediaEngajamento}%</span>
          <span class="kpi-label">Engajamento Médio</span>
        </div>
      </div>
    </div>
  `;
}

// ===== EVOLUÇÃO MENSAL =====
function renderEvolucaoMensal() {
  // Normalizar cada métrica no seu próprio range para variação visual
  const riscoMin = Math.min(...evolucaoMensal.map(m => m.risco));
  const riscoMax = Math.max(...evolucaoMensal.map(m => m.risco));
  const retencaoMin = Math.min(...evolucaoMensal.map(m => m.retencao));
  const retencaoMax = Math.max(...evolucaoMensal.map(m => m.retencao));

  function normalizeHeight(val, min, max) {
    // Base de 40% + variação proporcional até 100%
    if (max === min) return 70;
    return 40 + ((val - min) / (max - min)) * 60;
  }

  return `
    <div class="gestor-card evolucao-card-wide">
      <h3>Evolução Mensal — Taxa de Risco | Retenção</h3>
      <div class="evolucao-legend">
        <span class="legend-dot legend-risco"></span> Risco (%)
        <span class="legend-dot legend-retencao"></span> Retenção (%)
      </div>
      <div class="evolucao-chart-improved">
        ${evolucaoMensal.map(m => `
          <div class="evolucao-month">
            <div class="evolucao-bars">
              <div class="evo-bar-wrap">
                <span class="evo-val evo-val-risco">${m.risco}%</span>
                <div class="evo-bar evo-bar-risco" style="height: ${normalizeHeight(m.risco, riscoMin, riscoMax)}%"></div>
              </div>
              <div class="evo-bar-wrap">
                <span class="evo-val evo-val-retencao">${m.retencao}%</span>
                <div class="evo-bar evo-bar-retencao" style="height: ${normalizeHeight(m.retencao, retencaoMin, retencaoMax)}%"></div>
              </div>
            </div>
            <span class="evo-month-label">${m.mes}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ===== ALUNOS RISCO (TABELA) =====
function renderAlunosRisco() {
  const riscoColor = (risco) => {
    if (risco >= 0.8) return '#e74c3c';
    if (risco >= 0.6) return '#f5a623';
    return '#27ae60';
  };

  return `
    <div class="gestor-card full-width">
      <h3>🚨 Cursos com Maior Risco de Desistência</h3>
      <div class="tabela-container">
        <table class="tabela-alunos">
          <thead>
            <tr>
              <th>Curso</th>
              <th>Instituição</th>
              <th>Sem.</th>
              <th>Persona</th>
              <th>Risco</th>
              <th>Horas/sem</th>
              <th>Intenção</th>
              <th>Preocupação</th>
              <th>Último Acesso</th>
            </tr>
          </thead>
          <tbody>
            ${alunosRisco.map(a => `
              <tr>
                <td><strong>${a.curso}</strong></td>
                <td><span class="instituicao-badge ${a.instituicao === 'UniCesumar' ? 'inst-cesumar' : 'inst-asselvi'}">${a.instituicao}</span></td>
                <td>${a.semestre}</td>
                <td><span class="persona-badge">${a.persona}</span></td>
                <td>
                  <span class="risco-badge" style="background: ${riscoColor(a.risco)}">
                    ${(a.risco * 100).toFixed(0)}%
                  </span>
                </td>
                <td>${a.horasSemanais}h</td>
                <td>${a.intencaoDesistencia ? '<span class="badge-sim">Sim</span>' : '<span class="badge-nao">Não</span>'}</td>
                <td>${a.preocupacao}</td>
                <td>${a.ultimoAcesso}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ===== AÇÕES SUGERIDAS =====
function renderAcoesSugeridas() {
  const prioridadeCor = {
    alta: '#e74c3c',
    media: '#f5a623',
    baixa: '#27ae60'
  };

  return `
    <div class="gestor-card full-width">
      <h3>📋 Ações Sugeridas pela IA</h3>
      <div class="acoes-list">
        ${acoesSugeridas.map(a => `
          <div class="acao-item">
            <span class="acao-prioridade" style="background: ${prioridadeCor[a.prioridade]}">${a.prioridade.toUpperCase()}</span>
            <div class="acao-info">
              <p class="acao-texto">${a.acao}</p>
              <span class="acao-meta">Responsável: ${a.responsavel} · Prazo: ${a.prazo}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ===== RENDER PRINCIPAL =====
function render() {
  const app = document.getElementById('gestor-app');

  const emojis = {
    Acelerador: '🚀',
    Construtor: '🏗️',
    Realizador: '🏆',
    Explorador: '🧭'
  };
  const cores = {
    Acelerador: '#e74c3c',
    Construtor: '#f5a623',
    Realizador: '#27ae60',
    Explorador: '#6ba3d6'
  };
  const coresPreocupacao = {
    carreira: '#6ba3d6',
    tempo: '#e74c3c',
    financeiro: '#f5a623',
    isolamento: '#9b59b6'
  };
  const total = Object.values(distribuicaoPersonas).reduce((a, b) => a + b, 0);

  // Header
  const header = document.createElement('header');
  header.className = 'gestor-header';
  header.innerHTML = `
    <div class="gestor-header-left">
      <span class="gestor-logo">🧭</span>
      <h1>Bússola <span class="gestor-subtitle">— Painel do Gestor</span></h1>
    </div>
    <div class="gestor-header-right">
      <a href="index.html" class="btn-voltar-ava">← Voltar ao AVA</a>
    </div>
  `;
  app.appendChild(header);

  // Main
  const main = document.createElement('main');
  main.className = 'gestor-main';

  // KPIs
  const kpiSection = document.createElement('div');
  kpiSection.innerHTML = renderKPICards();
  main.appendChild(kpiSection);

  // Grid: Personas + Evolução Mensal (lado a lado)
  const grid1 = document.createElement('div');
  grid1.className = 'gestor-grid';

  // Distribuição de Personas (clicável)
  const personasCard = document.createElement('div');
  personasCard.className = 'gestor-card';
  personasCard.innerHTML = `
    <h3>Distribuição de Personas</h3>
    <div class="persona-distribution">
      ${Object.entries(distribuicaoPersonas).map(([persona, qtd]) => `
        <div class="persona-dist-item clickable-row" data-persona="${persona}">
          <div class="persona-dist-header">
            <span>${emojis[persona]} ${persona}</span>
            <span class="persona-dist-count">${formatNumber(qtd)} alunos (${((qtd / total) * 100).toFixed(1)}%)</span>
          </div>
          <div class="persona-dist-bar-bg">
            <div class="persona-dist-bar" style="width: ${(qtd / total) * 100}%; background: ${cores[persona]}"></div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  personasCard.querySelectorAll('.clickable-row[data-persona]').forEach(row => {
    row.addEventListener('click', () => {
      const persona = row.dataset.persona;
      const alunos = alunosPorPersona[persona] || [];
      openDetailModal(`Persona: ${emojis[persona]} ${persona}`, alunos);
    });
  });

  grid1.appendChild(personasCard);

  // Evolução Mensal (ao lado de personas)
  const evolucaoDiv = document.createElement('div');
  evolucaoDiv.innerHTML = renderEvolucaoMensal();
  grid1.appendChild(evolucaoDiv.firstElementChild);
  main.appendChild(grid1);

  // Grid: Preocupações (clicável)
  const grid2 = document.createElement('div');
  grid2.className = 'gestor-grid';

  const preocupacoesCard = document.createElement('div');
  preocupacoesCard.className = 'gestor-card';
  preocupacoesCard.innerHTML = `
    <h3>Principais Preocupações dos Alunos em Risco</h3>
    <div class="preocupacoes-list">
      ${Object.entries(preocupacoes).map(([key, item]) => `
        <div class="preocupacao-item clickable-row" data-preocupacao="${key}">
          <div class="preocupacao-header">
            <span>${item.label}</span>
            <span class="preocupacao-count">${formatNumber(item.total)} alunos (${item.percentual}%)</span>
          </div>
          <div class="preocupacao-bar-bg">
            <div class="preocupacao-bar" style="width: ${item.percentual * 2.5}%; background: ${coresPreocupacao[key]}"></div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  preocupacoesCard.querySelectorAll('.clickable-row[data-preocupacao]').forEach(row => {
    row.addEventListener('click', () => {
      const key = row.dataset.preocupacao;
      const alunos = alunosPorPreocupacao[key] || [];
      const label = preocupacoes[key].label;
      openDetailModal(`Preocupação: ${label}`, alunos);
    });
  });

  grid2.appendChild(preocupacoesCard);
  main.appendChild(grid2);

  // Tabela de risco
  const riscoDiv = document.createElement('div');
  riscoDiv.innerHTML = renderAlunosRisco();
  main.appendChild(riscoDiv.firstElementChild);

  // Ações sugeridas
  const acoesDiv = document.createElement('div');
  acoesDiv.innerHTML = renderAcoesSugeridas();
  main.appendChild(acoesDiv.firstElementChild);

  app.appendChild(main);
}

document.addEventListener('DOMContentLoaded', render);
