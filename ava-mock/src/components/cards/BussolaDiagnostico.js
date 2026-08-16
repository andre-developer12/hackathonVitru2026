import { getAlunoAtivo } from '../../state.js';

export function createCardBussolaDiagnostico() {
  const card = document.createElement('div');
  card.className = 'card card-bussola-diag';

  const aluno = getAlunoAtivo();
  const b = aluno.bussola;

  if (aluno.id === 'julio') {
    card.innerHTML = renderJulio(aluno, b);
    setTimeout(() => bindChatEvents(card, b), 0);
  } else {
    card.innerHTML = renderMarina(aluno, b);
  }

  return card;
}

function bindChatEvents(card, b) {
  const overlay = card.querySelector('#chatModalOverlay');
  const closeBtn = card.querySelector('#chatModalClose');

  card.querySelectorAll('.contato-card').forEach(el => {
    el.addEventListener('click', () => {
      const idx = parseInt(el.dataset.contato);
      const contato = b.contatos[idx];
      openChatModal(card, contato);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('show');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('show');
    });
  }
}

function openChatModal(card, contato) {
  const overlay = card.querySelector('#chatModalOverlay');
  const avatarEl = card.querySelector('#chatModalAvatar');
  const nameEl = card.querySelector('#chatModalName');
  const roleEl = card.querySelector('#chatModalRole');
  const bodyEl = card.querySelector('#chatModalBody');

  avatarEl.textContent = contato.iniciais;
  nameEl.textContent = contato.nome;
  roleEl.textContent = contato.papel;

  const conversas = getConversaMock(contato);
  bodyEl.innerHTML = conversas.map(msg => `
    <div class="chat-msg ${msg.de}">
      <div class="chat-msg-bubble">${msg.texto}</div>
      <span class="chat-msg-hora">${msg.hora}</span>
    </div>
  `).join('');

  overlay.classList.add('show');
}

function getConversaMock(contato) {
  const conversasPorPapel = {
    'Orientadora': [
      { de: 'outro', texto: 'Oi Julio! Vi que você se interessou pelo projeto de acervo digital. Quer conversar sobre?', hora: '14:32' },
      { de: 'eu', texto: 'Oi professora! Sim, achei muito interessante. Como posso participar?', hora: '14:35' },
      { de: 'outro', texto: 'Vou te adicionar no grupo do projeto. Temos reunião quinta às 16h, pode ser?', hora: '14:36' },
      { de: 'eu', texto: 'Perfeito! Estarei lá. Obrigado!', hora: '14:37' },
    ],
    'Tutor acadêmico': [
      { de: 'outro', texto: 'E aí Julio, tudo bem? Como estão as disciplinas esse semestre?', hora: '10:15' },
      { de: 'eu', texto: 'Oi Lucas! Tudo certo, mas tô com dificuldade em Antropologia.', hora: '10:20' },
      { de: 'outro', texto: 'Normal, a matéria é densa. Quer marcar um horário pra gente revisar juntos?', hora: '10:21' },
      { de: 'eu', texto: 'Seria ótimo! Terça à tarde funciona pra você?', hora: '10:23' },
      { de: 'outro', texto: 'Terça 14h tá ótimo. Te mando o link da sala virtual.', hora: '10:24' },
    ],
    'Veterana (8º sem)': [
      { de: 'outro', texto: 'Julio, bem-vindo ao curso! Se precisar de dicas sobre matérias ou professores, pode perguntar 😄', hora: '18:40' },
      { de: 'eu', texto: 'Valeu Ana! Queria saber como é o TCC em História aqui.', hora: '18:45' },
      { de: 'outro', texto: 'É tranquilo! Você escolhe o tema no 6º semestre. Recomendo já ir pensando em algo que te interesse.', hora: '18:46' },
      { de: 'outro', texto: 'E participa dos grupos de pesquisa, ajuda muito no TCC depois.', hora: '18:47' },
    ],
    'Coord. Extensão': [
      { de: 'outro', texto: 'Olá Julio! Temos vagas abertas no projeto de extensão "Memória e Patrimônio Digital". Interesse?', hora: '09:10' },
      { de: 'eu', texto: 'Bom dia professor! Com certeza, como faço a inscrição?', hora: '09:30' },
      { de: 'outro', texto: 'Vou te enviar o formulário. Prazo é até sexta. O projeto vale horas complementares também.', hora: '09:32' },
    ],
  };

  return conversasPorPapel[contato.papel] || [
    { de: 'outro', texto: 'Olá! Como posso te ajudar?', hora: '10:00' },
    { de: 'eu', texto: 'Oi! Gostaria de mais informações.', hora: '10:05' },
  ];
}

function renderMarina(aluno, b) {
  return `
    <div class="bussola-diag-header">
      <div class="bussola-diag-title">
        <span class="bussola-diag-icon">🧭</span>
        <div>
          <h3>Diagnóstico Bússola</h3>
          <span class="bussola-diag-subtitle">Resultado de ${aluno.nome} · Perfil: <strong>${aluno.persona}</strong></span>
        </div>
      </div>
    </div>
    <div class="bussola-diag-columns">
      <div class="diag-col mercado-col">
        <h4 class="diag-col-title">📈 Mercado de Trabalho</h4>
        <div class="diag-section-block">
          <span class="diag-section-label">🏢 EMPRESAS QUE CONTRATAM HOJE</span>
          <div class="empresas-chips">${b.empresas.map(e => `<span class="empresa-chip">${e}</span>`).join('')}</div>
        </div>
        <div class="diag-section-block">
          <span class="diag-section-label">🔥 ÁREAS EM ALTA PARA SEU PERFIL</span>
          <div class="areas-lista">${b.areas_alta.map((area, i) => `<div class="area-item-row"><span class="area-item-num">0${i + 1}</span><span class="area-item-name">${area}</span></div>`).join('')}</div>
        </div>
        <div class="diag-section-block">
          <span class="diag-section-label">📊 HABILIDADES MAIS PEDIDAS</span>
          <div class="skills-lista">${b.habilidades_top.map(h => `<div class="skill-row-item"><span class="skill-row-name">${h.nome}</span><div class="skill-row-bar"><div class="skill-row-fill" style="width: ${h.demanda}%"></div></div><span class="skill-row-pct">${h.demanda}%</span></div>`).join('')}</div>
        </div>
      </div>
      <div class="diag-col carreira-col">
        <h4 class="diag-col-title">🗺️ Plano de Carreira</h4>
        <div class="diag-section-block">
          <span class="diag-section-label">🤖 ASSISTENTE DE CARREIRA</span>
          <div class="llm-chat">
            <div class="llm-bubble bot">
              <div class="llm-message"><p>${b.chat_mensagem}</p></div>
              <div class="llm-avatar">🤖</div>
            </div>
            <div class="llm-bubble bot links">
              <div class="llm-message">${b.chat_vagas.map(v => `<a href="#" class="llm-vaga-link"><span class="vaga-icon">💼</span><span class="vaga-text">${v}</span></a>`).join('')}</div>
              <div class="llm-avatar">🤖</div>
            </div>
          </div>
        </div>
        <div class="diag-section-block">
          <span class="diag-section-label">📍 SEU CAMINHO</span>
          <div class="caminho-timeline">${b.caminho.map((e, i) => `<div class="caminho-step ${e.status}"><div class="caminho-dot"></div><div class="caminho-info"><div class="caminho-top"><strong>${e.titulo}</strong><span class="caminho-prazo">${e.prazo}</span></div><p>${e.descricao}</p>${i === 0 ? '<span class="caminho-badge">Você está aqui</span>' : ''}</div></div>`).join('')}</div>
        </div>
        <div class="diag-section-block">
          <span class="diag-section-label">⚡ PRÓXIMO PASSO RECOMENDADO</span>
          <div class="proximo-passo-card"><span class="passo-tipo">${b.proxima_acao.tipo}</span><strong>${b.proxima_acao.titulo}</strong><span class="passo-duracao">⏱️ ${b.proxima_acao.duracao}</span></div>
        </div>
      </div>
    </div>
  `;
}

function renderJulio(aluno, b) {
  return `
    <div class="bussola-diag-header">
      <div class="bussola-diag-title">
        <span class="bussola-diag-icon">🧭</span>
        <div>
          <h3>Diagnóstico Bússola</h3>
          <span class="bussola-diag-subtitle">Resultado de ${aluno.nome} · Perfil: <strong>${aluno.persona}</strong></span>
        </div>
      </div>
    </div>
    <div class="bussola-diag-columns tres-colunas">
      <div class="diag-col participar-col">
        <h4 class="diag-col-title">🙋 Você quer participar de algo?</h4>
        <div class="diag-section-block">
          <span class="diag-section-label">✨ VANTAGENS</span>
          <div class="vantagens-lista">${b.vantagens.map(v => `<div class="vantagem-item"><span class="vantagem-icon">${v.icone}</span><span class="vantagem-text">${v.texto}</span></div>`).join('')}</div>
        </div>
        <div class="diag-section-block">
          <span class="diag-section-label">📚 SUGESTÕES PARA VOCÊ</span>
          <div class="sugestoes-lista">${b.sugestoes.map(s => `<a href="#" class="sugestao-item"><span class="sugestao-tipo">${s.tipo}</span><span class="sugestao-nome">${s.nome}</span></a>`).join('')}</div>
        </div>
      </div>
      <div class="diag-col projetos-col">
        <h4 class="diag-col-title">📂 Projetos Disponíveis</h4>
        <div class="projetos-lista">${b.projetos.map(p => `<div class="projeto-card"><span class="projeto-tag">${p.tipo}</span><h5 class="projeto-titulo">${p.titulo}</h5><p class="projeto-preview">${p.preview}</p><span class="projeto-meta">${p.autor} · ${p.data}</span></div>`).join('')}</div>
      </div>
      <div class="diag-col contatos-col">
        <h4 class="diag-col-title">📞 Painel de Contatos</h4>
        <div class="contatos-lista">${b.contatos.map((c, i) => `<div class="contato-card" data-contato="${i}"><div class="contato-avatar">${c.iniciais}</div><div class="contato-info"><span class="contato-nome">${c.nome}</span><span class="contato-role">${c.papel}</span></div><span class="contato-chat-icon">💬</span></div>`).join('')}</div>
      </div>
    </div>

    <div class="chat-modal-overlay" id="chatModalOverlay">
      <div class="chat-modal">
        <div class="chat-modal-header">
          <div class="chat-modal-user">
            <div class="chat-modal-avatar" id="chatModalAvatar"></div>
            <div>
              <span class="chat-modal-name" id="chatModalName"></span>
              <span class="chat-modal-role" id="chatModalRole"></span>
            </div>
          </div>
          <button class="chat-modal-close" id="chatModalClose">✕</button>
        </div>
        <div class="chat-modal-body" id="chatModalBody"></div>
        <div class="chat-modal-input">
          <input type="text" placeholder="Digite sua mensagem...">
          <button>Enviar</button>
        </div>
      </div>
    </div>
  `;
}
