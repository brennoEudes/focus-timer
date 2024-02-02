import state from "./state.js";
import * as el from "./elements.js";

// Atualizando valores do contador:
export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes; // nullish coalescing operator: verifica se o elemento é null!
  seconds = seconds ?? state.seconds;

  // atualiza min e sec c/ os elementos passados acima:
  el.minutes.textContent = String(minutes).padStart(2 , "0"); // transforma em string e usa uma método string p/ definir o nº caracteres e o caracter inicial!
  el.seconds.textContent = String(seconds).padStart(2, "0");
}
