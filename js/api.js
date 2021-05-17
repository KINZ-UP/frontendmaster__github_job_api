import { state } from './store.js';

export const GITHUB_JOB_API = () => {
  const querys = state.query;
  const url = 'https://cors.bridged.cc/https://jobs.github.com/positions.json';
  let queryString = '?';
  const queryList = [];
  for (let query in querys) {
    queryList.push(`${query}=${querys[query]}`);
  }
  queryString += queryList.join('&');

  return url + queryString;
};
