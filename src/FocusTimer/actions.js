import state from "./state.js";

export function toggleRunning() {
  // console.log("ToggleRunning function!"); // p/ testar se está funcionando

  // altera o estado de running retornando true ou false:
  state.isRunning = document.documentElement.classList.toggle("running");
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
}

export function set() {
  console.log("set");
}

export function toggleMusic() {
  // console.log("toggleMusic function!");
  state.isMute = document.documentElement.classList.toggle("music-on");
}
