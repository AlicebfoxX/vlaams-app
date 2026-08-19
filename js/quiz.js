// js/quiz.js - Story Comprehension & Flemish Quiz Arena

import { audioController } from './audio.js';
import { STORIES_DATA } from './data/stories.js';
import { VOCABULARY_DATA } from './data/vocabulary.js';

export class QuizArena {
  constructor(app) {
    this.app = app;
    this.currentQuestions = [];
    this.currentIndex = 0;
    this.score = 0;
    this.quizType = 'story'; // 'story' | 'hollands-vs-vlaams' | 'idioms'
  }

  startStoryQuiz(story, chapterIndex = 0) {
    this.quizType = 'story';

    const chapter = (story.chapters || [])[chapterIndex];

    // Each chapter has its own questions. Fall back to the story-wide quiz
    // only if a chapter has none yet, so two chapters never show the same set.
    const questions =
      (chapter && Array.isArray(chapter.quiz) && chapter.quiz.length) ? chapter.quiz :
      (Array.isArray(story.quiz) && story.quiz.length) ? story.quiz : null;

    this.currentQuestions = questions || [
      {
        question: `Wat heb je net gelezen in "${chapter ? chapter.title : story.title}"?`,
        options: ["Een scène met authentieke Vlaamse spreektaal", "Een formele nieuwsuitzending", "Een grammaticaoefening"],
        correctIndex: 0,
        explanation: "Elk hoofdstuk laat je echte Vlaamse omgangstaal in context horen."
      }
    ];

    this.currentIndex = 0;
    this.score = 0;
    this.app.showView('quiz');

    const label = chapter
      ? `📖 ${story.title} — H${chapterIndex + 1}: ${chapter.title}`
      : `📖 ${story.title}`;
    this.renderActiveQuiz(label);
  }

  startGeneralQuiz(type = 'hollands-vs-vlaams') {
    this.quizType = type;
    this.currentIndex = 0;
    this.score = 0;

    if (type === 'hollands-vs-vlaams') {
      this.currentQuestions = [
        {
          question: "Hoe noemt men in Vlaanderen een 'kopje koffie'?",
          options: ["Een beker koffie", "Een tas koffie", "Een pulleke koffie"],
          correctIndex: 1,
          explanation: "In Vlaanderen is 'een tas koffie' de standaardterm."
        },
        {
          question: "Wat betekent 'schoon' in de Vlaamse spreektaal?",
          options: ["Niet vuil / gewassen", "Mooi / prachtig / knap", "Helder / transparant"],
          correctIndex: 1,
          explanation: "In Vlaanderen betekent 'schoon' mooi. Voor niet-vuil gebruikt men 'proper'."
        },
        {
          question: "Hoe noemt men in Vlaanderen een 'stomerij'?",
          options: ["De stoomwasserij", "De droogkuis", "Het wassalon"],
          correctIndex: 1,
          explanation: "'Droogkuis' is afgeleid van het Vlaamse werkwoord 'kuisen' (schoonmaken)."
        },
        {
          question: "Wat is het Vlaamse woord voor 'magnetron'?",
          options: ["Microgolf / microgolfoven", "Straaloven", "Snelle bakker"],
          correctIndex: 0,
          explanation: "In heel België spreekt men van een 'microgolf' of 'microgolfoven'."
        },
        {
          question: "Wat betekent 'chance hebben'?",
          options: ["Kansen missen", "Geluk hebben", "Verliefd zijn"],
          correctIndex: 1,
          explanation: "Van het Franse 'chance', betekent geluk of mazzel hebben."
        }
      ];
    } else {
      // Idioms
      this.currentQuestions = [
        {
          question: "Wat betekent 'vijgen na Pasen'?",
          options: ["Iets wat veel te laat komt en geen nut meer heeft", "Een traditioneel feestmaal in Gent", "Een slecht excuus verzinnen"],
          correctIndex: 0,
          explanation: "Vijgen werden gegeten tijdens de vasten vóór Pasen. Vijgen na Pasen zijn dus overbodig."
        },
        {
          question: "Wat betekent 'iemand een peer stoven'?",
          options: ["Lekker koken voor een vriend", "Iemand benadelen of een gemene streek leveren", "Iemand geld lenen"],
          correctIndex: 1,
          explanation: "Een peer stoven = iemand opzettelijk dwarsbomen of beetnemen."
        },
        {
          question: "Als iemand 'het noorden kwijt is', wat is er dan aan de hand?",
          options: ["Hij is verdwaald in Nederland", "Hij is zijn oriëntatie, kalmte of morele koers kwijt", "Hij weigert Frans te praten"],
          correctIndex: 1,
          explanation: "Het kompas wijst naar het noorden; als je het noorden kwijt bent, ben je de weg of beheersing kwijt."
        },
        {
          question: "Wat betekent 'van de pot gerukt zijn'?",
          options: ["Volkomen absurd of krankzinnig zijn", "Erg geschrokken zijn van een geluid", "Erg hongerig zijn"],
          correctIndex: 0,
          explanation: "Een kleurrijke Vlaamse uitdrukking voor volstrekte waanzin."
        }
      ];
    }

    this.app.showView('quiz');
    this.renderActiveQuiz(type === 'hollands-vs-vlaams' ? '⚔️ Vlaams vs. Hollands Duel' : '🧠 Vlaamse Spreekwoorden & Gezegden');
  }

