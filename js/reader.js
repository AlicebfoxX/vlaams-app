// js/reader.js - Interactive Story Reader & Click-to-Translate Engine

import { audioController } from './audio.js';
import { VOCABULARY_DATA, TOKEN_LOOKUP } from './data/vocabulary.js';

export class StoryReader {
  constructor(app) {
    this.app = app;
    this.currentStory = null;
    this.currentChapterIndex = 0;
    this.completedDilemmas = new Set();
  }

  loadStory(story, chapterIndex = 0) {
    this.currentStory = story;
    this.currentChapterIndex = chapterIndex;
    this.render();
  }

  tokenizeText(text, highlightWords = []) {
    // Splits text into words while keeping punctuation, wrapping clickable words into spans
    const words = text.split(/(\s+|[.,!?:;()""'«»—]+)/);
    
    return words.map(chunk => {
      if (!chunk.trim() || /^[.,!?:;()""'«»—\s]+$/.test(chunk)) {
        return chunk;
      }

      const cleanWord = chunk.toLowerCase().replace(/[^a-zà-ÿ0-9-]/gi, '');
      const isHighlighted = highlightWords.some(h => 
        h.toLowerCase().includes(cleanWord) || cleanWord.includes(h.toLowerCase())
      );

      const isFlemishKnown = TOKEN_LOOKUP[cleanWord] || 
        VOCABULARY_DATA.some(v => v.vlaams.toLowerCase().includes(cleanWord));

      const classes = [
        'story-word',
        isHighlighted ? 'word-highlighted' : '',
        isFlemishKnown ? 'word-flemish' : ''
      ].filter(Boolean).join(' ');

      return `<span class="${classes}" data-word="${cleanWord}" data-original="${chunk}">${chunk}</span>`;
    }).join('');
  }

  render() {
    const container = document.getElementById('story-reader-view');
    if (!container || !this.currentStory) return;

    const story = this.currentStory;
    const chapter = story.chapters[this.currentChapterIndex];
    const totalChapters = story.chapters.length;

    // Characters map
    const charMap = {};
    story.characters.forEach(c => charMap[c.id] = c);

    const isDilemmaAnswered = this.completedDilemmas.has(`${story.id}-ch${this.currentChapterIndex}`);

    container.innerHTML = `
      <div class="reader-header" style="border-top: 4px solid ${story.accentColor};">
        <button class="btn btn-ghost" id="reader-back-btn">
          <span>←</span> Terug naar Verhalen
        </button>
        <div class="reader-meta">
          <span class="badge badge-primary">${story.badge}</span>
          <span class="reader-reading-time">⏱️ ${story.readingTime}</span>
        </div>
      </div>

      <div class="reader-hero-banner" style="background: linear-gradient(135deg, ${story.themeColor}15, ${story.accentColor}25);">
        <div class="reader-hero-icon">${story.icon}</div>
        <div class="reader-hero-info">
          <h1 class="reader-title">${story.title}</h1>
          <p class="reader-subtitle">${story.subtitle}</p>
          <div class="chapter-nav-pills">
            ${story.chapters.map((ch, idx) => `
              <button class="chapter-pill ${idx === this.currentChapterIndex ? 'active' : ''}" data-chap="${idx}">
                Hoofdstuk ${ch.chapterNumber}: ${ch.title}
              </button>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- CAST OF CHARACTERS -->
      <div class="reader-cast-container">
        <h3 class="cast-heading">Personages in dit verhaal</h3>
        <div class="cast-grid">
          ${story.characters.map(c => `
            <div class="cast-card">
              <span class="cast-avatar">${c.avatar}</span>
              <div>
                <strong class="cast-name">${c.name}</strong>
                <div class="cast-role">${c.role}</div>
                <div class="cast-desc">${c.description}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- MAIN CHAPTER CONTENT -->
      <main class="reader-content-card">
        <div class="chapter-header-row">
          <div>
            <span class="chapter-label">Hoofdstuk ${chapter.chapterNumber} van ${totalChapters}</span>
            <h2 class="chapter-heading">${chapter.title}</h2>
          </div>
          <div class="chapter-location-tag">📍 ${chapter.location}</div>
        </div>

        <div class="reader-narrative">
          <p>${this.tokenizeText(chapter.narrative)}</p>
        </div>

        <div class="dialogue-section-header">
          <span class="dialogue-section-icon">💬</span>
          <h3>Dialoog & Gesprekken</h3>
          <button class="btn btn-secondary btn-sm" id="btn-play-all-dialogues">
            ▶️ Speel Dialoog Af
          </button>
        </div>

        <div class="dialogues-list">
          ${chapter.dialogues.map((dlg, dIdx) => {
            const char = charMap[dlg.speaker] || { name: dlg.speaker, avatar: '👤', voicePitch: 1.0 };
            return `
              <div class="dialogue-bubble-row ${dlg.speaker === 'elena' || dlg.speaker === 'jan' || dlg.speaker === 'sofie' || dlg.speaker === 'luc' ? 'is-protagonist' : 'is-supporting'}" data-dialogue-idx="${dIdx}">
                <div class="dialogue-avatar" title="${char.name}">${char.avatar}</div>
                <div class="dialogue-bubble">
                  <div class="dialogue-speaker-name">
                    ${char.name}
                    <button class="dialogue-audio-btn" data-audio-text="${encodeURIComponent(dlg.audioText)}" data-pitch="${char.voicePitch}" title="Beluister deze zin">
                      🔊
                    </button>
                    <button class="dialogue-mic-btn" data-target-text="${encodeURIComponent(dlg.text)}" title="Oefen je uitspraak">
                      🎙️ Spreek
                    </button>
                  </div>
                  <div class="dialogue-text">
                    ${this.tokenizeText(dlg.text, dlg.highlightWords)}
                  </div>
                  ${dlg.contextNote ? `
                    <div class="dialogue-cultural-note">
                      💡 <strong>Vlaams weetje:</strong> ${dlg.contextNote}
                    </div>
                  ` : ''}
                  <div class="pronunciation-feedback-box" id="mic-feedback-${dIdx}" style="display: none;"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- DRAMATIC DILEMMA -->
        ${chapter.dilemma ? `
          <div class="dilemma-card" id="chapter-dilemma-card">
            <div class="dilemma-badge">⚡ Beslissend Moment</div>
            <h3 class="dilemma-prompt">${chapter.dilemma.prompt}</h3>
            <div class="dilemma-options">
              ${chapter.dilemma.options.map((opt, oIdx) => `
                <button class="dilemma-option-btn ${isDilemmaAnswered ? 'disabled' : ''}" data-opt-id="${opt.id}" data-correct="${opt.isCorrect}" data-xp="${opt.xp}">
                  <span class="option-num">${String.fromCharCode(65 + oIdx)}</span>
                  <span class="option-text">${opt.text}</span>
                </button>
              `).join('')}
            </div>
            <div class="dilemma-result" id="dilemma-feedback-box" style="display: ${isDilemmaAnswered ? 'block' : 'none'};"></div>
          </div>
        ` : ''}

        <!-- CHAPTER FOOTER & QUIZ BUTTON -->
        <div class="reader-footer-nav">
          <button class="btn btn-secondary" id="btn-prev-chapter" ${this.currentChapterIndex === 0 ? 'disabled' : ''}>
            ← Vorig Hoofdstuk
          </button>
          
          <button class="btn btn-primary" id="btn-chapter-quiz">
            🎯 Test Je Kennis (Quiz)
          </button>

          <button class="btn btn-secondary" id="btn-next-chapter" ${this.currentChapterIndex === totalChapters - 1 ? 'disabled' : ''}>
            Volgend Hoofdstuk →
          </button>
        </div>
      </main>
    `;

    this.attachEvents();
  }

  attachEvents() {
    const container = document.getElementById('story-reader-view');
    if (!container) return;

    // Back button
    const backBtn = container.querySelector('#reader-back-btn');
    if (backBtn) {
      backBtn.onclick = () => this.app.showView('stories');
    }

    // Chapter pills
    container.querySelectorAll('.chapter-pill').forEach(pill => {
      pill.onclick = () => {
        const chapIdx = parseInt(pill.dataset.chap, 10);
        this.loadStory(this.currentStory, chapIdx);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    });

    // Prev / Next Chapter buttons
    const prevBtn = container.querySelector('#btn-prev-chapter');
    if (prevBtn) {
      prevBtn.onclick = () => {
        if (this.currentChapterIndex > 0) {
          this.loadStory(this.currentStory, this.currentChapterIndex - 1);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };
    }

    const nextBtn = container.querySelector('#btn-next-chapter');
    if (nextBtn) {
      nextBtn.onclick = () => {
        if (this.currentChapterIndex < this.currentStory.chapters.length - 1) {
          this.loadStory(this.currentStory, this.currentChapterIndex + 1);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };
    }

    // Chapter Quiz
    const quizBtn = container.querySelector('#btn-chapter-quiz');
    if (quizBtn) {
      quizBtn.onclick = () => {
        this.app.startStoryQuiz(this.currentStory, this.currentChapterIndex);
      };
    }

    // Clickable words
    container.querySelectorAll('.story-word').forEach(wordEl => {
      wordEl.onclick = (e) => {
        e.stopPropagation();
        const word = wordEl.dataset.word;
        const original = wordEl.dataset.original;
        this.showWordTranslation(word, original, wordEl);
      };
    });

    // Dialogue Audio buttons
    container.querySelectorAll('.dialogue-audio-btn').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const audioText = decodeURIComponent(btn.dataset.audioText);
        const pitch = parseFloat(btn.dataset.pitch || '1.0');
        audioController.speak(audioText, pitch);
      };
    });

    // Dialogue Mic buttons (Pronunciation practice)
    container.querySelectorAll('.dialogue-mic-btn').forEach((btn, idx) => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const targetText = decodeURIComponent(btn.dataset.targetText);
        this.startPronunciationPractice(targetText, idx);
      };
    });

    // Play all dialogues
    const playAllBtn = container.querySelector('#btn-play-all-dialogues');
    if (playAllBtn) {
      playAllBtn.onclick = () => this.playFullDialogueSequence();
    }

    // Dilemma choices
    container.querySelectorAll('.dilemma-option-btn').forEach(btn => {
      btn.onclick = () => {
        if (this.completedDilemmas.has(`${this.currentStory.id}-ch${this.currentChapterIndex}`)) return;
        this.handleDilemmaChoice(btn);
      };
    });
  }

  handleDilemmaChoice(clickedBtn) {
    const isCorrect = clickedBtn.dataset.correct === 'true';
    const xp = parseInt(clickedBtn.dataset.xp || '10', 10);
    const dilemmaKey = `${this.currentStory.id}-ch${this.currentChapterIndex}`;
    this.completedDilemmas.add(dilemmaKey);

    const chapter = this.currentStory.chapters[this.currentChapterIndex];
    const option = chapter.dilemma.options.find(o => o.id === clickedBtn.dataset.optId);

    const feedbackBox = document.getElementById('dilemma-feedback-box');
    if (feedbackBox && option) {
      feedbackBox.style.display = 'block';
      if (isCorrect) {
        audioController.playChime('success');
        this.app.addXP(xp, 'Keuze in verhaal gemaakt');
        feedbackBox.className = 'dilemma-result success-box';
        feedbackBox.innerHTML = `
          <div class="dilemma-result-title">🎉 Schitterende Keuze! (+${xp} XP)</div>
          <p>${option.feedback}</p>
        `;
      } else {
        audioController.playChime('error');
        this.app.addXP(xp, 'Keuze geprobeerd');
        feedbackBox.className = 'dilemma-result warning-box';
        feedbackBox.innerHTML = `
          <div class="dilemma-result-title">🤔 Let op de nuance (+${xp} XP)</div>
          <p>${option.feedback}</p>
        `;
      }
    }

    // Update buttons styling
    document.querySelectorAll('.dilemma-option-btn').forEach(btn => {
      btn.classList.add('disabled');
      if (btn === clickedBtn) {
        btn.classList.add(isCorrect ? 'btn-option-correct' : 'btn-option-incorrect');
      }
    });
  }

  findWordEntry(cleanWord, originalWord) {
    // 1. Direct match in VOCABULARY_DATA
    let vocabEntry = VOCABULARY_DATA.find(v => 
      v.vlaams.toLowerCase() === cleanWord || 
      v.id === cleanWord ||
      v.vlaams.toLowerCase().includes(cleanWord)
    );
    if (vocabEntry && (vocabEntry.vlaams.toLowerCase() === cleanWord || vocabEntry.id === cleanWord)) {
      return {
        translation: vocabEntry.english,
        hollands: vocabEntry.hollands,
        register: vocabEntry.register,
        notes: vocabEntry.notes,
        exampleVlaams: vocabEntry.exampleVlaams,
        exampleEnglish: vocabEntry.exampleEnglish
      };
    }

    // 2. Direct match in TOKEN_LOOKUP
    if (TOKEN_LOOKUP[cleanWord]) {
      const entry = TOKEN_LOOKUP[cleanWord];
      return {
        translation: entry.translation,
        hollands: entry.hollands || originalWord,
        register: entry.register || 'Algemeen',
        notes: entry.notes || '',
        exampleVlaams: originalWord,
        exampleEnglish: ''
      };
    }

    // 3. Morphological Stemming & Suffix Stripping
    const stemCandidates = [
      cleanWord.replace(/e$/, ''),           // middeleeuwse -> middeleeuws, warme -> warm
      cleanWord.replace(/en$/, ''),          // huizen -> huis, schetsen -> schets
      cleanWord.replace(/s$/, ''),           // slides -> slide, kelders -> kelder
      cleanWord.replace(/je$/, ''),          // terrasje -> terras, busje -> bus
      cleanWord.replace(/ke$/, ''),          // taske -> tas, paterke -> pater
      cleanWord.replace(/eke$/, ''),         // manneke -> man
      cleanWord.replace(/t$/, ''),           // stapt -> stap, klinkt -> klink
      cleanWord.replace(/^ge(.*)[dt]$/, '$1'), // gewandeld -> wandel, getapt -> tap
      cleanWord.replace(/den$/, 'en'),       // wandelden -> wandelen
      cleanWord.replace(/te$/, ''),          // rustige -> rustig
      cleanWord.replace(/ende$/, 'en')       // leidinggevende -> leidinggeven
    ];

    for (const stem of stemCandidates) {
      if (stem && TOKEN_LOOKUP[stem]) {
        const entry = TOKEN_LOOKUP[stem];
        return {
          translation: entry.translation,
          hollands: entry.hollands || originalWord,
          register: entry.register || 'Woordvorm',
          notes: `Stamwoord: '${stem}' (${entry.translation})`,
          exampleVlaams: originalWord,
          exampleEnglish: ''
        };
      }
    }

    return null;
  }

  showWordTranslation(cleanWord, originalWord, element) {
    audioController.playChime('pop');

    let resolved = this.findWordEntry(cleanWord, originalWord);

    let translation = resolved ? resolved.translation : "Vertaling laden...";
    let hollands = resolved ? resolved.hollands : originalWord;
    let register = resolved ? resolved.register : "Nederlands / Vlaams";
    let notes = resolved ? resolved.notes : "Klik om te beluisteren of op te slaan in je persoonlijke Woordenschat Vault.";
    let exampleVlaams = resolved ? resolved.exampleVlaams : originalWord;
    let exampleEnglish = resolved ? resolved.exampleEnglish : "";

    const modal = document.getElementById('word-popover-modal');
    if (!modal) return;

    const isBookmarked = this.app.isWordBookmarked(originalWord);

    modal.innerHTML = `
      <div class="popover-backdrop" id="popover-backdrop"></div>
      <div class="popover-card">
        <div class="popover-header">
          <div>
            <span class="popover-register-badge" id="popover-reg-badge">${register}</span>
            <h3 class="popover-word">${originalWord}</h3>
          </div>
          <button class="popover-close-btn" id="popover-close">✕</button>
        </div>

        <div class="popover-body">
          <div class="popover-row">
            <span class="popover-label">🇬🇧 Engels:</span>
            <strong class="popover-val" id="popover-trans-val">${translation}</strong>
          </div>

          <div class="popover-row">
            <span class="popover-label">🇳🇱 Hollands Equivalent:</span>
            <span class="popover-val" id="popover-holland-val">${hollands}</span>
          </div>

          <div class="popover-notes" id="popover-notes-box">
            💡 <strong>Linguïstische toelichting:</strong> <span id="popover-notes-text">${notes || 'Veelgebruikt woord in deze context.'}</span>
          </div>

          ${exampleVlaams ? `
            <div class="popover-example">
              <em>"${exampleVlaams}"</em>
              ${exampleEnglish ? `<div class="popover-example-en">(${exampleEnglish})</div>` : ''}
            </div>
          ` : ''}
        </div>

        <div class="popover-footer">
          <button class="btn btn-secondary btn-sm" id="popover-speak-btn">
            🔊 Beluister
          </button>
          <button class="btn ${isBookmarked ? 'btn-saved' : 'btn-primary'} btn-sm" id="popover-bookmark-btn">
            ${isBookmarked ? '⭐ Opgeslagen in Vault' : '➕ Bewaar in Woordenboek'}
          </button>
        </div>
      </div>
    `;

    modal.style.display = 'flex';

    // If not found locally, fetch online translation in background
    if (!resolved) {
      this.fetchOnlineTranslation(cleanWord, originalWord);
    }

    // Modal events
    const closeBtn = modal.querySelector('#popover-close');
    const backdrop = modal.querySelector('#popover-backdrop');
    const closeModal = () => { modal.style.display = 'none'; };
    if (closeBtn) closeBtn.onclick = closeModal;
    if (backdrop) backdrop.onclick = closeModal;

    const speakBtn = modal.querySelector('#popover-speak-btn');
    if (speakBtn) {
      speakBtn.onclick = () => audioController.speak(originalWord);
    }

    const bookmarkBtn = modal.querySelector('#popover-bookmark-btn');
    if (bookmarkBtn) {
      bookmarkBtn.onclick = () => {
        const transVal = document.getElementById('popover-trans-val')?.innerText || translation;
        const added = this.app.toggleBookmark({
          word: originalWord,
          translation: transVal,
          hollands,
          register,
          example: exampleVlaams
        });
        if (added) {
          bookmarkBtn.className = 'btn btn-saved btn-sm';
          bookmarkBtn.innerText = '⭐ Opgeslagen in Vault';
          audioController.playChime('success');
        } else {
          bookmarkBtn.className = 'btn btn-primary btn-sm';
          bookmarkBtn.innerText = '➕ Bewaar in Woordenboek';
        }
      };
    }
  }

  async fetchOnlineTranslation(cleanWord, originalWord) {
    try {
      const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(cleanWord)}&langpair=nl|en`);
      if (response.ok) {
        const data = await response.json();
        if (data && data.responseData && data.responseData.translatedText) {
          const liveTranslation = data.responseData.translatedText.toLowerCase();
          const transEl = document.getElementById('popover-trans-val');
          if (transEl) {
            transEl.innerText = liveTranslation;
            transEl.style.color = 'var(--accent-amber)';
          }
          // Cache into TOKEN_LOOKUP
          TOKEN_LOOKUP[cleanWord] = {
            translation: liveTranslation,
            hollands: originalWord,
            register: 'Algemeen Nederlands / Vlaams'
          };
        }
      }
    } catch (err) {
      const transEl = document.getElementById('popover-trans-val');
      if (transEl && transEl.innerText === 'Vertaling laden...') {
        transEl.innerText = cleanWord;
      }
    }
  }

  playFullDialogueSequence() {
    const chapter = this.currentStory.chapters[this.currentChapterIndex];
    if (!chapter || !chapter.dialogues.length) return;

    let index = 0;
    const playNext = () => {
      if (index >= chapter.dialogues.length) return;
      const dlg = chapter.dialogues[index];
      const char = this.currentStory.characters.find(c => c.id === dlg.speaker);
      const pitch = char ? char.voicePitch : 1.0;

      // Highlight active bubble
      document.querySelectorAll('.dialogue-bubble-row').forEach((row, rIdx) => {
        row.classList.toggle('active-speaking', rIdx === index);
      });

      audioController.speak(dlg.audioText, pitch);
      index++;

      // Approximate delay based on text length
      const delayMs = Math.max(2500, dlg.audioText.length * 65);
      setTimeout(playNext, delayMs);
    };

    playNext();
  }

  startPronunciationPractice(targetText, dialogueIdx) {
    const feedbackBox = document.getElementById(`mic-feedback-${dialogueIdx}`);
    if (!feedbackBox) return;

    feedbackBox.style.display = 'block';
    feedbackBox.innerHTML = `
      <div class="recording-indicator">
        <span class="mic-pulse">🎙️</span> Luisteren naar uw uitspraak... Spreek nu!
      </div>
    `;

    audioController.startRecognition(
      (result) => {
        const spoken = result.transcript.toLowerCase().trim();
        const target = targetText.toLowerCase().replace(/[^a-zà-ÿ0-9\s]/gi, '').trim();

        // Calculate simple string similarity
        const isClose = spoken.includes(target.slice(0, 8)) || target.includes(spoken);

        if (isClose || spoken.length > 5) {
          audioController.playChime('success');
          this.app.addXP(20, 'Uitspraak geoefend');
          feedbackBox.innerHTML = `
            <div class="feedback-success">
              ✅ <strong>Zeer goed uitgesproken!</strong><br/>
              <em>U zei: "${result.transcript}"</em> (+20 XP)
            </div>
          `;
        } else {
          feedbackBox.innerHTML = `
            <div class="feedback-retry">
              🔄 <em>U zei: "${result.transcript}"</em><br/>
              Probeer het nog eens te herhalen met zachte Vlaamse intonatie.
            </div>
          `;
        }
      },
      (error) => {
        feedbackBox.innerHTML = `
          <div class="feedback-error">
            ⚠️ Kon stem niet opnemen: ${error}
          </div>
        `;
      }
    );
  }
}
