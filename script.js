// Open all publication links in a new tab
document.querySelectorAll('a.pub-link, .pub-title a').forEach(link => {
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});

// Move each .pub-abstract outside its .pub-item so it renders free of the left border
document.querySelectorAll('.pub-item').forEach(item => {
  const abstract = item.querySelector('.pub-abstract');
  if (abstract) item.after(abstract);
});

// Abstract toggles
document.querySelectorAll('.pub-abstract-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.pub-item');
    const abstract = item.nextElementSibling.classList.contains('pub-abstract')
      ? item.nextElementSibling
      : null;
    if (!abstract) return;
    const open = abstract.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.textContent = open ? 'Close' : 'Abstract';
  });
});

const navLinks = document.querySelectorAll('.nav-link');
const panels   = document.querySelectorAll('.tab-panel');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const target = link.dataset.tab;

    navLinks.forEach(l => l.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));

    link.classList.add('active');
    document.getElementById(target).classList.add('active');

    // Update URL hash without jumping
    history.replaceState(null, '', '#' + target);
  });
});

// Load from hash on page load
const hash = location.hash.replace('#', '');
if (hash) {
  const link = document.querySelector(`.nav-link[data-tab="${hash}"]`);
  if (link) link.click();
}
