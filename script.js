const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const form = document.getElementById("contactForm");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

document.querySelectorAll(".quote-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const requestedService = button.dataset.service;
    const serviceSelect = document.getElementById("service");
    serviceSelect.value = requestedService;
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  const text = [
    "Hola Rose's Digital Solutions, deseo solicitar una cotización.",
    "",
    `Nombre: ${name}`,
    `Teléfono: ${phone}`,
    `Correo: ${email}`,
    `Servicio: ${service}`,
    "",
    `Detalles del proyecto: ${message}`
  ].join("\n");

  const whatsappNumber = "50769209950";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  window.open(whatsappUrl, "_blank");
});

document.getElementById("year").textContent = new Date().getFullYear();
