export default {
  props: {
    selectAllButton: {
      label: 'Select All',
      onClick: () => console.log('Select All')
    },
    search: {
      title: 'Search...',
      placeholder: 'Search...',
      value: 'Xoxoxo',
      description: 'Type to find the populations',
      onChange: value => console.log(value)
    },
    selected: [],
    results: []
  }
};
