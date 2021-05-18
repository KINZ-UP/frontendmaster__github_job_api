import './components/themeToggle.js';
import { initializeState } from './store.js';
import { fetchJobList } from './lib/utils.js';
import Home from './page/home.js';
import Detail from './page/detail.js';

const $main = document.querySelector('main');

window.onload = async () => {
  await initialize();
};

export async function initialize() {
  initializeState();
  $main.innerHTML = '';

  const hash = location.hash.substr(1);
  if (hash === '') {
    await fetchJobList();
    $main.appendChild(Home());
    return;
  }

  const $detail = await Detail();
  $main.appendChild($detail);
}

window.onhashchange = () => {
  initialize();
  // const hash = location.hash.substr(1);
  // console.log(hash);
  // if (hash === '') {
  //   initialize();
  //   return;
  // }

  // $main.innerHTML = '';
  // $main.appendChild(Detail());
};
