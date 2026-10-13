const menuButton = document.querySelector('[data-menu-button]');
const nav = document.querySelector('[data-nav]');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Открыть меню' : 'Закрыть меню');
    nav.classList.toggle('is-open', !isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Открыть меню');
      nav.classList.remove('is-open');
    });
  });
}

const dialog = document.getElementById('project-dialog');
const dialogOpen = document.querySelector('[data-dialog-open]');
const dialogClose = document.querySelector('[data-dialog-close]');
const dialogLink = document.querySelector('[data-dialog-link]');

if (dialog && dialogOpen && dialogClose) {
  dialogOpen.addEventListener('click', () => dialog.showModal());
  dialogClose.addEventListener('click', () => dialog.close());
  dialogLink?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Intl.DateTimeFormat('ru', { year: 'numeric' }).format(new Date());
