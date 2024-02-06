import state from "./state.js";
import * as el from "./elements.js";
import { reset } from "./actions.js";
import { kitchenTimer } from "./sounds.js";

export function countdown() {
  clearTimeout(state.countdownId); // limpa o state do countdownId p/ evitar o acúmulo do setTimeOut.

  if (!state.isRunning) {
    return;
  }

  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  // tira 1s imediatamente:
  seconds--;

  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }

  if (minutes < 0) {
    reset();
    kitchenTimer.play();
    return;
  }

  updateDisplay(minutes, seconds);

  // setTimeout: método que executa uma fcn depois de um tempo (ms):
  state.countdownId = setTimeout(() => countdown(), 1000); // RECURSÃO: quando uma fcn chama ela msm! Precisa ser parada em algum mommento para não dar problema no código!
}

// Atualizando valores do contador:
export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes; // nullish coalescing operator: verifica se o elemento é null!
  seconds = seconds ?? state.seconds;

  // atualiza min e sec c/ os elementos passados acima:
  el.minutes.textContent = String(minutes).padStart(2, "0"); // transforma em string e usa uma método string p/ definir o nº caracteres e o caracter inicial!
  el.seconds.textContent = String(seconds).padStart(2, "0");
}
