function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}

function toggleDarkMode() {
  const body = document.body;
  const toggleBtn = document.querySelector('.dark-mode-toggle');

  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
    toggleBtn.textContent = '☀️'; 
  } else {
    localStorage.setItem('darkMode', 'disabled');
    toggleBtn.textContent = '🌙'; 
  }

  toggleBtn.classList.add('toggle-animate');
  setTimeout(() => {
    toggleBtn.classList.remove('toggle-animate');
  }, 300);
}

window.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.dark-mode-toggle');
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️';
  } else {
    toggleBtn.textContent = '🌙';
  }
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const message = this.querySelector('textarea').value;

  alert(`Thank you, ${name}! Your message has been received.`);

  this.reset();
});
