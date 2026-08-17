// js/audio.js - Web Speech & Audio Feedback Controller

class AudioController {
  constructor() {
    this.synth = window.speechSynthesis;
    this.voices = [];
    this.audioCtx = null;
    this.isMuted = false;
    this.speechRate = 0.9; // Slightly slower for language learners
    this.initVoices();

    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = () => this.initVoices();
    }
  }

  initVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices();
  }

  getBestDutchVoice() {
    if (!this.voices.length && this.synth) {
      this.voices = this.synth.getVoices();
    }
    // Try to find nl-BE voice first
    let voice = this.voices.find(v => v.lang === 'nl-BE' || v.lang === 'nl_BE');
    if (!voice) {
      // Fallback to nl-NL or any nl voice
      voice = this.voices.find(v => v.lang.startsWith('nl'));
    }
    return voice || null;
  }

  speak(text, pitch = 1.0, rate = this.speechRate) {
    if (this.isMuted || !this.synth) return;
    this.synth.cancel(); // Stop ongoing speech

    const cleanText = text.replace(/[*_#]/g, '').trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    const voice = this.getBestDutchVoice();

    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    } else {
      utterance.lang = 'nl-BE';
    }

    utterance.pitch = pitch;
    utterance.rate = rate;

    this.synth.speak(utterance);
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
  }

  getAudioContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  playChime(type = 'success') {
    if (this.isMuted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'success') {
      // Warm chord / arpeggio
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.12);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.25);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
      osc.start(now);
      osc.stop(now + 0.45);
    } else if (type === 'levelup') {
      // Fanfare
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = 'sine';
        o.frequency.value = freq;
        o.connect(g);
        g.connect(ctx.destination);
        g.gain.setValueAtTime(0.15, now + i * 0.08);
        g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.3);
        o.start(now + i * 0.08);
        o.stop(now + i * 0.08 + 0.3);
      });
    } else if (type === 'pop') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(900, now + 0.08);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      osc.start(now);
      osc.stop(now + 0.1);
    } else if (type === 'error') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.linearRampToValueAtTime(160, now + 0.2);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    }
  }

  // Speech Recognition (STT) for pronunciation evaluation
  startRecognition(onResult, onError) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      onError('Spraakherkenning wordt niet ondersteund in deze browser (probeer Chrome of Edge).');
      return null;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'nl-BE';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      const confidence = event.results[0][0].confidence;
      onResult({ transcript, confidence });
    };

    recognition.onerror = (event) => {
      onError(event.error);
    };

    try {
      recognition.start();
    } catch (e) {
      onError(e.message);
    }
    return recognition;
  }
}

export const audioController = new AudioController();
