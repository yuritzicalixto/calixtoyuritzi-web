// Toggle menú móvil + icono hamburguesa ↔ X
    function toggleMenu() {
      const menu = document.getElementById("nav-mobile");
      const hamburger = document.getElementById("hamburger");

      if (menu.style.display === "flex") {
        menu.style.display = "none";
        hamburger.classList.remove("active");
      } else {
        menu.style.display = "flex";
        hamburger.classList.add("active");
      }
    }


// CONTACTO
const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('✅ Message sent successfully!');
  form.reset();
});