  render() {
    const container = document.getElementById('quiz-view');
    if (!container) return;

    container.innerHTML = `
      <div class="quiz-hub-header">
        <h1 class="view-title">🎯 De Vlaamse Quiz Arena</h1>
        <p class="view-subtitle">Test je begrip van de verhalen, Vlaamse woordenschat en tussentaal.</p>
      </div>

      <div class="quiz-modes-grid">
        <div class="quiz-mode-card" data-mode="hollands-vs-vlaams">
          <div class="mode-icon">⚔️</div>
          <h3>Vlaams vs. Hollands Duel</h3>
          <p>Herken je de typisch Vlaamse tegenhangers van bekende Noord-Nederlandse woorden?</p>
          <button class="btn btn-primary btn-start-mode" data-mode="hollands-vs-vlaams">Start Duel</button>
        </div>

        <div class="quiz-mode-card" data-mode="idioms">
          <div class="mode-icon">🎭</div>
          <h3>Spreekwoorden & Gezegden</h3>
          <p>Kraak de betekenis van hilarische en authentieke Vlaamse uitdrukkingen.</p>
          <button class="btn btn-secondary btn-start-mode" data-mode="idioms">Start Gezegden Quiz</button>
        </div>

        <div class="quiz-mode-card" data-mode="story-select">
          <div class="mode-icon">📖</div>
          <h3>Verhaallijn Quizzes</h3>
          <p>Selecteer een van de 4 dramatische verhalen om je tekstbegrip en keuzes te testen.</p>
          <button class="btn btn-ghost btn-start-mode" data-mode="story-select">Kies een Verhaal</button>
        </div>
      </div>

      <div id="active-quiz-container" class="active-quiz-container" style="display: none;"></div>
    `;

    this.attachHubEvents();
  }

  attachHubEvents() {
    const container = document.getElementById('quiz-view');
    if (!container) return;

    container.querySelectorAll('.btn-start-mode').forEach(btn => {
      btn.onclick = () => {
        const mode = btn.dataset.mode;
        if (mode === 'story-select') {
          this.app.showView('stories');
        } else {
          this.startGeneralQuiz(mode);
        }
      };
    });
  }

