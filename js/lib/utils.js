import { state } from '../store.js';
import { GITHUB_JOB_API, GITHUB_JOB_DETAIL_API } from '../api.js';

export function clearDOM($elem) {
  while ($elem.children.length) {
    $elem.lastChild.remove();
  }
}

export function renderHTML($elem, $container) {
  clearDOM($container);
  $container.appendChild($elem);
}

export function appendHTML($elem, $container) {
  $container.appendChild($elem);
}

export const fetchJobList = async (isRenewal) => {
  const url = GITHUB_JOB_API();
  const response = await fetch(url);
  const data = await response.json();

  if (isRenewal) {
    state.data.rendered = [];
    state.data.unrendered = [];
    state.data.noMoreData = false;
    state.data.noMoreFetch = false;
  }

  state.data.unrendered = state.data.unrendered.concat(data);

  if (data.length < 50) {
    state.data.noMoreFetch = true;
  }
};

export const fetchJobDetail = async (id) => {
  const url = GITHUB_JOB_DETAIL_API(id);
  const response = await fetch(url);
  const data = await response.json();
  state.detail = data;
};

export const timeSince = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);

  let interval = seconds / 31536000;
  if (interval > 1) {
    return Math.floor(interval) + 'y ago';
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + 'mo ago';
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + 'd ago';
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + 'h ago';
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + 'min ago';
  }
  return Math.floor(seconds) + 's ago';
};
