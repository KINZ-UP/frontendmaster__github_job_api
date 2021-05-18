export const state = {
  data: {},
  query: {},
  detail: {},
};

export function initializeState() {
  state.data = {
    rendered: [],
    unrendered: [],
    noMoreData: false,
    noMoreFetch: false,
  };
  state.query = {
    description: '',
    location: '',
    fullTime: false,
    page: 1,
  };
}
