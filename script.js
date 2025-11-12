const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
  body.classList.remove("dark-mode");
  body.classList.add("light-mode");
  themeToggle.textContent = "☀️";
} else {
  body.classList.add("dark-mode");
  themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
  const isLight = body.classList.contains("light-mode");
  themeToggle.textContent = isLight ? "☀️" : "🌙";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY > 50) navbar.classList.add('scrolled'); else navbar.classList.remove('scrolled');
  if (hero) {
    if (scrollY > window.innerHeight * 0.3) hero.classList.add('scrolled'); 
    else hero.classList.remove('scrolled');
  }
});

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const correo = document.getElementById("correo");
const mensaje = document.getElementById("mensaje");
const btnEnviar = document.getElementById("btnEnviar");
const respuesta = document.getElementById("respuesta");

btnEnviar.addEventListener("click", () => {
  if (!nombre.value || !apellido.value || !correo.value || !mensaje.value) {
    respuesta.textContent = "Por favor completa todos los campos.";
    respuesta.style.color = "var(--dark-accent)";
    return;
  }

  const datos = {
    nombre: nombre.value,
    apellido: apellido.value,
    correo: correo.value,
    mensaje: mensaje.value
  };

  console.log("Mensaje enviado:", datos);
  respuesta.textContent = "¡Mensaje enviado correctamente!";
  respuesta.style.color = "var(--dark-accent)";

  nombre.value = "";
  apellido.value = "";
  correo.value = "";
  mensaje.value = "";
});
