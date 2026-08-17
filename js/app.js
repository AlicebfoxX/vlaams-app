// js/app.js - Main Application Controller & State Management

import { STORIES_DATA } from './data/stories.js';
import { VOCABULARY_DATA } from './data/vocabulary.js';
import { GRAMMAR_DATA } from './data/grammar.js';
import { audioController } from './audio.js';
import { StoryReader } from './reader.js';
import { VaultManager } from './vault.js';
import { QuizArena } from './quiz.js';
import { AuthController } from './auth.js';

class App {
  constructor() {
    this.state = {
      xp: parseInt(localStorage.getItem('klapke_xp') || '0', 10),
      streak: parseInt(localStorage.getItem('klapke_streak') || '1', 10),
      bookmarks: JSON.parse(localStorage.getItem('klapke_bookmarks') || '[]'),
      theme: localStorage.getItem('klapke_theme') || 'dark',
      activeView: 'dashboard'
    };

    this.auth = new AuthController(this);
    this.reader = new StoryReader(this);
    this.vault = new VaultManager(this);
    this.quiz = new QuizArena(this);

    this.init();
  }

  init() {
    this.applyTheme(this.state.theme);
    if (!this.auth.isAuthenticated()) {
      this.auth.renderLockScreen();
    } else {
      this.initAuthenticatedApp();
    }
  }

  initAuthenticatedApp() {
    this.updateStatsUI();
    this.setupGlobalNav();
    this.showView('dashboard');

    // Handle initial routing or hash
    window.onpopstate = () => {
      if (!this.auth.isAuthenticated()) return;
      const view = window.location.hash.replace('#', '') || 'dashboard';
      this.showView(view, false);
    };
  }

  // --- XP & LEVEL SYSTEM ---
  addXP(amount, reason = '') {
    this.state.xp += amount;
    localStorage.setItem('klapke_xp', this.state.xp.toString());
    this.updateStatsUI();

    // Show floating XP notification
    const toast = document.createElement('div');
    toast.className = 'xp-toast';
    toast.innerHTML = `⚡ +${amount} XP ${reason ? `· ${reason}` : ''}`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
  }

  getLevelInfo() {
    const xp = this.state.xp;
    if (xp < 100) return { rank: "De Toerist", icon: "🧳", min: 0, max: 100, nextRank: "Den Inwijkeling" };
    if (xp < 300) return { rank: "Den Inwijkeling", icon: "🚲", min: 100, max: 300, nextRank: "D'n Aangespoelde" };
    if (xp < 650) return { rank: "D'n Aangespoelde", icon: "🌊", min: 300, max: 650, nextRank: "Echte Vlaming" };
    if (xp < 1200) return { rank: "Echte Vlaming", icon: "🦁", min: 650, max: 1200, nextRank: "Den Burgemeester" };
    return { rank: "Den Burgemeester", icon: "👑", min: 1200, max: 9999, nextRank: "Max Level!" };
  }

  updateStatsUI() {
    const lvl = this.getLevelInfo();
    const rankEl = document.getElementById('user-rank-badge');
    const xpEl = document.getElementById('user-xp-count');
    const streakEl = document.getElementById('user-streak-count');
    const progFill = document.getElementById('user-level-progress');

    if (rankEl) rankEl.innerHTML = `${lvl.icon} ${lvl.rank}`;
    if (xpEl) xpEl.innerText = `${this.state.xp} XP`;
    if (streakEl) streakEl.innerText = `${this.state.streak} dagen`;

    if (progFill) {
      const pct = Math.min(100, Math.max(0, ((this.state.xp - lvl.min) / (lvl.max - lvl.min)) * 100));
      progFill.style.width = `${pct}%`;
    }
  }

  // --- BOOKMARKS & VAULT ---
  getBookmarks() {
    return this.state.bookmarks;
  }

  isWordBookmarked(word) {
    return this.state.bookmarks.some(b => b.word.toLowerCase() === word.toLowerCase());
  }

  toggleBookmark(item) {
    const idx = this.state.bookmarks.findIndex(b => b.word.toLowerCase() === item.word.toLowerCase());
    let added = false;
    if (idx >= 0) {
      this.state.bookmarks.splice(idx, 1);
    } else {
      this.state.bookmarks.push(item);
      added = true;
      this.addXP(10, 'Woord opgeslagen');
    }
    localStorage.setItem('klapke_bookmarks', JSON.stringify(this.state.bookmarks));
    return added;
  }

  // --- THEME ---
  applyTheme(theme) {
    this.state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('klapke_theme', theme);
    const themeBtn = document.getElementById('btn-theme-toggle');
    if (themeBtn) {
      themeBtn.innerText = theme === 'dark' ? '☀️ Licht' : '🌙 Donker';
    }
  }

