export const state = {
  data: {},
  query: {},
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
