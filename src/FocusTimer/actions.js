import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";
import * as sounds from "./sounds.js";

export function toggleRunning() {
  // console.log("ToggleRunning function!"); // p/ testar se está funcionando

  // altera o estado de running retornando true ou false:
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countdown();
  sounds.buttonPressAudio.play(); // add som!
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");

  // atualiza o display p/ não deixar em 0:
  timer.updateDisplay();
  sounds.buttonPressAudio.play();
}

export function set() {
  el.minutes.setAttribute("contenteditable", true);
  el.minutes.focus();
}

export function toggleMusic() {
  // console.log("toggleMusic function!");
  state.isMute = document.documentElement.classList.toggle("music-on");

  if (state.isMute) {
    sounds.bgAudio.play();
    return;
  }

  sounds.bgAudio.pause();
}
