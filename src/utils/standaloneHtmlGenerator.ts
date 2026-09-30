import { QUESTIONS_DATA } from '../data/questions';

export function downloadStandaloneSmartboardHtml() {
  const jsonQuestions = JSON.stringify(QUESTIONS_DATA);

  const htmlContent = `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>İngilizce Bağlaçlar (Conjunctions) - Akıllı Tahta İnteraktif Testi</title>
  <style>
    :root {
      --primary: #2563eb;
      --primary-dark: #1d4ed8;
      --success: #16a34a;
      --success-bg: #dcfce7;
      --danger: #dc2626;
      --danger-bg: #fee2e2;
      --card-bg: #ffffff;
      --body-bg: #f8fafc;
      --text-main: #0f172a;
      --text-muted: #64748b;
      --border-color: #e2e8f0;
      --smart-font-scale: 1;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-tap-highlight-color: transparent;
      user-select: none;
    }

    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      background-color: var(--body-bg);
      color: var(--text-main);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    /* Top Bar */
    header {
      background: #ffffff;
      border-bottom: 2px solid var(--border-color);
      padding: 12px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    }

    .brand-title {
      font-size: 20px;
      font-weight: 800;
      color: #1e293b;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .badge-offline {
      background: #dbeafe;
      color: #1e40af;
      font-size: 12px;
      font-weight: 700;
      padding: 4px 10px;
      border-radius: 9999px;
    }

    .controls-group {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }

    .btn {
      font-size: 15px;
      font-weight: 600;
      padding: 10px 18px;
      border-radius: 10px;
      border: 1px solid var(--border-color);
      background: #ffffff;
      color: #334155;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.15s ease;
    }

    .btn:hover {
      background: #f1f5f9;
      color: #0f172a;
    }

    .btn-primary {
      background: var(--primary);
      color: #ffffff;
      border-color: var(--primary);
    }

    .btn-primary:hover {
      background: var(--primary-dark);
    }

    /* Main Container */
    main {
      flex: 1;
      max-width: 1100px;
      width: 100%;
      margin: 0 auto;
      padding: 24px 16px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    /* Score Bar */
    .status-panel {
      background: #ffffff;
      border-radius: 16px;
      padding: 16px 24px;
      border: 1px solid var(--border-color);
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 16px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.03);
    }

    .stat-pill {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 16px;
      font-weight: 700;
    }

    .pill-green { color: var(--success); }
    .pill-red { color: var(--danger); }
    .pill-blue { color: var(--primary); }

    .progress-track {
      flex: 1;
      min-width: 160px;
      height: 12px;
      background: #e2e8f0;
      border-radius: 9999px;
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #3b82f6, #10b981);
      width: 0%;
      transition: width 0.3s ease;
    }

    /* Question Card */
    .card-question {
      background: #ffffff;
      border-radius: 20px;
      border: 2px solid var(--border-color);
      padding: 28px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .question-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 14px;
    }

    .q-number {
      font-size: 18px;
      font-weight: 800;
      color: #475569;
    }

    .q-category {
      font-size: 14px;
      font-weight: 700;
      color: #2563eb;
      background: #eff6ff;
      padding: 4px 12px;
      border-radius: 6px;
    }

    /* Question Display Area */
    .question-body-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 24px;
      align-items: center;
    }

    @media (min-width: 768px) {
      .question-body-grid {
        grid-template-columns: 280px 1fr;
      }
    }

    .illustration-frame {
      background: #f8fafc;
      border-radius: 14px;
      border: 1px solid var(--border-color);
      padding: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 200px;
    }

    .illustration-frame svg {
      width: 100%;
      max-height: 220px;
      border-radius: 8px;
    }

    .sentence-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .sentence-text {
      font-size: 26px;
      line-height: 1.45;
      font-weight: 700;
      color: #0f172a;
    }

    .blank-slot {
      display: inline-block;
      min-width: 140px;
      padding: 4px 16px;
      margin: 0 6px;
      border-bottom: 4px dashed #3b82f6;
      background: #f1f5f9;
      border-radius: 8px;
      text-align: center;
      color: #2563eb;
      transition: all 0.25s ease;
    }

    .blank-slot.correct-slot {
      border-bottom: 4px solid var(--success);
      background: var(--success-bg);
      color: #15803d;
      font-weight: 800;
    }

    .blank-slot.wrong-slot {
      border-bottom: 4px solid var(--danger);
      background: var(--danger-bg);
      color: #b91c1c;
    }

    .sentence-tr {
      font-size: 16px;
      color: #475569;
      background: #f8fafc;
      padding: 10px 16px;
      border-radius: 8px;
      border-left: 4px solid #3b82f6;
    }

    /* Options Section (Akıllı Tahta İri Butonları) */
    .options-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 16px;
      margin-top: 8px;
    }

    @media (min-width: 640px) {
      .options-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .opt-btn {
      position: relative;
      background: #ffffff;
      border: 3px solid #cbd5e1;
      border-radius: 16px;
      padding: 22px 20px;
      min-height: 84px;
      font-size: 24px;
      font-weight: 800;
      color: #1e293b;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 16px;
      transition: all 0.15s ease;
      box-shadow: 0 2px 4px rgba(0,0,0,0.04);
    }

    .opt-btn:hover:not(:disabled) {
      border-color: #3b82f6;
      background: #f8fafc;
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(59, 130, 246, 0.15);
    }

    .opt-letter {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      background: #f1f5f9;
      color: #475569;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      font-weight: 900;
      flex-shrink: 0;
      transition: all 0.15s ease;
    }

    .opt-btn.is-correct {
      border-color: var(--success) !important;
      background: var(--success-bg) !important;
      color: #14532d !important;
      box-shadow: 0 0 0 4px rgba(22, 163, 74, 0.2);
    }

    .opt-btn.is-correct .opt-letter {
      background: var(--success);
      color: #ffffff;
    }

    .opt-btn.is-wrong {
      border-color: var(--danger) !important;
      background: var(--danger-bg) !important;
      color: #7f1d1d !important;
      animation: shake 0.4s ease;
      box-shadow: 0 0 0 4px rgba(220, 38, 38, 0.2);
    }

    .opt-btn.is-wrong .opt-letter {
      background: var(--danger);
      color: #ffffff;
    }

    .badge-feedback {
      margin-left: auto;
      font-size: 30px;
      line-height: 1;
      display: flex;
      align-items: center;
    }

    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20%, 60% { transform: translateX(-8px); }
      40%, 80% { transform: translateX(8px); }
    }

    /* Explanation Box */
    .explanation-panel {
      display: none;
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      border-radius: 12px;
      padding: 16px 20px;
      font-size: 16px;
      line-height: 1.5;
      color: #1e3a8a;
      animation: fadeIn 0.3s ease;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Action Deck */
    .action-deck {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 16px;
      border-top: 1px solid var(--border-color);
      padding-top: 18px;
    }

    /* Completion View */
    #view-completed {
      display: none;
      background: #ffffff;
      border-radius: 24px;
      border: 2px solid var(--border-color);
      padding: 40px 24px;
      text-align: center;
      max-width: 600px;
      margin: 40px auto;
      box-shadow: 0 10px 25px rgba(0,0,0,0.08);
    }

    .score-circle {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      background: #ecfdf5;
      border: 6px solid var(--success);
      color: var(--success);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 auto 24px;
      font-size: 38px;
      font-weight: 900;
    }

    /* Font size scaling helper */
    .scale-large .sentence-text { font-size: 32px; }
    .scale-large .opt-btn { font-size: 28px; padding: 26px 22px; }
  </style>
</head>
<body>
  <header>
    <div class="brand-title">
      <span>🎓 CONJUNCTIONS (İngilizce Bağlaçlar)</span>
      <span class="badge-offline">Akıllı Tahta Çevrimdışı Sürümü</span>
    </div>
    <div class="controls-group">
      <button class="btn" id="btn-sound" title="Sesi Aç/Kapat">🔊 Ses Açık</button>
      <button class="btn" id="btn-font-scale" title="Yazı Boyutunu Değiştir">🔠 Büyük Yazı</button>
      <button class="btn" id="btn-fullscreen" title="Tam Ekran Modu">⛶ Tam Ekran</button>
      <button class="btn btn-primary" id="btn-new-shuffle">🔀 Yeni Rastgele Test</button>
    </div>
  </header>

  <main>
    <!-- Status & Progress -->
    <div class="status-panel">
      <div class="stat-pill pill-blue">
        <span>Soru:</span>
        <span id="current-q-index">1</span> / <span id="total-q-count">27</span>
      </div>
      <div class="progress-track">
        <div class="progress-fill" id="progress-bar"></div>
      </div>
      <div class="stat-pill pill-green">
        <span>✔ Doğru:</span>
        <span id="correct-count">0</span>
      </div>
      <div class="stat-pill pill-red">
        <span>✖ Yanlış:</span>
        <span id="wrong-count">0</span>
      </div>
    </div>

    <!-- Active Question Card -->
    <div class="card-question" id="view-question">
      <div class="question-header">
        <span class="q-number" id="q-label">Soru 1</span>
        <span class="q-category" id="q-category-tag">Conjunctions</span>
      </div>

      <div class="question-body-grid">
        <div class="illustration-frame" id="illustration-slot">
          <!-- Inline SVG rendered dynamically -->
        </div>

        <div class="sentence-container">
          <div class="sentence-text" id="sentence-slot">
            Adrian is a very honest boy, <span class="blank-slot">________</span> everybody trusts him.
          </div>
          <div class="sentence-tr" id="translation-slot">
            Adrian çok dürüst bir çocuk, bu yüzden herkes ona güvenir.
          </div>
        </div>
      </div>

      <!-- Options Buttons -->
      <div class="options-grid" id="options-container">
        <!-- Generated dynamically with shuffled options -->
      </div>

      <!-- Explanation Box -->
      <div class="explanation-panel" id="explanation-box">
        <strong>Açıklama:</strong> <span id="explanation-text"></span>
      </div>

      <!-- Action Deck -->
      <div class="action-deck">
        <button class="btn" id="btn-toggle-tr">🌐 Türkçe Çeviriyi Gizle/Göster</button>
        <button class="btn btn-primary" id="btn-next-question" style="display:none; font-size: 18px; padding: 12px 28px;">
          Sıradaki Soruya Geç ➔
        </button>
      </div>
    </div>

    <!-- Completion Card -->
    <div id="view-completed">
      <div class="score-circle" id="final-percentage">100%</div>
      <h2 style="font-size: 28px; margin-bottom: 12px; color: #1e293b;">Tebrikler! Test Tamamlandı</h2>
      <p style="font-size: 18px; color: #64748b; margin-bottom: 24px;" id="final-stats-text">
        27 soruda 25 doğru yaptınız!
      </p>
      <button class="btn btn-primary" id="btn-restart" style="font-size: 18px; padding: 14px 32px;">
        🔀 Yeni Rastgele Soru Seti ile Tekrar Başla
      </button>
    </div>
  </main>

  <script>
    // Embedded Questions Data
    const rawQuestions = ${jsonQuestions};

    // Synthesizer for offline sound
    let soundEnabled = true;
    let audioCtx = null;
    function getAudioCtx() {
      if (!audioCtx) {
        const AudioCtor = window.AudioContext || window.webkitAudioContext;
        if (AudioCtor) audioCtx = new AudioCtor();
      }
      if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
      return audioCtx;
    }

    function playSound(type) {
      if (!soundEnabled) return;
      try {
        const ctx = getAudioCtx();
        if (!ctx) return;
        const now = ctx.currentTime;
        if (type === 'correct') {
          [659.25, 830.61, 987.77].forEach((f, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.frequency.setValueAtTime(f, now + i * 0.08);
            gain.gain.setValueAtTime(0, now + i * 0.08);
            gain.gain.linearRampToValueAtTime(0.2, now + i * 0.08 + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.35);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now + i * 0.08);
            osc.stop(now + i * 0.08 + 0.4);
          });
        } else if (type === 'wrong') {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(160, now);
          osc.frequency.exponentialRampToValueAtTime(110, now + 0.25);
          gain.gain.setValueAtTime(0.18, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now);
          osc.stop(now + 0.3);
        }
      } catch (e) {}
    }

    // Shuffle Array
    function shuffle(arr) {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }

    // State
    let questions = [];
    let currentIndex = 0;
    let correctCount = 0;
    let wrongCount = 0;
    let answered = false;

    // Start New Quiz
    function startNewQuiz() {
      questions = shuffle(rawQuestions).map(q => ({
        ...q,
        options: shuffle(q.options)
      }));
      currentIndex = 0;
      correctCount = 0;
      wrongCount = 0;
      answered = false;

      document.getElementById('view-question').style.display = 'flex';
      document.getElementById('view-completed').style.display = 'none';
      document.getElementById('total-q-count').innerText = questions.length;
      updateHeaderStats();
      renderCurrentQuestion();
    }

    function updateHeaderStats() {
      document.getElementById('current-q-index').innerText = currentIndex + 1;
      document.getElementById('correct-count').innerText = correctCount;
      document.getElementById('wrong-count').innerText = wrongCount;
      const pct = (currentIndex / questions.length) * 100;
      document.getElementById('progress-bar').style.width = pct + '%';
    }

    // Render Question
    function renderCurrentQuestion() {
      answered = false;
      const q = questions[currentIndex];
      document.getElementById('q-label').innerText = 'Soru ' + (currentIndex + 1) + ' / ' + questions.length;
      document.getElementById('q-category-tag').innerText = q.category || 'Conjunctions';
      
      // Blank Slot
      const blankHtml = '<span class="blank-slot" id="live-blank">________</span>';
      let sentenceHtml = '';
      if (q.sentenceBefore && q.sentenceAfter) {
        sentenceHtml = q.sentenceBefore + ' ' + blankHtml + ' ' + q.sentenceAfter;
      } else if (!q.sentenceBefore) {
        sentenceHtml = blankHtml + ' ' + q.sentenceAfter;
      } else {
        sentenceHtml = q.sentenceBefore + ' ' + blankHtml;
      }
      document.getElementById('sentence-slot').innerHTML = sentenceHtml;
      document.getElementById('translation-slot').innerText = q.translationTr;
      document.getElementById('explanation-box').style.display = 'none';
      document.getElementById('btn-next-question').style.display = 'none';

      // SVG Illustration
      renderSvg(q.illustrationType);

      // Options
      const letters = ['A', 'B', 'C'];
      const optContainer = document.getElementById('options-container');
      optContainer.innerHTML = '';

      q.options.forEach((optText, idx) => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.innerHTML = '<span class="opt-letter">' + letters[idx] + '</span> <span>' + optText + '</span> <span class="badge-feedback"></span>';
        btn.onclick = () => selectOption(btn, optText, q.correctAnswer, q.explanationTr);
        optContainer.appendChild(btn);
      });
    }

    // Option Clicked
    function selectOption(btnEl, selectedText, correctText, explanation) {
      if (answered) return;
      answered = true;

      const isRight = selectedText.trim().toLowerCase() === correctText.trim().toLowerCase();
      const blankEl = document.getElementById('live-blank');

      if (isRight) {
        correctCount++;
        playSound('correct');
        btnEl.classList.add('is-correct');
        btnEl.querySelector('.badge-feedback').innerHTML = '✔';
        if (blankEl) {
          blankEl.className = 'blank-slot correct-slot';
          blankEl.innerText = correctText;
        }
      } else {
        wrongCount++;
        playSound('wrong');
        btnEl.classList.add('is-wrong');
        btnEl.querySelector('.badge-feedback').innerHTML = '✖';
        if (blankEl) {
          blankEl.className = 'blank-slot wrong-slot';
          blankEl.innerText = selectedText + ' ➔ ' + correctText;
        }

        // Highlight correct option
        const allButtons = document.querySelectorAll('.opt-btn');
        allButtons.forEach(b => {
          if (b.innerText.toLowerCase().includes(correctText.toLowerCase())) {
            b.classList.add('is-correct');
            b.querySelector('.badge-feedback').innerHTML = '✔';
          }
        });
      }

      // Show explanation
      const expBox = document.getElementById('explanation-box');
      document.getElementById('explanation-text').innerText = explanation;
      expBox.style.display = 'block';

      // Show Next button
      document.getElementById('btn-next-question').style.display = 'inline-flex';
      updateHeaderStats();
    }

    // Next Question
    document.getElementById('btn-next-question').onclick = () => {
      if (currentIndex + 1 < questions.length) {
        currentIndex++;
        updateHeaderStats();
        renderCurrentQuestion();
      } else {
        // Show Completed View
        document.getElementById('view-question').style.display = 'none';
        document.getElementById('view-completed').style.display = 'block';
        const pct = Math.round((correctCount / questions.length) * 100);
        document.getElementById('final-percentage').innerText = pct + '%';
        document.getElementById('final-stats-text').innerText = 
          questions.length + ' soruda ' + correctCount + ' Doğru, ' + wrongCount + ' Yanlış yaptınız.';
      }
    };

    // Toggle Translation
    document.getElementById('btn-toggle-tr').onclick = () => {
      const tr = document.getElementById('translation-slot');
      tr.style.display = tr.style.display === 'none' ? 'block' : 'none';
    };

    // Sound toggle
    document.getElementById('btn-sound').onclick = (e) => {
      soundEnabled = !soundEnabled;
      e.target.innerText = soundEnabled ? '🔊 Ses Açık' : '🔇 Ses Kapalı';
    };

    // Font Scale toggle
    let isLargeFont = false;
    document.getElementById('btn-font-scale').onclick = (e) => {
      isLargeFont = !isLargeFont;
      document.body.classList.toggle('scale-large', isLargeFont);
      e.target.innerText = isLargeFont ? '🔠 Normal Yazı' : '🔠 Büyük Yazı';
    };

    // Fullscreen toggle
    document.getElementById('btn-fullscreen').onclick = () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    };

    // Restart buttons
    document.getElementById('btn-new-shuffle').onclick = startNewQuiz;
    document.getElementById('btn-restart').onclick = startNewQuiz;

    // SVG Illustration Generator for standalone offline smartboards
    function renderSvg(type) {
      const slot = document.getElementById('illustration-slot');
      let svgContent = '';
      
      switch(type) {
        case 'honest_boy':
          svgContent = '<svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" rx="16" fill="#F0FDF4"/><circle cx="200" cy="150" r="110" fill="#DCFCE7"/><path d="M150 260 L160 170 C160 150 240 150 240 170 L250 260 Z" fill="#2563EB"/><circle cx="200" cy="105" r="40" fill="#FDE68A"/><path d="M165 95 C165 65 235 65 235 95 Z" fill="#92400E"/><circle cx="187" cy="105" r="4.5" fill="#1E293B"/><circle cx="213" cy="105" r="4.5" fill="#1E293B"/><path d="M190 120 Q200 130 210 120" stroke="#B45309" stroke-width="3" stroke-linecap="round"/><polygon points="200,165 206,182 224,182 210,193 215,210 200,199 185,210 190,193 176,182 194,182" fill="#F59E0B"/></svg>';
          break;
        case 'happy_friends':
          svgContent = '<svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" rx="16" fill="#EFF6FF"/><circle cx="340" cy="60" r="32" fill="#FBBF24" opacity="0.8"/><path d="M0 240 Q150 180 400 240 L400 300 L0 300 Z" fill="#86EFAC"/><circle cx="160" cy="130" r="28" fill="#FED7AA"/><path d="M125 250 L135 175 C135 160 185 160 185 175 L195 250 Z" fill="#3B82F6"/><circle cx="240" cy="135" r="28" fill="#FDE68A"/><path d="M205 250 L215 180 C215 165 265 165 265 180 L275 250 Z" fill="#EC4899"/><path d="M200 120 C200 110 190 105 185 112 C180 105 170 110 170 120 C170 135 200 145 200 145 C200 145 230 135 230 120 C230 110 220 105 215 112 C210 105 200 110 200 120 Z" fill="#EF4444" transform="translate(0,-30) scale(0.6)"/></svg>';
          break;
        case 'stubborn_boy':
        case 'stubborn_mind':
          svgContent = '<svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" rx="16" fill="#FEF2F2"/><circle cx="200" cy="150" r="110" fill="#FEE2E2"/><path d="M140 260 L155 175 C155 155 245 155 245 175 L260 260 Z" fill="#EF4444"/><rect x="150" y="190" width="100" height="36" rx="18" fill="#DC2626"/><circle cx="200" cy="110" r="40" fill="#FED7AA"/><line x1="175" y1="95" x2="192" y2="104" stroke="#7F1D1D" stroke-width="4" stroke-linecap="round"/><line x1="225" y1="95" x2="208" y2="104" stroke="#7F1D1D" stroke-width="4" stroke-linecap="round"/><path d="M188 132 Q200 124 212 132" stroke="#7F1D1D" stroke-width="3.5" stroke-linecap="round"/></svg>';
          break;
        case 'movies_popcorn':
          svgContent = '<svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" rx="16" fill="#FEFCE8"/><rect x="60" y="50" width="280" height="40" rx="6" fill="#1E293B"/><path d="M140 270 L155 130 L245 130 L260 270 Z" fill="#EF4444"/><path d="M170 270 L178 130 L192 130 L188 270 Z" fill="#FFFFFF"/><path d="M212 270 L208 130 L222 130 L230 270 Z" fill="#FFFFFF"/><circle cx="170" cy="115" r="20" fill="#FDE047"/><circle cx="200" cy="100" r="22" fill="#FEF08A"/><circle cx="230" cy="115" r="20" fill="#FDE047"/></svg>';
          break;
        case 'birthday_party':
          svgContent = '<svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" rx="16" fill="#FFFBEB"/><polygon points="40,40 70,80 100,40" fill="#EF4444"/><polygon points="100,40 130,80 160,40" fill="#3B82F6"/><polygon points="160,40 190,80 220,40" fill="#10B981"/><circle cx="80" cy="120" r="24" fill="#F87171"/><circle cx="320" cy="120" r="24" fill="#60A5FA"/><rect x="150" y="200" width="100" height="55" rx="10" fill="#FB7185"/><rect x="165" y="165" width="70" height="40" rx="8" fill="#FDE047"/><rect x="196" y="140" width="8" height="25" fill="#38BDF8"/><circle cx="200" cy="132" r="6" fill="#F59E0B"/></svg>';
          break;
        case 'party_invite_check':
          svgContent = '<svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" rx="16" fill="#F0FDF4"/><rect x="110" y="100" width="180" height="130" rx="10" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="3"/><path d="M110 100 L200 170 L290 100" stroke="#94A3B8" stroke-width="3"/><circle cx="200" cy="180" r="36" fill="#22C55E"/><path d="M185 180 L195 192 L218 168" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round"/></svg>';
          break;
        case 'exam_tomorrow':
          svgContent = '<svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" rx="16" fill="#EFF6FF"/><circle cx="100" cy="90" r="36" fill="#FFFFFF" stroke="#2563EB" stroke-width="4"/><line x1="100" y1="90" x2="100" y2="68" stroke="#1E293B" stroke-width="3"/><line x1="100" y1="90" x2="118" y2="90" stroke="#EF4444" stroke-width="2.5"/><rect x="230" y="220" width="120" height="28" rx="4" fill="#3B82F6"/><rect x="240" y="195" width="100" height="25" rx="4" fill="#EF4444"/><rect x="150" y="110" width="80" height="110" rx="6" fill="#FFFFFF" stroke="#94A3B8" stroke-width="2"/><text x="190" y="195" fill="#DC2626" font-size="22" font-weight="800">EXAM</text></svg>';
          break;
        case 'call_cafe':
        case 'cafe_meeting':
          svgContent = '<svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" rx="16" fill="#F0FDFA"/><path d="M60 40 L340 40 L330 80 L70 80 Z" fill="#0D9488"/><ellipse cx="200" cy="220" rx="120" ry="35" fill="#D97706"/><rect x="150" y="175" width="28" height="24" rx="4" fill="#FFFFFF" stroke="#B45309" stroke-width="2"/><rect x="220" y="175" width="28" height="24" rx="4" fill="#FFFFFF" stroke="#B45309" stroke-width="2"/></svg>';
          break;
        case 'concert_invite':
        case 'awesome_concert_ticket':
          svgContent = '<svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" rx="16" fill="#FAF5FF"/><rect x="100" y="100" width="200" height="100" rx="12" fill="#8B5CF6"/><circle cx="100" cy="150" r="14" fill="#FAF5FF"/><circle cx="300" cy="150" r="14" fill="#FAF5FF"/><text x="200" y="155" text-anchor="middle" fill="#FFFFFF" font-size="22" font-weight="bold">CONCERT TICKET</text></svg>';
          break;
        default:
          svgContent = '<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="240" rx="14" fill="#eff6ff"/><circle cx="200" cy="120" r="70" fill="#dbeafe"/><circle cx="200" cy="95" r="32" fill="#fde68a"/><path d="M160 210 C160 150 240 150 240 210 Z" fill="#2563eb"/><circle cx="190" cy="92" r="4" fill="#1e293b"/><circle cx="210" cy="92" r="4" fill="#1e293b"/><path d="M192 105 Q200 115 208 105" stroke="#b45309" stroke-width="3" stroke-linecap="round"/><circle cx="200" cy="165" r="16" fill="#f59E0B"/></svg>';
      }

      slot.innerHTML = svgContent;
    }

    // Initialize on load
    startNewQuiz();
  </script>
</body>
</html>`;

  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Baglaclar_Conjunctions_Akilli_Tahta_Offline.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
