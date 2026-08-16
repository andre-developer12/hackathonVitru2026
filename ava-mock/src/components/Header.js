import { getAlunoAtivo, getOutroAluno, trocarAluno } from '../state.js';

export function createHeader() {
  const header = document.createElement('header');
  header.className = 'header';

  const aluno = getAlunoAtivo();
  const outro = getOutroAluno();

  header.innerHTML = `
    <div class="header-left">
      <button class="menu-toggle" id="menuToggle">☰</button>
      <h1 class="header-title">AVA <span class="header-subtitle">Ambiente Virtual de Aprendizagem</span></h1>
    </div>
    <div class="header-right">
      <div class="aluno-selector" id="alunoSelector">
        <div class="aluno-selector-trigger" id="alunoTrigger">
          <div class="aluno-avatar-sm">${aluno.iniciais}</div>
          <div class="aluno-selector-info">
            <span class="aluno-selector-name">${aluno.nome} ${aluno.sobrenome}</span>
            <span class="aluno-selector-course">${aluno.curso} · ${aluno.semestre}º sem</span>
          </div>
          <span class="aluno-arrow">▾</span>
        </div>
        <div class="aluno-dropdown" id="alunoDropdown">
          <div class="aluno-dropdown-label">Trocar aluno</div>
          <div class="aluno-dropdown-item" id="trocarAlunoBtn">
            <div class="aluno-avatar-sm outro">${outro.iniciais}</div>
            <div>
              <span class="aluno-dropdown-name">${outro.nome} ${outro.sobrenome}</span>
              <span class="aluno-dropdown-course">${outro.curso} · ${outro.semestre}º sem</span>
            </div>
          </div>
        </div>
      </div>
      <button class="btn-sair" id="btnSair">Sair</button>
    </div>
  `;

  // Menu toggle
  header.querySelector('#menuToggle').addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
    document.querySelector('.main-content').classList.toggle('expanded');
  });

  // Sair
  header.querySelector('#btnSair').addEventListener('click', () => {
    if (confirm('Deseja realmente sair?')) {
      alert('Sessão encerrada.');
    }
  });

  // Aluno selector toggle
  header.querySelector('#alunoTrigger').addEventListener('click', (e) => {
    e.stopPropagation();
    const dropdown = header.querySelector('#alunoDropdown');
    dropdown.classList.toggle('show');
    header.querySelector('.aluno-arrow').classList.toggle('open');
  });

  // Trocar aluno
  header.querySelector('#trocarAlunoBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    trocarAluno();
  });

  // Fechar dropdown clicando fora
  document.addEventListener('click', () => {
    const dropdown = header.querySelector('#alunoDropdown');
    if (dropdown) {
      dropdown.classList.remove('show');
      const arrow = header.querySelector('.aluno-arrow');
      if (arrow) arrow.classList.remove('open');
    }
  });

  return header;
}
