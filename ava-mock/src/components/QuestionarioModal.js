const perguntas = [
  'Porque eu acho interessante',
  'Porque estou fazendo bem a mim mesmo',
  'Porque é o que esperam de mim',
  'Pode até ter alguma vantagem nisso, mas eu não a vejo',
  'Porque eu acho estudar satisfatório',
  'Porque eu acho que estudar vai ser bom para mim',
  'Porque é algo que eu tenho que fazer',
  'Quero estudar, mas não sei se vale a pena',
  'Porque acho estudar divertido',
  'Por decisão pessoal',
];

let respostas = new Array(10).fill(null);

export function criarQuestionarioModal() {
  if (localStorage.getItem('questionario_concluido')) return null;

  const overlay = document.createElement('div');
  overlay.className = 'questionario-overlay';
  overlay.id = 'questionarioOverlay';

  overlay.innerHTML = `
    <div class="questionario-modal">
      <div class="questionario-header">
        <div class="questionario-header-content">
          <div class="questionario-icon">🎯</div>
          <div>
            <h2>O que lhe motiva a iniciar esta jornada acadêmica?</h2>
            <p>Avalie cada item na escala de 1 a 7</p>
          </div>
        </div>
        <div class="questionario-progress">
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" id="progressFill"></div>
          </div>
          <div class="progress-text"><span id="progressCount">0</span>/10 respondidas</div>
        </div>
      </div>

      <div class="questionario-body">
        ${perguntas.map((p, i) => `
          <div class="questionario-item" data-index="${i}">
            <span class="questionario-num">${i + 1}</span>
            <span class="questionario-texto">${p}</span>
            <div class="questionario-escala">
              <div class="escala-wrapper">
                <div class="escala-btns">
                  ${[1,2,3,4,5,6,7].map(n => `
                    <button class="escala-btn" data-pergunta="${i}" data-valor="${n}">${n}</button>
                  `).join('')}
                </div>
                <div class="escala-labels">
                  <span class="escala-label-min">Não corresponde</span>
                  <span class="escala-label-max">Corresponde exatamente</span>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="questionario-footer">
        <span class="questionario-aviso" id="questionarioAviso">Responda todas para continuar</span>
        <button class="questionario-submit" id="questionarioSubmit" disabled>Concluir →</button>
      </div>
    </div>
  `;

  setTimeout(() => {
    overlay.querySelectorAll('.escala-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const pergIdx = parseInt(btn.dataset.pergunta);
        const valor = parseInt(btn.dataset.valor);
        respostas[pergIdx] = valor;

        // Visual: marca selecionado
        const item = overlay.querySelector(`.questionario-item[data-index="${pergIdx}"]`);
        item.querySelectorAll('.escala-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        item.classList.add('respondido');

        updateProgress(overlay);
      });
    });

    overlay.querySelector('#questionarioSubmit').addEventListener('click', () => {
      if (respostas.every(r => r !== null)) {
        localStorage.setItem('questionario_concluido', JSON.stringify(respostas));
        overlay.classList.add('closing');
        setTimeout(() => overlay.remove(), 500);
      }
    });
  }, 0);

  return overlay;
}

function updateProgress(overlay) {
  const respondidas = respostas.filter(r => r !== null).length;
  const pct = (respondidas / 10) * 100;

  // Progress bar
  const fill = overlay.querySelector('#progressFill');
  fill.style.width = pct + '%';

  // Counter
  const count = overlay.querySelector('#progressCount');
  count.textContent = respondidas;

  // Aviso + botão
  const btn = overlay.querySelector('#questionarioSubmit');
  const aviso = overlay.querySelector('#questionarioAviso');

  if (respondidas === 10) {
    btn.disabled = false;
    aviso.textContent = 'Tudo pronto! Clique para continuar';
    aviso.classList.add('pronto');
  } else {
    btn.disabled = true;
    const faltam = 10 - respondidas;
    aviso.textContent = `Faltam ${faltam} pergunta${faltam > 1 ? 's' : ''}`;
    aviso.classList.remove('pronto');
  }
}
