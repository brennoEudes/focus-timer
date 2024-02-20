let darkMode = true;
const buttonToggle = document.getElementById("toggle-mode");
const footerLink = document.querySelector("footer a");

buttonToggle.addEventListener("click", (event) => {
  // alteração de classe no html:
  document.documentElement.classList.toggle("light"); // documentElement é o HTML; Add ou remove class light.

  // alteração de txt p/ acessibilidade:
  const mode = darkMode ? "light" : "dark";

  // Alteração da cor do texto do link no footer
  if (document.documentElement.classList.contains("light")) {
    footerLink.style.color = "black"; // Altere a cor como desejar
  } else {
    footerLink.style.color = "inherit"; // Retorna à cor padrão do CSS
  }

  event.currentTarget // currentTarget é o btn!
    .querySelector("span").textContent = `${mode} mode on`;

  darkMode = !darkMode; // atualiza darkMode p/ o modo contrário
});
