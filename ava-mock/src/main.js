import { createSidebar } from './components/Sidebar.js';
import { createHeader } from './components/Header.js';
import { createCardEvolucaoSemestre } from './components/cards/EvolucaoSemestre.js';
import { createCardEvolucaoCurso } from './components/cards/EvolucaoCurso.js';
import { createCardEvolucaoSalarial } from './components/cards/EvolucaoSalarial.js';
import { createCardPendencias } from './components/cards/Pendencias.js';
import { createCardNotificacoes } from './components/cards/Notificacoes.js';
import { createCardAvisos } from './components/cards/Avisos.js';
import { createCardBussolaDiagnostico } from './components/cards/BussolaDiagnostico.js';
import { onAlunoChange } from './state.js';
import { criarQuestionarioModal } from './components/QuestionarioModal.js';

function render() {
  const app = document.getElementById('app');
  app.innerHTML = '';

  // Sidebar
  app.appendChild(createSidebar());

  // Main content
  const main = document.createElement('main');
  main.className = 'main-content';

  // Header (agora com seletor de aluno)
  main.appendChild(createHeader());

  // Dashboard
  const dashboard = document.createElement('div');
  dashboard.className = 'dashboard';

  // Top row - Gráficos (3 cards)
  const topRow = document.createElement('div');
  topRow.className = 'dashboard-row';
  topRow.appendChild(createCardEvolucaoSemestre());
  topRow.appendChild(createCardEvolucaoCurso());
  topRow.appendChild(createCardEvolucaoSalarial());
  dashboard.appendChild(topRow);

  // Card grande central — Diagnóstico Bússola
  const midRow = document.createElement('div');
  midRow.className = 'dashboard-row-full';
  midRow.appendChild(createCardBussolaDiagnostico());
  dashboard.appendChild(midRow);

  // Bottom row - Informações (3 cards)
  const bottomRow = document.createElement('div');
  bottomRow.className = 'dashboard-row';
  bottomRow.appendChild(createCardPendencias());
  bottomRow.appendChild(createCardNotificacoes());
  bottomRow.appendChild(createCardAvisos());
  dashboard.appendChild(bottomRow);

  main.appendChild(dashboard);
  app.appendChild(main);
}

// Re-render quando trocar de aluno
onAlunoChange(() => render());

document.addEventListener('DOMContentLoaded', () => {
  render();
  // Dispara questionário obrigatório
  const modal = criarQuestionarioModal();
  if (modal) document.body.appendChild(modal);
});
