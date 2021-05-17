import './components/themeToggle.js';
import { initializeState } from './store.js';
import { fetchData } from './lib/utils.js';
import Home from './page/home.js';

const $main = document.querySelector('main');

window.onload = async () => {
  await initialize();
};

export async function initialize() {
  initializeState();
  await fetchData();
  $main.innerHTML = '';
  $main.appendChild(Home());
}
