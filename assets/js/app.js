function showTab(name) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  event.target.classList.add('active');
}

let score = 0, answered = 0, total = 6;

function answer(btn, result, qId) {
  const q = document.getElementById(qId);
  if (q.dataset.answered) return;
  q.dataset.answered = '1';
  answered++;

  q.querySelectorAll('.quiz-opt').forEach(b => b.disabled = true);
  btn.classList.add(result);

  if (result === 'correct') {
    score++;
    if (result === 'correct') {
      q.querySelector('.quiz-opt.correct') || btn.classList.add('correct');
    }
  } else {
    // Highlight correct answer
    q.querySelectorAll('.quiz-opt').forEach(b => {
      if (b.onclick.toString().includes("'correct'")) b.classList.add('correct');
    });
  }

  document.getElementById('expl-' + qId).classList.add('show');
  document.getElementById('score').textContent = score;
  document.getElementById('total').textContent = answered;
  document.getElementById('progress-fill').style.width = (score / total * 100) + '%';
}

function copyCode(btn) {
  const code = btn.parentElement.innerText.replace('Copier\n','').trim();
  navigator.clipboard.writeText(code).then(() => {
    btn.textContent = '✓ Copié !';
    setTimeout(() => btn.textContent = 'Copier', 2000);
  });
}
