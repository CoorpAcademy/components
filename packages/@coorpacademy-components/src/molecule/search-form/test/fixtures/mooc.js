export default {
  props: {
    action: '/search',
    method: 'get',
    onSubmit: () => {},
    onReset: () => {},
    search: {
      value: 'test',
      placeholder: 'Search',
      'aria-label': 'Search'
    },
    'search-reset-aria-label': 'Clear search',
    theme: 'mooc'
  }
};
