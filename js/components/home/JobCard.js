import { timeSince } from '../../lib/utils.js';

const JobCard = (item) => {
  const {
    id,
    title,
    company,
    company_logo,
    company_url,
    created_at,
    type,
    location,
  } = item;

  const $jobCard = document.createElement('li');
  $jobCard.classList.add('item-card');
  $jobCard.innerHTML = `
    <a href="${company_url}" >
      <img class="company-logo" src="${company_logo}" alt='LOGO' />
    </a>
    <p class="created_and_type">${timeSince(created_at)} &#183; ${type}</p>
    <a href="#${id}"><h3 class="title">${title}</h3></a>
    <p class="company">${company}</p>
    <h4 class="location">${location}</h4>
  `;

  return $jobCard;
};

export default JobCard;
