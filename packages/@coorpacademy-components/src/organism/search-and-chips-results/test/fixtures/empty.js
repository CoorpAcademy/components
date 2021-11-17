export default {
  props: {
    selectAllButton: {
      label: 'Select All',
      onClick: () => console.log('Select All'),
      disabled: true
    },
    search: {
      title: 'Search...',
      placeholder: 'Search...',
      value: 'Xoxoxo',
      description: 'Type to find the populations',
      onChange: value => console.log(value)
    },
    'results-aria-label': 'Population results',
    results: [],
    emptyMessages: {
      firstMessage: 'No results...',
      secondMessage: 'Try something else'
    }
  }
};
