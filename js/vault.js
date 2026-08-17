// js/vault.js - Vocabulary Vault & Interactive Spaced Repetition Flashcards

import { audioController } from './audio.js';
import { VOCABULARY_DATA } from './data/vocabulary.js';

export class VaultManager {
  constructor(app) {
    this.app = app;
    this.activeDeck = 'all';
    this.currentCardIndex = 0;
    this.isFlipped = false;
    this.deckCards = [];
  }

  render() {
    const container = document.getElementById('vault-view');
    if (!container) return;

    const userBookmarks = this.app.getBookmarks();
    
    // Combine built-in vocabulary with user bookmarks
    let allWords = [...VOCABULARY_DATA];
    userBookmarks.forEach(bm => {
      if (!allWords.some(w => w.vlaams.toLowerCase() === bm.word.toLowerCase())) {
        allWords.push({
          id: `bm-${Date.now()}-${Math.random()}`,
          vlaams: bm.word,
          hollands: bm.hollands || bm.word,
          english: bm.translation || 'User saved word',
          register: bm.register || 'Opgeslagen',
          category: 'saved',
          exampleVlaams: bm.example || '',
          exampleEnglish: '',
          notes: 'Opgeslagen vanuit een verhaal.',
          isUserSaved: true
        });
      }
    });

    container.innerHTML = `
      <div class="vault-header">
        <div>
          <h1 class="view-title">📚 Woordenschat Vault & Flitskaarten</h1>
          <p class="view-subtitle">Beheer je opgeslagen Vlaamse woorden en oefen ze met interactieve flitskaarten.</p>
        </div>
        <button class="btn btn-primary" id="btn-start-flashcards">
          ⚡ Start Flitskaarten Training
        </button>
      </div>

      <!-- CATEGORY TABS -->
      <div class="vault-filter-bar">
        <button class="vault-tab-btn active" data-cat="all">Alle Woorden (${allWords.length})</button>
        <button class="vault-tab-btn" data-cat="tourism">🏰 Toerisme & Kunst</button>
        <button class="vault-tab-btn" data-cat="beer">🍺 Bier & Café</button>
        <button class="vault-tab-btn" data-cat="career">💼 Werk & Carrière</button>
        <button class="vault-tab-btn" data-cat="tech_ai">🤖 AI & Nieuwe Orde</button>
        <button class="vault-tab-btn" data-cat="saved">⭐ Mijn Opgeslagen (${userBookmarks.length})</button>
      </div>

      <div class="vault-search-row">
        <input type="text" class="input-search" id="vault-search-input" placeholder="Zoek op Vlaams woord, Hollands equivalent of Engels..." />
      </div>

      <!-- FLASHCARD MODAL / OVERLAY (HIDDEN BY DEFAULT) -->
      <div id="flashcard-trainer-modal" class="flashcard-modal" style="display: none;">
        <div class="flashcard-modal-content">
          <div class="flashcard-modal-header">
            <span class="card-progress-counter" id="card-counter">Kaart 1 van 10</span>
            <button class="btn-close-modal" id="btn-close-flashcards">✕</button>
          </div>

          <div class="flashcard-arena">
            <div class="flashcard-3d" id="active-flashcard">
              <!-- FRONT -->
              <div class="flashcard-face flashcard-front">
                <span class="flashcard-badge" id="fc-front-badge">Typisch Vlaams</span>
                <h2 class="flashcard-term" id="fc-front-term">een tas koffie</h2>
                <p class="flashcard-hint">Klik of druk op spatiebalk om om te draaien</p>
                <button class="btn-audio-circle" id="fc-audio-btn" title="Beluister">🔊</button>
              </div>

              <!-- BACK -->
              <div class="flashcard-face flashcard-back">
                <span class="flashcard-badge-back">Vertaling & Context</span>
                <div class="fc-back-meaning" id="fc-back-english">a cup of coffee</div>
                <div class="fc-back-holland">🇳🇱 Hollands: <strong id="fc-back-hollands">een kopje koffie</strong></div>
                <div class="fc-back-notes" id="fc-back-notes">In Flanders, 'tas' is a cup. In NL it means bag!</div>
                <div class="fc-back-example" id="fc-back-example">"Wilt ge een tas koffie?"</div>
              </div>
            </div>
          </div>

          <div class="flashcard-controls">
            <button class="btn btn-secondary" id="fc-btn-flip">🔄 Draai Om (Spatie)</button>
            <div class="flashcard-rating-buttons" id="fc-rating-row" style="display: none;">
              <button class="btn btn-rating btn-hard" data-difficulty="hard">Moeilijk (+5 XP)</button>
              <button class="btn btn-rating btn-good" data-difficulty="good">Goed (+10 XP)</button>
              <button class="btn btn-rating btn-easy" data-difficulty="easy">Makkelijk (+15 XP)</button>
            </div>
          </div>
        </div>
      </div>

      <!-- VOCABULARY WORD GRID -->
      <div class="vocab-cards-grid" id="vocab-cards-grid">
        ${this.renderWordCards(allWords)}
      </div>
    `;

    this.attachEvents(allWords);
  }

