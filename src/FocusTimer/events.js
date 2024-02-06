import state from "./state.js";
import { controls } from "./elements.js";
import * as actions from "./actions.js";
import * as el from "./elements.js";
import { updateDisplay } from "./timer.js";

// Conexão das ações:
export function registerControls() {
  // capturando cliques:
  controls.addEventListener("click", (event) => {
    // console.log(event.target.dataset.action) // testa se pegamos cliques e ações nos btns com eventos!

    const action = event.target.dataset.action; // vai lá dentro do html até depois do traçinho (-)

    // verifica se a ação existe:
    if (typeof actions[action] !== "function") {
      return;
    }
    //console.log(actions.toggleRunning());

    // IMPORTANTE: uma outra forma de executar fcn!
    actions[action]();
  });
}

export function setMinutes() {
  el.minutes.addEventListener("focus", () => {
    el.minutes.textContent = ""; // esvazia o campo minutes após o clique.
  });

  el.minutes.onkeypress = (event) => /\d/.test(event.key); // EXPRESSÃO REGULAR (avançado). É uma forma de verificar caracteres. No caso, verifica se não é nº e devolve "false".

  el.minutes.addEventListener("blur", (event) => {
    let time = event.currentTarget.textContent; // pegando o texto do evento
    time = time > 60 ? 60 : time; // verifica se está maior que 60. Se >, 60, se menor, o nº selecionado.

    state.minutes = time; // atualiza o estado com time!
    state.seconds = 0; // Quando ocorre a atualização do minutes, zeramos o seconds. Não permitimos a edição do seconds.

    updateDisplay(); // atualiza display
    el.minutes.removeAttribute("contenteditable");
  });
}
