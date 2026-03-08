const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('portfolio-theme');

if (savedTheme === 'light') {
  document.body.classList.add('light');
  themeToggle.textContent = '🌙';
} else {
  themeToggle.textContent = '☀️';
}

themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
  themeToggle.textContent = isLight ? '🌙' : '☀️';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
});

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