  renderWordCards(words) {
    if (!words.length) {
      return `
        <div class="vault-empty-state">
          <div class="empty-icon">📭</div>
          <h3>Geen woorden gevonden</h3>
          <p>Klik op woorden in de verhalen om ze automatisch hier op te slaan!</p>
        </div>
      `;
    }

    return words.map(w => {
      const isBookmarked = this.app.isWordBookmarked(w.vlaams);
      return `
        <div class="vocab-card" data-cat="${w.category}">
          <div class="vocab-card-header">
            <span class="badge badge-secondary">${w.register}</span>
            <button class="btn-bookmark-star ${isBookmarked ? 'active' : ''}" data-word="${w.vlaams}" title="Opslaan / Verwijderen">
              ${isBookmarked ? '★' : '☆'}
            </button>
          </div>
          <div class="vocab-card-body">
            <div class="vocab-term-row">
              <h3 class="vocab-term">${w.vlaams}</h3>
              <button class="btn-speak-word" data-word="${w.vlaams}" title="Beluister">🔊</button>
            </div>
            <div class="vocab-trans-en">🇬🇧 ${w.english}</div>
            <div class="vocab-trans-nl">🇳🇱 Hollands: <strong>${w.hollands}</strong></div>
            ${w.exampleVlaams ? `
              <div class="vocab-example">
                <em>"${w.exampleVlaams}"</em>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');
  }

  attachEvents(allWords) {
    const container = document.getElementById('vault-view');
    if (!container) return;

    // Filter tabs
    container.querySelectorAll('.vault-tab-btn').forEach(btn => {
      btn.onclick = () => {
        container.querySelectorAll('.vault-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.cat;
        this.activeDeck = cat;

        let filtered = allWords;
        if (cat === 'saved') {
          filtered = allWords.filter(w => this.app.isWordBookmarked(w.vlaams) || w.isUserSaved);
        } else if (cat !== 'all') {
          filtered = allWords.filter(w => w.category === cat);
        }

        const grid = container.querySelector('#vocab-cards-grid');
        if (grid) grid.innerHTML = this.renderWordCards(filtered);
        this.attachWordCardEvents();
      };
    });

    // Search filter
    const searchInput = container.querySelector('#vault-search-input');
    if (searchInput) {
      searchInput.oninput = (e) => {
        const query = e.target.value.toLowerCase().trim();
        const filtered = allWords.filter(w => 
          w.vlaams.toLowerCase().includes(query) ||
          w.hollands.toLowerCase().includes(query) ||
          w.english.toLowerCase().includes(query)
        );
        const grid = container.querySelector('#vocab-cards-grid');
        if (grid) grid.innerHTML = this.renderWordCards(filtered);
        this.attachWordCardEvents();
      };
    }

    // Start flashcards button
    const startFcBtn = container.querySelector('#btn-start-flashcards');
    if (startFcBtn) {
      startFcBtn.onclick = () => {
        let deck = allWords;
        if (this.activeDeck === 'saved') {
          deck = allWords.filter(w => this.app.isWordBookmarked(w.vlaams) || w.isUserSaved);
        } else if (this.activeDeck !== 'all') {
          deck = allWords.filter(w => w.category === this.activeDeck);
        }
        if (!deck.length) deck = VOCABULARY_DATA;
        this.startFlashcardSession(deck);
      };
    }

    this.attachWordCardEvents();
  }

  attachWordCardEvents() {
    const container = document.getElementById('vault-view');
    if (!container) return;

    container.querySelectorAll('.btn-speak-word').forEach(btn => {
      btn.onclick = () => {
        audioController.speak(btn.dataset.word);
      };
    });

    container.querySelectorAll('.btn-bookmark-star').forEach(btn => {
      btn.onclick = () => {
        const word = btn.dataset.word;
        const added = this.app.toggleBookmark({ word });
        btn.classList.toggle('active', added);
        btn.innerText = added ? '★' : '☆';
      };
    });
  }

  startFlashcardSession(cards) {
    this.deckCards = [...cards];
    this.currentCardIndex = 0;
    this.isFlipped = false;

    const modal = document.getElementById('flashcard-trainer-modal');
    if (!modal) return;
    modal.style.display = 'flex';

    this.renderCurrentFlashcard();

    const closeBtn = modal.querySelector('#btn-close-flashcards');
    if (closeBtn) {
      closeBtn.onclick = () => {
        modal.style.display = 'none';
      };
    }

    const flipBtn = modal.querySelector('#fc-btn-flip');
    const cardEl = modal.querySelector('#active-flashcard');

    const flipCard = () => {
      this.isFlipped = !this.isFlipped;
      cardEl.classList.toggle('is-flipped', this.isFlipped);
      const ratingRow = modal.querySelector('#fc-rating-row');
      if (ratingRow) ratingRow.style.display = this.isFlipped ? 'flex' : 'none';
    };

    if (flipBtn) flipBtn.onclick = flipCard;
    if (cardEl) cardEl.onclick = flipCard;

    // Rating buttons
    modal.querySelectorAll('.btn-rating').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const diff = btn.dataset.difficulty;
        let xp = 10;
        if (diff === 'easy') xp = 15;
        if (diff === 'hard') xp = 5;

        audioController.playChime('success');
        this.app.addXP(xp, 'Flitskaart geoefend');

        this.currentCardIndex++;
        if (this.currentCardIndex >= this.deckCards.length) {
          audioController.playChime('levelup');
          alert(`🎉 Gefeliciteerd! Je hebt alle ${this.deckCards.length} flitskaarten geoefend!`);
          modal.style.display = 'none';
        } else {
          this.isFlipped = false;
          cardEl.classList.remove('is-flipped');
          const ratingRow = modal.querySelector('#fc-rating-row');
          if (ratingRow) ratingRow.style.display = 'none';
          this.renderCurrentFlashcard();
        }
      };
    });
  }

  renderCurrentFlashcard() {
    const card = this.deckCards[this.currentCardIndex];
    if (!card) return;

    const counterEl = document.getElementById('card-counter');
    if (counterEl) {
      counterEl.innerText = `Kaart ${this.currentCardIndex + 1} van ${this.deckCards.length}`;
    }

    document.getElementById('fc-front-badge').innerText = card.register || 'Vlaams';
    document.getElementById('fc-front-term').innerText = card.vlaams;
    document.getElementById('fc-back-english').innerText = card.english;
    document.getElementById('fc-back-hollands').innerText = card.hollands;
    document.getElementById('fc-back-notes').innerText = card.notes || '';
    document.getElementById('fc-back-example').innerText = card.exampleVlaams ? `"${card.exampleVlaams}"` : '';

    const audioBtn = document.getElementById('fc-audio-btn');
    if (audioBtn) {
      audioBtn.onclick = (e) => {
        e.stopPropagation();
        audioController.speak(card.vlaams);
      };
    }
  }
}
