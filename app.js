import { emitter } from "./event-emitter.js";
import { DataService } from "./data-service.js";

const state = {
  count: 0,
};

function renderList() {
  // target the log-list class
  // be sure to check for errors
  const log = document.querySelector('#log-list');
  if (!log) {
    return;
  }

  // This code add a new entry to the log card
  // use the <li> tag
  if (state.count >= 1) {
    log.innerHTML += `<li>Count changed to ${state.count}</li>`;
  }
}

function renderProgress() {
  // target the progress-fill class
  // be sure to check for errors
  const progress = document.querySelector('#progress-fill');
  if (!progress) {
    return;
  }

  // This code chages the progress bar. Nothing to do here
  progress.style.width = `${state.count}%`;
}

// Nothing to do here
// All I did was change the name from render() to renderDisplay()
function renderDisplay() {
  const badge = document.querySelector(".badge");
  if (!badge) {
    return;
  }
  badge.textContent = `Count: ${state.count}`;
}

// Update the render() function so that all individual
// component's render function is called
function render() {
  renderList();
  renderProgress();
  renderDisplay();
}

emitter.on("count:changed", (count) => {
  state.count = count;
  render();
});

const button = document.querySelector("#btn-increment");
if (button) {
  button.addEventListener("click", () => {
    DataService.increment();
  });
}
render();
