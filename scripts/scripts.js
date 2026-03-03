document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("mobile-menu");
  const nav = document.querySelector(".navbar-list");

  // Acessibilidade: iniciar como fechado
  btn.setAttribute("aria-expanded", "false");

  // constants for icons
  const menuIcon = "☰";
  const closeIcon = "✖"; // ou 'X'
  // garante que o botão comece com o ícone de menu
  btn.textContent = menuIcon;

  btn.addEventListener("click", () => {
    const opened = nav.classList.toggle("active");
    btn.setAttribute("aria-expanded", opened ? "true" : "false");
    // trocar ícone conforme estado
    btn.textContent = opened ? closeIcon : menuIcon;
    // adiciona/remova classe para ativar transição
    btn.classList.toggle("open", opened);
  });

  // Fecha o menu ao clicar em um link (útil em mobile)
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      btn.setAttribute("aria-expanded", "false");
      btn.textContent = menuIcon; // volta ao ícone de menu
      btn.classList.remove("open");
    });
  });

  // Garante que o menu seja fechado ao redimensionar para desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      nav.classList.remove("active");
      btn.setAttribute("aria-expanded", "false");
      btn.textContent = menuIcon;
      btn.classList.remove("open");
    }
  });
});

