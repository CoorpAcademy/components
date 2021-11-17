export default {
  props: {
    selectAllButton: {
      label: 'Select All',
      onClick: () => console.log('Select All')
    },
    search: {
      title: 'Search...',
      placeholder: 'Search...',
      value: 'Human',
      description: 'Type to filter the populations',
      onChange: value => console.log(value)
    },
    'results-aria-label': 'Population results',
    results: [
      {
        text: 'Population Human resourses filiale Singapour',
        information: '15739 users',
        onClick: () => console.log('click Population Human resourses filiale Singapour')
      },
      {
        text: 'Population managed by othes Human resources in some country',
        information: '10 users',
        onClick: () => console.log('click Population managed by othes RH in some country')
      }
    ]
  }
};
