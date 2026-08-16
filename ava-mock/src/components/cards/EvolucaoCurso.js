import { createBarChart } from '../charts/BarChart.js';
import { getAlunoAtivo } from '../../state.js';

export function createCardEvolucaoCurso() {
  const card = document.createElement('div');
  card.className = 'card';

  const data = getAlunoAtivo().evolucaoCurso;
  const labels = data.semestres.map(s => s.periodo);

  card.innerHTML = `
    <div class="card-header">
      <h3>Evolução Curso</h3>
    </div>
    <div class="card-body">
      ${createBarChart(data.semestres, labels)}
      <div class="chart-info">
        <p>${data.concluido.toFixed(2)}% concluído</p>
      </div>
    </div>
  `;

  return card;
}
