import { initialize } from '../index.js';

const $container = document.querySelector('.container');
const $themeToggle = $container.querySelector('.theme-toggle');
const $mainLogo = $container.querySelector('img.main-logo');

export default (function () {
  $mainLogo.onclick = initialize;
  let toggled = false;
  const onThemeToggle = () => {
    if (toggled) {
      $container.classList.remove('dark');
    } else {
      $container.classList.add('dark');
    }
    toggled = !toggled;
  };
  $themeToggle.addEventListener('click', onThemeToggle);
})();
