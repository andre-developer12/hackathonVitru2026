import { createBarChart } from '../charts/BarChart.js';
import { getAlunoAtivo } from '../../state.js';

export function createCardEvolucaoSemestre() {
  const card = document.createElement('div');
  card.className = 'card';

  const aluno = getAlunoAtivo();
  const data = aluno.evolucaoSemestre;
  const labels = data.disciplinas.map(d => d.codigo);

  card.innerHTML = `
    <div class="card-header">
      <h3>Evolução Semestre <span class="semester-badge">${data.semestre} ▼</span></h3>
    </div>
    <div class="card-body">
      ${createBarChart(data.disciplinas, labels)}
      <div class="chart-info">
        <p>${data.concluido.toFixed(2)}% concluído</p>
        <p>${data.aproveitamento.toFixed(2)}% aproveitamento</p>
      </div>
    </div>
  `;

  return card;
}
