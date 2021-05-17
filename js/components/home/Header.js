import { fetchData } from '../../lib/utils.js';
import { renderCardList } from './CardList.js';
import { state } from '../../store.js';

const Header = ($cardList) => {
  const $mainHeader = document.createElement('div');
  $mainHeader.classList.add('main-header', 'inner');
  $mainHeader.innerHTML = `
    <form class="search-form" action="">
      <div class="filter filter-title">
        <img src="assets/desktop/icon-search.svg" alt="search" />
        <input
          type="text"
          placeholder="Filter by title, companies, expertise"
        />
      </div>
      <div class="filter filter-location">
        <img src="assets/desktop/icon-location.svg" alt="location" />
        <input type="text" placeholder="Filter by location" />
      </div>
      <div class="toggle-full-time">
        <input type="checkbox" />
        <p>Full Time Only</p>
      </div>
      <button class="search button1">Search</button>
    </form>
  `;

  const $titleFilter = $mainHeader.querySelector('.filter-title > input');
  const $locationFilter = $mainHeader.querySelector('.filter-location > input');
  const $fullTimeToggle = $mainHeader.querySelector(
    '.toggle-full-time > input'
  );
  const $searchBtn = $mainHeader.querySelector('button.search');

  $searchBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    state.query.description = $titleFilter.value;
    state.query.location = $locationFilter.value;
    state.query.fillTime = $fullTimeToggle.checked ? 'on' : '';

    await fetchData(true);
    $cardList.innerHTML = '';
    renderCardList($cardList);
  });

  return $mainHeader;
};

export default Header;
