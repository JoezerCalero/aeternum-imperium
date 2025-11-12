// script.js

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
