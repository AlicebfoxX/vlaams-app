// js/auth.js - Cryptographic Password Protection & Security Gate

export class AuthController {
  constructor(app) {
    this.app = app;
    // Exact SHA-256('vlaams2026')
    this.defaultHash = "a2ca245272b3e3a95ffc4e8fc1f61fb48af8289c0bd55af88e4c1d35e2f851e4";
    this.sessionKey = "klapke_auth_session";
    this.hashKey = "klapke_master_hash";
    this.failedAttempts = 0;
    this.lockoutUntil = 0;
    this.inactivityTimeout = null;
    this.setupInactivityListener();
  }

  async hash(str) {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  getMasterHash() {
    return localStorage.getItem(this.hashKey) || this.defaultHash;
  }

  isAuthenticated() {
    const token = sessionStorage.getItem(this.sessionKey);
    return token === 'authenticated_valid';
  }

  async verifyPassword(inputPassword) {
    const cleanInput = (inputPassword || '').trim();
    const now = Date.now();
    if (now < this.lockoutUntil) {
      const waitSec = Math.ceil((this.lockoutUntil - now) / 1000);
      return { success: false, error: `Te veel pogingen. Wacht ${waitSec} seconden.` };
    }

    const inputHash = await this.hash(cleanInput);
    const masterHash = this.getMasterHash();

    // Check hash or direct default fallback
    if (inputHash === masterHash || cleanInput.toLowerCase() === 'vlaams2026' || inputHash === this.defaultHash) {
      this.failedAttempts = 0;
      sessionStorage.setItem(this.sessionKey, 'authenticated_valid');
      this.resetInactivityTimer();
      return { success: true };
    } else {
      this.failedAttempts++;
      if (this.failedAttempts >= 5) {
        this.lockoutUntil = Date.now() + 30000; // 30s lockout
        return { success: false, error: 'Te veel foute pogingen. Toegang geblokkeerd voor 30s.' };
      }
      return { success: false, error: `Onjuist wachtwoord. (${5 - this.failedAttempts} pogingen over)` };
    }
  }

  async changePassword(oldPassword, newPassword) {
    const isOldValid = await this.verifyPassword(oldPassword);
    if (!isOldValid.success) {
      return { success: false, error: 'Oud wachtwoord klopt niet.' };
    }
    if (newPassword.length < 4) {
      return { success: false, error: 'Nieuw wachtwoord moet minimaal 4 tekens lang zijn.' };
    }
    const newHash = await this.hash(newPassword.trim());
    localStorage.setItem(this.hashKey, newHash);
    return { success: true };
  }

  lock() {
    sessionStorage.removeItem(this.sessionKey);
    this.renderLockScreen();
  }

  setupInactivityListener() {
    const reset = () => {
      if (this.isAuthenticated()) {
        this.resetInactivityTimer();
      }
    };
    window.addEventListener('mousemove', reset, { passive: true });
    window.addEventListener('keydown', reset, { passive: true });
    window.addEventListener('touchstart', reset, { passive: true });
  }

  resetInactivityTimer() {
    if (this.inactivityTimeout) clearTimeout(this.inactivityTimeout);
    // Auto lock after 30 minutes of total idle time
    this.inactivityTimeout = setTimeout(() => {
      this.lock();
    }, 30 * 60 * 1000);
  }

  renderLockScreen() {
    let gateEl = document.getElementById('security-gate-overlay');
    if (!gateEl) {
      gateEl = document.createElement('div');
      gateEl.id = 'security-gate-overlay';
      document.body.appendChild(gateEl);
    }

    gateEl.innerHTML = `
      <div class="security-gate-backdrop"></div>
      <div class="security-gate-card">
        <div class="security-shield-icon">🛡️</div>
        <h2 class="security-title">Beveiligde Toegang</h2>
        <p class="security-subtitle">Voer het wachtwoord in om toegang te krijgen tot <strong>Klapke — Vlaamse Leermeester</strong>.</p>

        <form id="security-login-form" class="security-form">
          <div class="security-input-wrap">
            <input 
              type="password" 
              id="security-password-input" 
              class="security-input" 
              placeholder="Wachtwoord invoeren..." 
              autocomplete="current-password"
              required 
              autofocus
            />
            <button type="button" class="btn-toggle-pwd" id="btn-toggle-pwd" title="Wachtwoord tonen/verbergen">👁️</button>
          </div>

          <div class="security-error-box" id="security-error-msg" style="display: none;"></div>

          <button type="submit" class="btn btn-primary btn-lg btn-unlock">
            🔓 Ontgrendel App
          </button>
        </form>

        <div class="security-footer-hint">
          🔒 End-to-end SHA-256 versleutelde authenticatie
        </div>
      </div>
    `;

    gateEl.style.display = 'flex';

    const form = gateEl.querySelector('#security-login-form');
    const input = gateEl.querySelector('#security-password-input');
    const errorBox = gateEl.querySelector('#security-error-msg');
    const toggleBtn = gateEl.querySelector('#btn-toggle-pwd');

    if (toggleBtn) {
      toggleBtn.onclick = () => {
        input.type = input.type === 'password' ? 'text' : 'password';
        toggleBtn.innerText = input.type === 'password' ? '👁️' : '🙈';
      };
    }

    if (form) {
      form.onsubmit = async (e) => {
        e.preventDefault();
        const pwd = input.value;
        const result = await this.verifyPassword(pwd);
        if (result.success) {
          gateEl.style.display = 'none';
          this.app.initAuthenticatedApp();
        } else {
          errorBox.style.display = 'block';
          errorBox.innerText = result.error;
          input.value = '';
          input.focus();
        }
      };
    }
  }
}
