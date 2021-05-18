import { timeSince, fetchJobDetail } from '../lib/utils.js';
import { state } from '../store.js';

const Detail = async () => {
  const id = window.location.hash.substr(1);
  await fetchJobDetail(id);
  console.log(state.detail);
  const $detail = document.createElement('div');
  $detail.classList.add('job-detail');

  const {
    type,
    url,
    created_at,
    company,
    company_url,
    location,
    title,
    description,
    how_to_apply,
    company_logo,
  } = state.detail;

  $detail.innerHTML = `
    <div class="detail-header job-detail-inner">
      <img class="company-logo" src="${company_logo}" alt="${company}" />
      <h3 class="company-name">${company}</h3>
      <a href="${company_url}" target="_blank" ><button class="button2">Company Site</button></a>
    </div>
    <article class="job-detail-inner"> 
      <div class="article-header">
        <div class="job-info">
          <p class="created_and_type">${timeSince(
            created_at
          )} &#183; ${type}</p>
          <h3 class="title">${title}</h3>
          <p class="location">${location}</p>
        </div>
        <a href="${company_url}" target="_blank"><button class="button1">Apply Now</button></a>
      </div>
      <div class="description">
        ${description}
      </div>
    </article>
    <div class="how-to-apply-container job-detail-inner">
      <h3>How to Apply</h3>
      <div class="how-to-apply">
        ${how_to_apply}
      </div>
    </div>
    <div class="detail-footer">
      <div class="detail-inner">
        <div class="company-info">
          <h3 class="title">${title}</h3>
          <p class="company">${company}</p>
        </div>
        <a href="${company_url}" target="_blank"><button class="button1">Apply Now</button></a>
      </div>
    </div>
    
  `;
  return $detail;
};

export default Detail;
