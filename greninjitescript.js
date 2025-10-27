function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('active');
}

function toggleTheme() {
  const html = document.documentElement;
  const themeIcon = document.getElementById('theme-icon');
  const current = html.getAttribute('data-theme');
  if (current === 'dark') {
    html.removeAttribute('data-theme');
    themeIcon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
  } else {
    html.setAttribute('data-theme', 'dark');
    themeIcon.innerHTML = '<circle cx="12" cy="12" r="5"/>';
  }
}

/* === Image Gallery === */
const gallery = document.querySelector('.infobox-image-gallery');
const images = gallery.querySelectorAll('img');
const caption = document.querySelector('.gallery-caption');
let current = 0;

function showImage(index) {
  images.forEach(img => img.classList.remove('active'));
  current = (index + images.length) % images.length;
  images[current].classList.add('active');
  caption.textContent = images[current].alt;
}

gallery.querySelector('.next').addEventListener('click', () => showImage(current + 1));
gallery.querySelector('.prev').addEventListener('click', () => showImage(current - 1));
