import Header from '../components/home/Header.js';
import CardList from '../components/home/CardList.js';
import LoadMoreBtn from '../components/home/LoadMoreBtn.js';

const Home = () => {
  const $home = document.createElement('div');
  $home.classList.add('main-container', 'inner');

  const $cardList = CardList();
  const $header = Header($cardList);
  const $loadMoreBtn = LoadMoreBtn($cardList, $home);

  $home.appendChild($header);
  $home.appendChild($cardList);
  $home.appendChild($loadMoreBtn);

  return $home;
};

export default Home;
