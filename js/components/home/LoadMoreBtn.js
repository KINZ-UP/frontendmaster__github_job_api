import { state } from '../../store.js';
import JobCard from './JobCard.js';
import { sliceData } from './CardList.js';
import { fetchJobList } from '../../lib/utils.js';

const LoadMoreBtn = ($cardList) => {
  if (state.noMoreData) return;

  const $loadMoreBtn = document.createElement('button');
  $loadMoreBtn.classList.add('load-more', 'button1');
  $loadMoreBtn.innerText = 'Load More';

  const onLoadMore = async () => {
    if (!state.data.noMoreFetch && state.data.unrendered.length < 12) {
      const page = ++state.query.page;
      await fetchJobList({ page });
    }
    const currData = sliceData();
    currData.forEach((item) => {
      $cardList.appendChild(JobCard(item));
    });
  };

  $loadMoreBtn.addEventListener('click', onLoadMore);

  return $loadMoreBtn;
};

export default LoadMoreBtn;
