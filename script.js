// =============================
// MODO OSCURO/CLARO
// =============================
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Cargar modo guardado
if (localStorage.getItem("theme") === "light") {
  body.classList.remove("dark-mode");
  body.classList.add("light-mode");
  themeToggle.textContent = "☀️";
} else {
  body.classList.add("dark-mode");
  themeToggle.textContent = "🌙";
}

// Alternar tema
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  const isLight = body.classList.contains("light-mode");
  themeToggle.textContent = isLight ? "☀️" : "🌙";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// =============================
// SCROLL HERO + NAVBAR
// =============================
const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Navbar se vuelve sólida al hacer scroll
  if (scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Imagen del hero desaparece progresivamente
  if (scrollY > window.innerHeight * 0.3) {
    hero.classList.add('scrolled');
  } else {
    hero.classList.remove('scrolled');
  }
});
