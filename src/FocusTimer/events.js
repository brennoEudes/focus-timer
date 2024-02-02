import { controls } from "./elements.js";
import * as actions from "./actions.js";


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
