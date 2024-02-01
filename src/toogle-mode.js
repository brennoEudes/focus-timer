let darkMode = true;
const buttonToggle = document.getElementById("toggle-mode");

buttonToggle.addEventListener("click", (event) => {
    // alteração de classe no html:
  document.documentElement.classList.toggle("light"); // documentElement é o HTML; Add ou remove class light.

  // alteração de txt p/ acessibilidade:
  const mode = darkMode ? "light" : "dark";

  event.currentTarget // currentTarget é o btn!
    .querySelector("span").textContent = `${mode} mode on`;

  darkMode = !darkMode; // atualiza darkMode p/ o modo contrário
});