  renderActiveQuiz(title) {
    const hub = document.getElementById('quiz-view');
    if (!hub) return;

    const activeContainer = hub.querySelector('#active-quiz-container');
    const modesGrid = hub.querySelector('.quiz-modes-grid');
    if (modesGrid) modesGrid.style.display = 'none';
    if (!activeContainer) return;

    activeContainer.style.display = 'block';

    const q = this.currentQuestions[this.currentIndex];
    const total = this.currentQuestions.length;
    const progressPct = ((this.currentIndex + 1) / total) * 100;

    activeContainer.innerHTML = `
      <div class="active-quiz-card">
        <div class="quiz-card-top">
          <button class="btn btn-ghost btn-sm" id="btn-exit-quiz">✕ Stop Quiz</button>
          <span class="quiz-title-badge">${title}</span>
          <span class="quiz-step-tag">Vraag ${this.currentIndex + 1} / ${total}</span>
        </div>

        <div class="quiz-progress-track">
          <div class="quiz-progress-fill" style="width: ${progressPct}%;"></div>
        </div>

        <div class="quiz-question-box">
          <h2 class="quiz-question-text">${q.question}</h2>
        </div>

        <div class="quiz-answers-list">
          ${q.options.map((opt, oIdx) => `
            <button class="quiz-answer-btn" data-idx="${oIdx}">
              <span class="opt-letter">${String.fromCharCode(65 + oIdx)}</span>
              <span class="opt-text">${opt}</span>
            </button>
          `).join('')}
        </div>

        <div class="quiz-feedback-box" id="quiz-feedback" style="display: none;"></div>

        <div class="quiz-footer-actions">
          <button class="btn btn-primary" id="btn-next-quiz-q" style="display: none;">
            ${this.currentIndex === total - 1 ? 'Bekijk Resultaat 🏆' : 'Volgende Vraag →'}
          </button>
        </div>
      </div>
    `;

    // Events
    const exitBtn = activeContainer.querySelector('#btn-exit-quiz');
    if (exitBtn) {
      exitBtn.onclick = () => this.render();
    }

    const nextBtn = activeContainer.querySelector('#btn-next-quiz-q');

    activeContainer.querySelectorAll('.quiz-answer-btn').forEach(btn => {
      btn.onclick = () => {
        const selectedIdx = parseInt(btn.dataset.idx, 10);
        this.handleAnswer(selectedIdx, q, btn, nextBtn);
      };
    });
  }

  handleAnswer(selectedIdx, q, clickedBtn, nextBtn) {
    const isCorrect = selectedIdx === q.correctIndex;
    const feedbackEl = document.getElementById('quiz-feedback');

    // Disable all option buttons
    document.querySelectorAll('.quiz-answer-btn').forEach((btn, idx) => {
      btn.classList.add('disabled');
      if (idx === q.correctIndex) {
        btn.classList.add('correct');
      } else if (btn === clickedBtn && !isCorrect) {
        btn.classList.add('incorrect');
      }
    });

    if (feedbackEl) {
      feedbackEl.style.display = 'block';
      if (isCorrect) {
        this.score++;
        audioController.playChime('success');
        this.app.addXP(20, 'Quizvraag juist');
        feedbackEl.className = 'quiz-feedback-box success-feedback';
        feedbackEl.innerHTML = `
          <strong>✅ Juist! (+20 XP)</strong>
          <p>${q.explanation}</p>
        `;
      } else {
        audioController.playChime('error');
        this.app.addXP(5, 'Quizvraag geprobeerd');
        feedbackEl.className = 'quiz-feedback-box error-feedback';
        feedbackEl.innerHTML = `
          <strong>❌ Helaas! (+5 XP)</strong>
          <p>${q.explanation}</p>
        `;
      }
    }

    if (nextBtn) {
      nextBtn.style.display = 'inline-flex';
      nextBtn.onclick = () => {
        this.currentIndex++;
        if (this.currentIndex >= this.currentQuestions.length) {
          this.renderResultScreen();
        } else {
          this.renderActiveQuiz(this.quizType === 'story' ? 'Hoofdstukquiz' : 'Vlaamse Quiz');
        }
      };
    }
  }

  renderResultScreen() {
    const activeContainer = document.getElementById('active-quiz-container');
    if (!activeContainer) return;

    const total = this.currentQuestions.length;
    const percentage = Math.round((this.score / total) * 100);
    const xpEarned = this.score * 20;

    audioController.playChime('levelup');

    activeContainer.innerHTML = `
      <div class="quiz-result-card">
        <div class="result-trophy">🏆</div>
        <h2 class="result-title">Quiz Voltooid!</h2>
        <p class="result-subtitle">Je behaalde <strong>${this.score}</strong> van de <strong>${total}</strong> vragen juist (${percentage}%).</p>

        <div class="result-xp-badge">
          ⚡ +${xpEarned} Totale XP Verdiend!
        </div>

        <div class="result-actions">
          <button class="btn btn-secondary" id="btn-restart-quiz">🔄 Probeer Opnieuw</button>
          <button class="btn btn-primary" id="btn-return-hub">Terug naar Quiz Arena</button>
        </div>
      </div>
    `;

    const restartBtn = activeContainer.querySelector('#btn-restart-quiz');
    if (restartBtn) restartBtn.onclick = () => {
      this.currentIndex = 0;
      this.score = 0;
      this.renderActiveQuiz('Quiz Herkansing');
    };

    const returnBtn = activeContainer.querySelector('#btn-return-hub');
    if (returnBtn) returnBtn.onclick = () => this.render();
  }
}
