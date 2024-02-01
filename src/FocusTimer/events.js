import { controls } from "./elements.js";

export function registerControls() {
  controls.addEventListener("click", (event) => {
    // console.log(event.target.dataset.action) // testa se pegamos cliques e ações nos btns com eventos!

    const action = event.target.dataset.action; // vai lá dentro do html até depois do traçinho (-)

    if (action === undefined) {
      return;
    }
    console.log(action);
  });
}
