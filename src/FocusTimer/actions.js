import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";

export function toggleRunning() {
  // console.log("ToggleRunning function!"); // p/ testar se está funcionando

  // altera o estado de running retornando true ou false:
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countdown();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");

  // atualiza o display p/ não deixar em 0:
  timer.updateDisplay();
}

export function set() {
  el.minutes.setAttribute("contenteditable", true);
  el.minutes.focus()
}

export function toggleMusic() {
  // console.log("toggleMusic function!");
  state.isMute = document.documentElement.classList.toggle("music-on");
}
