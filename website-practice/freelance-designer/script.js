// ハンバーガーメニュー
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// スクロールリベール
const revealTargets = document.querySelectorAll(
  '.about__grid, .work-card, .skill-item, .pricing-card, .stat__item, .section-title, .section-label, .contact__text, .contact__form, .contact__email, .contact__sns'
);

revealTargets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealTargets.forEach(el => observer.observe(el));

// スキルバー アニメーション
const skillFills = document.querySelectorAll('.skill-item__fill');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.width + '%';
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

skillFills.forEach(fill => skillObserver.observe(fill));

// ナビ スクロール時に影を追加
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  nav.style.boxShadow = window.scrollY > 30 ? '0 2px 20px rgba(0,0,0,0.08)' : 'none';
}, { passive: true });

// カウントアップアニメーション
function animateCount(el, target, duration) {
  const start = performance.now();
  (function step(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(eased * target);
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target;
  })(start);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.count').forEach(el => {
        animateCount(el, parseInt(el.textContent, 10), 1800);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const statsGrid = document.querySelector('.stats__grid');
if (statsGrid) statsObserver.observe(statsGrid);

// フォームバリデーション
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setError(inputId, errorId, message) {
  const input = document.getElementById(inputId);
  const errEl = document.getElementById(errorId);
  input.classList.add('error');
  if (message) errEl.textContent = message;
  errEl.classList.add('show');
}

function clearError(inputId, errorId) {
  document.getElementById(inputId).classList.remove('error');
  document.getElementById(errorId).classList.remove('show');
}

['contactName', 'contactEmail', 'contactMessage'].forEach(id => {
  const el = document.getElementById(id);
  if (!el) return;
  const errorMap = { contactName: 'nameError', contactEmail: 'emailError', contactMessage: 'messageError' };
  el.addEventListener('input', () => clearError(id, errorMap[id]));
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    const nameVal = document.getElementById('contactName').value.trim();
    if (!nameVal) { setError('contactName', 'nameError', null); valid = false; }
    else clearError('contactName', 'nameError');

    const emailVal = document.getElementById('contactEmail').value.trim();
    if (!emailVal) {
      setError('contactEmail', 'emailError', 'メールアドレスを入力してください');
      valid = false;
    } else if (!emailRegex.test(emailVal)) {
      setError('contactEmail', 'emailError', '正しいメールアドレスの形式で入力してください');
      valid = false;
    } else clearError('contactEmail', 'emailError');

    const msgVal = document.getElementById('contactMessage').value.trim();
    if (!msgVal) { setError('contactMessage', 'messageError', null); valid = false; }
    else clearError('contactMessage', 'messageError');

    if (valid) {
      const btn = this.querySelector('button[type="submit"]');
      btn.textContent = '送信しました！';
      btn.disabled = true;
      btn.style.background = '#4CAF50';
      btn.style.borderColor = '#4CAF50';
    }
  });
}
