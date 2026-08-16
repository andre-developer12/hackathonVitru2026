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

  app.appendChild(createSidebar());

  const main = document.createElement('main');
  main.className = 'main-content';
  main.appendChild(createHeader());

  const dashboard = document.createElement('div');
  dashboard.className = 'dashboard';

  const topRow = document.createElement('div');
  topRow.className = 'dashboard-row';
  topRow.appendChild(createCardEvolucaoSemestre());
  topRow.appendChild(createCardEvolucaoCurso());
  topRow.appendChild(createCardEvolucaoSalarial());
  dashboard.appendChild(topRow);

  const midRow = document.createElement('div');
  midRow.className = 'dashboard-row-full';
  midRow.appendChild(createCardBussolaDiagnostico());
  dashboard.appendChild(midRow);

  const bottomRow = document.createElement('div');
  bottomRow.className = 'dashboard-row';
  bottomRow.appendChild(createCardPendencias());
  bottomRow.appendChild(createCardNotificacoes());
  bottomRow.appendChild(createCardAvisos());
  dashboard.appendChild(bottomRow);

  main.appendChild(dashboard);
  app.appendChild(main);
}

onAlunoChange(() => render());

document.addEventListener('DOMContentLoaded', () => {
  render();
  const modal = criarQuestionarioModal();
  if (modal) document.body.appendChild(modal);
});
