import { perguntas } from './data/perguntas.js';
import { bussolaDiagnostico } from './data/bussola.js';

let currentStep = 0; // 0=landing, 1-6=perguntas, 7=resultado
let respostas = [];
let selectedOption = null;

function renderHeader() {
  return `
    <header class="bussola-header">
      <div class="bussola-brand">
        <span class="bussola-icon">🧭</span>
        <span class="bussola-name">Bússola</span>
      </div>
      <nav class="bussola-nav">
        <a href="#" class="nav-link active">Minha jornada</a>
      </nav>
      <div class="bussola-user">
        <div class="user-avatar">MR</div>
        <div class="user-info">
          <span class="user-name">Marina Rocha</span>
          <span class="user-course">Administração</span>
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
        <span class="landing-tag">SUA JORNADA, NO SEU RITMO</span>
        <h1 class="landing-title">
          Você não precisa ter todas as respostas.
          <em>Precisa de um próximo passo.</em>
        </h1>
        <p class="landing-desc">
          Conte o que move você e o que está tornando o caminho difícil. Em poucos minutos, o Bússola transforma isso em uma rota possível.
        </p>
        <button class="btn-descobrir" id="btnDescobrir">Descobrir meu norte →</button>
        <p class="landing-disclaimer">Suas respostas servem para personalizar apoio — nunca para limitar oportunidades.</p>
      </div>
      <div class="landing-timeline">
        <div class="timeline-card">
          <div class="timeline-header">
            <span>Seu momento</span>
            <span class="timeline-semana">Semana 3</span>
          </div>
          <div class="timeline-steps">
            <div class="timeline-step done">
              <span class="step-indicator step-done">✓</span>
              <div>
                <strong>Você começou</strong>
                <p>Matrícula concluída</p>
              </div>
            </div>
            <div class="timeline-step current">
              <span class="step-indicator step-current">2</span>
              <div>
                <strong>Encontre seu norte</strong>
                <p>Entrevista de 6 minutos</p>
              </div>
            </div>
            <div class="timeline-step">
              <span class="step-indicator">3</span>
              <div>
                <strong>Experimente um caminho</strong>
                <p>Desafio prático</p>
              </div>
            </div>
            <div class="timeline-step">
              <span class="step-indicator">4</span>
              <div>
                <strong>Construa sua evidência</strong>
                <p>Portfólio e oportunidade</p>
              </div>
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
        <span class="sidebar-tag">DESCOBRIR SEU NORTE</span>
        <h2 class="sidebar-title">Uma conversa sobre o que faz você continuar.</h2>
        <div class="sidebar-progress">
          <div class="sidebar-progress-bar" style="width: ${progress}%"></div>
        </div>
        <span class="sidebar-counter">${index + 1} de ${perguntas.length}</span>
        <p class="sidebar-quote">"Bússola não tenta descobrir quem você é. Ele entende o que está fazendo você continuar."</p>
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
            </div>
          `).join('')}
        </div>
        <div class="pergunta-footer">
          <button class="btn-continuar ${selectedOption !== null ? 'active' : ''}" id="btnContinuar" ${selectedOption === null ? 'disabled' : ''}>
            ${isLast ? 'Ver minha rota' : 'Continuar'} →
          </button>
        </div>
      </section>
    </main>
  `;
}

function renderResultado() {
  const d = bussolaDiagnostico;
  const personas = [
    { nome: 'O Construtor', cor: '#2c6e49', valor: 84 },
    { nome: 'O Acelerador', cor: '#e74c3c', valor: 69 },
    { nome: 'O Realizador', cor: '#9b59b6', valor: 56 },
    { nome: 'O Explorador', cor: '#f5a623', valor: 48 },
  ];

  return `
    ${renderHeader()}
    <main class="resultado-main">
      <div class="resultado-hero">
        <div class="resultado-hero-left">
          <span class="resultado-tag">SEU NORTE NESTE MOMENTO</span>
          <h1 class="resultado-titulo">Marina, você está buscando <em>segurança para avançar.</em></h1>
          <p class="resultado-desc">Seu resultado combina motivações, realidade e preferências. Ele pode mudar conforme sua jornada muda.</p>
        </div>
        <div class="resultado-persona-card">
          <span class="persona-card-label">PERFIL PREDOMINANTE</span>
          <h2 class="persona-card-nome">O ${d.estudante.persona_predominante}</h2>
          <span class="persona-card-compat">84% de compatibilidade</span>
          <p class="persona-card-frase">"${d.estudante.pensamento_chave}"</p>
        </div>
      </div>

      <div class="resultado-grid">
        <div class="resultado-card motivacional">
          <div class="card-top">
            <span class="card-label">PERFIL MOTIVACIONAL</span>
            <button class="btn-rotulo">Não é um rótulo</button>
          </div>
          <h3>O que está movendo você</h3>
          <div class="perfil-barras">
            ${personas.map(p => `
              <div class="perfil-barra-item">
                <span class="barra-nome">${p.nome}</span>
                <div class="barra-bg">
                  <div class="barra-fill" style="width: ${p.valor}%; background: ${p.cor}"></div>
                </div>
                <span class="barra-valor">${p.valor}%</span>
              </div>
            `).join('')}
          </div>
          <p class="perfil-nota">Seu perfil secundário é O Acelerador. Por isso, sua rota combina mais de um tipo de experiência.</p>
        </div>

        <div class="resultado-card jornada">
          <span class="card-label">O QUE PODE APOIAR VOCÊ</span>
          <h3>Sua jornada possível</h3>
          <div class="jornada-items">
            <div class="jornada-item">
              <span class="jornada-icon">⏱️</span>
              <div>
                <strong>Ritmo flexível</strong>
                <p>Plano de até ${d.perfil_necessidades.horas_semanais_estimadas} horas por semana, em blocos de ${d.contexto_aprendizagem.duracao_bloco_minutos}-40 minutos.</p>
              </div>
            </div>
            <div class="jornada-item">
              <span class="jornada-icon">🎯</span>
              <div>
                <strong>Clareza de carreira</strong>
                <p>Compare possibilidades antes de decidir e teste uma área na prática.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="plano-section">
        <div class="plano-header">
          <div>
            <span class="plano-tag">PLANO DE 14 DIAS</span>
            <h3>Três passos para voltar a enxergar o caminho</h3>
          </div>
          <a href="#" class="btn-refazer" id="btnRefazer">Refazer entrevista</a>
        </div>
        <div class="plano-cards">
          <div class="plano-card">
            <span class="plano-num">01</span>
            <span class="plano-tipo">EXPLORAR</span>
            <h4>Compare 3 portas de entrada</h4>
            <p>${d.areas_impacto_sugeridas.join(', ')} — com rotina, habilidades e oportunidades reais.</p>
            <a href="#" class="plano-action">Ver caminhos →</a>
          </div>
          <div class="plano-card plano-destaque">
            <span class="plano-num">02</span>
            <span class="plano-tipo">EXPERIMENTAR</span>
            <h4>Resolva um desafio de 38 minutos</h4>
            <p>Uma pequena loja está perdendo vendas. Organize os dados, encontre o gargalo e proponha duas ações.</p>
            <a href="#" class="plano-action">Começar desafio →</a>
          </div>
          <div class="plano-card">
            <span class="plano-num">03</span>
            <span class="plano-tipo">CONECTAR</span>
            <h4>Converse com quem conhece o caminho</h4>
            <p>Encontro de 20 minutos com um tutor de carreira para transformar dúvida em próximo passo.</p>
            <a href="#" class="plano-action">Escolher horário →</a>
          </div>
        </div>
      </section>

      <div class="resultado-footer">
        <div class="footer-icon">🧭</div>
        <div>
          <span class="footer-tag">SUA JORNADA</span>
          <h4>Seu objetivo continua o mesmo.</h4>
          <p>Você disse que quer encontrar uma direção profissional. Explore os passos acima no seu ritmo.</p>
        </div>
      </div>
    </main>
  `;
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
  } else if (currentStep >= 1 && currentStep <= perguntas.length) {
    app.innerHTML = renderPergunta(currentStep - 1);

    // Voltar
    document.getElementById('btnVoltar')?.addEventListener('click', (e) => {
      e.preventDefault();
      currentStep--;
      selectedOption = null;
      render();
    });

    // Selecionar opção
    document.querySelectorAll('.opcao-card').forEach(card => {
      card.addEventListener('click', () => {
        selectedOption = parseInt(card.dataset.index);
        render();
      });
    });

    // Continuar
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
  } else {
    app.innerHTML = renderResultado();

    // Refazer entrevista
    document.getElementById('btnRefazer')?.addEventListener('click', (e) => {
      e.preventDefault();
      currentStep = 1;
      respostas = [];
      selectedOption = null;
      render();
    });
  }
}

document.addEventListener('DOMContentLoaded', render);