  toggleTheme() {
    const next = this.state.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme(next);
  }

  // --- NAVIGATION & VIEWS ---
  setupGlobalNav() {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.onclick = (e) => {
        e.preventDefault();
        const view = link.dataset.view;
        this.showView(view);
      };
    });

    const themeToggle = document.getElementById('btn-theme-toggle');
    if (themeToggle) {
      themeToggle.onclick = () => this.toggleTheme();
    }

    const audioToggle = document.getElementById('btn-audio-toggle');
    if (audioToggle) {
      audioToggle.onclick = () => {
        audioController.isMuted = !audioController.isMuted;
        audioToggle.innerText = audioController.isMuted ? '🔇 Gedempt' : '🔊 Geluid Aan';
      };
    }

    const lockBtn = document.getElementById('btn-lock-app');
    if (lockBtn) {
      lockBtn.onclick = () => {
        this.auth.lock();
      };
    }
  }

  showView(viewName, updateHash = true) {
    this.state.activeView = viewName;
    if (updateHash) window.location.hash = viewName;

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.dataset.view === viewName);
    });

    // Hide all view panels
    document.querySelectorAll('.view-panel').forEach(panel => {
      panel.style.display = 'none';
    });

    const target = document.getElementById(`${viewName}-view`);
    if (target) {
      target.style.display = 'block';
    }

    // View specific renders
    if (viewName === 'dashboard') this.renderDashboard();
    if (viewName === 'stories') this.renderStoriesHub();
    if (viewName === 'vault') this.vault.render();
    if (viewName === 'grammar') this.renderGrammarLab();
    if (viewName === 'quiz') this.quiz.render();

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- DASHBOARD VIEW ---
  renderDashboard() {
    const container = document.getElementById('dashboard-view');
    if (!container) return;

    // Daily expression of the day
    const dailyWord = VOCABULARY_DATA[Math.floor(Date.now() / 86400000) % VOCABULARY_DATA.length] || VOCABULARY_DATA[0];
    const lvl = this.getLevelInfo();

    container.innerHTML = `
      <div class="dash-welcome-card">
        <div class="dash-welcome-text">
          <span class="badge badge-accent">Klap Vlaams</span>
          <h1 class="dash-hero-title">Welkom bij <em>Klapke</em></h1>
          <p class="dash-hero-subtitle">Leer authentiek Vlaams met meeslepende verhalen, drama, helden en een klikbare woordenschatvertaler!</p>
          <div class="dash-hero-actions">
            <button class="btn btn-primary btn-lg" id="btn-dash-start-stories">
              📖 Ontdek de ${STORIES_DATA.length} Verhaallijnen
            </button>
            <button class="btn btn-secondary btn-lg" id="btn-dash-open-flashcards">
              ⚡ Oefen Flitskaarten
            </button>
          </div>
        </div>
        <div class="dash-profile-stat-box">
          <div class="dash-level-icon">${lvl.icon}</div>
          <div class="dash-level-title">${lvl.rank}</div>
          <div class="dash-xp-number">${this.state.xp} XP</div>
          <div class="dash-next-rank-text">Volgende rang: ${lvl.nextRank}</div>
          <div class="dash-progress-track">
            <div class="dash-progress-fill" style="width: ${Math.min(100, Math.max(0, ((this.state.xp - lvl.min) / (lvl.max - lvl.min)) * 100))}%;"></div>
          </div>
        </div>
      </div>

      <!-- DAILY FLEMISH WORD OF THE DAY -->
      <div class="daily-word-card">
        <div class="daily-word-header">
          <div>
            <span class="badge badge-primary">Vlaamse Uitdrukking van de Dag</span>
            <h2 class="daily-term">${dailyWord.vlaams}</h2>
          </div>
          <button class="btn-audio-circle" id="btn-speak-daily" title="Beluister">🔊</button>
        </div>
        <div class="daily-word-body">
          <div class="daily-meaning">🇬🇧 <strong>${dailyWord.english}</strong></div>
          <div class="daily-holland">🇳🇱 Hollands Equivalent: <strong>${dailyWord.hollands}</strong></div>
          <p class="daily-notes">${dailyWord.notes}</p>
          <div class="daily-example">
            <em>"${dailyWord.exampleVlaams}"</em>
          </div>
        </div>
      </div>

      <!-- STORY ARCS OVERVIEW -->
      <div class="section-header-row">
        <div>
          <h2 class="section-title">🎭 De ${STORIES_DATA.length} Verhaallijnen & Thema's</h2>
          <p class="section-subtitle">Kies een verhaal om te beginnen met lezen, luisteren en beslissingen nemen.</p>
        </div>
        <button class="btn btn-ghost" id="btn-see-all-stories">Bekijk Alles →</button>
      </div>

      <div class="stories-grid">
        ${STORIES_DATA.map(story => `
          <div class="story-card" style="border-top: 4px solid ${story.accentColor};" data-story-id="${story.id}">
            <div class="story-card-top">
              <span class="story-icon">${story.icon}</span>
              <span class="badge badge-secondary">${story.badge}</span>
            </div>
            <h3 class="story-card-title">${story.title}</h3>
            <p class="story-card-sub">${story.subtitle}</p>
            <div class="story-card-cast">
              <span>Personages:</span>
              <div class="cast-avatars-row">
                ${story.characters.map(c => `<span title="${c.name} (${c.role})">${c.avatar}</span>`).join('')}
              </div>
            </div>
            <div class="story-card-footer">
              <span class="story-time">⏱️ ${story.readingTime}</span>
              <button class="btn btn-primary btn-sm btn-open-story" data-story-id="${story.id}">Lees Verhaal</button>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    // Events
    const startStoriesBtn = container.querySelector('#btn-dash-start-stories');
    const seeAllBtn = container.querySelector('#btn-see-all-stories');
    if (startStoriesBtn) startStoriesBtn.onclick = () => this.showView('stories');
    if (seeAllBtn) seeAllBtn.onclick = () => this.showView('stories');

    const openFcBtn = container.querySelector('#btn-dash-open-flashcards');
    if (openFcBtn) openFcBtn.onclick = () => this.showView('vault');

    const speakDailyBtn = container.querySelector('#btn-speak-daily');
    if (speakDailyBtn) speakDailyBtn.onclick = () => audioController.speak(dailyWord.vlaams);

    container.querySelectorAll('.btn-open-story, .story-card').forEach(el => {
      el.onclick = (e) => {
        e.stopPropagation();
        const storyId = el.dataset.storyId;
        const story = STORIES_DATA.find(s => s.id === storyId);
        if (story) this.openStory(story);
      };
    });
  }

  // --- STORIES HUB VIEW ---
  renderStoriesHub() {
    const container = document.getElementById('stories-view');
    if (!container) return;

    container.innerHTML = `
      <div class="stories-hub-header">
        <h1 class="view-title">📖 Dramatische Verhalen & Dialogen</h1>
        <p class="view-subtitle">Elk verhaal zit boordevol actie, keuzemomenten, audio en een interactieve klikbare woordenschatvertaler.</p>
      </div>

      <div class="stories-grid-large">
        ${STORIES_DATA.map(story => `
          <div class="story-card-detailed" style="border-left: 6px solid ${story.accentColor};">
            <div class="story-detailed-icon" style="background: ${story.themeColor}20;">
              ${story.icon}
            </div>
            <div class="story-detailed-body">
              <div class="story-detailed-tags">
                <span class="badge badge-accent">${story.categoryLabel}</span>
                <span class="badge badge-secondary">${story.badge}</span>
                <span class="story-time">⏱️ ${story.readingTime}</span>
              </div>
              <h2 class="story-detailed-title">${story.title}</h2>
              <p class="story-detailed-sub">${story.subtitle}</p>
              <p class="story-detailed-synopsis">${story.synopsis}</p>
              
              <div class="story-characters-preview">
                <strong>Held & Personages:</strong>
                <div class="char-pills-row">
                  ${story.characters.map(c => `
                    <span class="char-pill" title="${c.description}">
                      ${c.avatar} ${c.name} <em>(${c.role})</em>
                    </span>
                  `).join('')}
                </div>
              </div>

              <div class="story-detailed-actions">
                <button class="btn btn-primary btn-open-story-direct" data-story-id="${story.id}">
                  ▶️ Start Verhaal & Dialoog
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    container.querySelectorAll('.btn-open-story-direct').forEach(btn => {
      btn.onclick = () => {
        const storyId = btn.dataset.storyId;
        const story = STORIES_DATA.find(s => s.id === storyId);
        if (story) this.openStory(story);
      };
    });
  }

  openStory(story) {
    this.showView('story-reader');
    this.reader.loadStory(story, 0);
  }

  startStoryQuiz(story, chapterIndex) {
    this.quiz.startStoryQuiz(story, chapterIndex);
  }

  // --- GRAMMAR LAB: Nederlandse grammatica 1.1 -> 2.3 ---
  renderGrammarLab() {
    const container = document.getElementById('grammar-view');
    if (!container) return;

    const g = GRAMMAR_DATA;
    const md = (s) => (s || '').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    const attr = (s) => (s || '').replace(/"/g, '&quot;');

    const renderExercise = (ex) => `
      <div class="grammar-quiz-item" data-ex-id="${ex.id}">
        <p class="ex-sentence">${ex.sentence}</p>
        <div class="ex-options-row">
          ${ex.options.map(opt => `
            <button class="btn btn-secondary btn-sm btn-grammar-opt"
                    data-opt="${attr(opt)}"
                    data-correct="${attr(ex.correct)}"
                    data-explanation="${attr(ex.explanation)}">${opt}</button>
          `).join('')}
        </div>
        <div class="ex-feedback-box" id="ex-fb-${ex.id}" style="display: none;"></div>
      </div>
    `;

    const renderTopic = (topic, levelId) => `
      <details class="topic-block" data-topic-id="${topic.id}">
        <summary class="topic-summary">
          <span class="topic-name">${topic.title}</span>
          <span class="topic-sub">${topic.subtitle}</span>
          <span class="topic-chevron" aria-hidden="true">›</span>
        </summary>
        <div class="topic-body">
          <p class="topic-intro">${md(topic.intro)}</p>
          <p class="topic-intro-en">${topic.introEn}</p>

          <div class="rule-list">
            ${topic.rules.map(r => `
              <div class="rule-row">
                <div class="rule-head">
                  <span class="rule-name">${r.rule}</span>
                  <span class="rule-en">${r.en}</span>
                </div>
                <div class="rule-detail">${md(r.detail)}</div>
                <div class="rule-examples">${md(r.examples)}</div>
              </div>
            `).join('')}
          </div>

          <div class="grammar-exercise-box">
            <h4>⚡ Oefeningen</h4>
            <div class="exercise-items">
              ${topic.exercises.map(renderExercise).join('')}
            </div>
          </div>
        </div>
      </details>
    `;

    container.innerHTML = `
      <div class="grammar-header">
        <h1 class="view-title">🧩 ${g.intro.title}</h1>
        <p class="view-subtitle">${md(g.intro.description)}</p>
      </div>

      <div class="level-track">
        ${g.levels.map(l => `<a class="level-chip" href="#grammar" data-jump="${l.id}">${l.icon} ${l.label}</a>`).join('')}
      </div>

      <div class="levels-wrap">
        ${g.levels.map((level, i) => `
          <details class="level-block" id="level-${level.id}" data-level-id="${level.id}" ${i === 0 ? 'open' : ''}>
            <summary class="level-summary">
              <span class="level-icon">${level.icon}</span>
              <span class="level-meta">
                <span class="level-label">${level.label}</span>
                <span class="level-cefr">${level.cefr}</span>
              </span>
              <span class="level-summary-text">${level.summary}</span>
              <span class="level-count">${level.topics.length} onderwerpen</span>
            </summary>
            <div class="level-body">
              ${level.topics.map(t => renderTopic(t, level.id)).join('')}
            </div>
          </details>
        `).join('')}
      </div>
    `;

    // Jump links: open the target level and scroll to it
    container.querySelectorAll('.level-chip').forEach(chip => {
      chip.onclick = (e) => {
        e.preventDefault();
        const target = container.querySelector(`#level-${CSS.escape(chip.dataset.jump)}`);
        if (!target) return;
        target.open = true;
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
    });

    // Exercise handlers
    container.querySelectorAll('.btn-grammar-opt').forEach(btn => {
      btn.onclick = () => {
        const parent = btn.closest('.grammar-quiz-item');
        if (parent.dataset.answered === 'true') return;
        parent.dataset.answered = 'true';

        const selected = btn.dataset.opt;
        const correct = btn.dataset.correct;
        const fb = parent.querySelector('.ex-feedback-box');
        const explanation = btn.dataset.explanation ? `<br><small>${btn.dataset.explanation}</small>` : '';

        parent.querySelectorAll('.btn-grammar-opt').forEach(b => {
          b.classList.add('disabled');
          if (b.dataset.opt === correct) b.classList.add('is-correct-answer');
        });

        fb.style.display = 'block';
        if (selected === correct) {
          btn.classList.add('correct');
          audioController.playChime('success');
          this.addXP(15, 'Grammatica juist');
          fb.className = 'ex-feedback-box success-feedback';
          fb.innerHTML = `✅ <strong>Juist!</strong> ${correct} (+15 XP)${explanation}`;
        } else {
          btn.classList.add('incorrect');
          audioController.playChime('error');
          this.addXP(5, 'Grammatica geprobeerd');
          fb.className = 'ex-feedback-box error-feedback';
          fb.innerHTML = `❌ <strong>Niet juist.</strong> Het antwoord is <em>${correct}</em>.${explanation}`;
        }
      };
    });
  }
}

// Initialize on DOM load
window.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
});
