import { state } from '../../store.js';
import JobCard from './JobCard.js';

const CardList = () => {
  const $cardList = document.createElement('ul');
  $cardList.classList.add('item-list');
  renderCardList($cardList);
  return $cardList;
};

export function sliceData() {
  const currData = state.data.unrendered.splice(0, 12);
  state.data.rendered = state.data.rendered.concat(currData);

  if (state.data.unrendered.length === 0) {
    state.data.noMoreData = true;
    const $mainContainer = document.querySelector('div.main-container');
    const $loadMoreBtn = $mainContainer.querySelector('button.load-more');
    $mainContainer.removeChild($loadMoreBtn);
  }
  return currData;
}

export function renderCardList($cardList) {
  const currData = sliceData();
  currData.forEach((item) => $cardList.appendChild(JobCard(item)));
}

export default CardList;
