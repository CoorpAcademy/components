export default {
  props: {
    selectAllButton: {
      label: 'Select All',
      onClick: () => console.log('Select All')
    },
    search: {
      title: 'Search...',
      placeholder: 'Search...',
      value: '',
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
        text: 'Population 1',
        information: '345 users',
        onClick: () => console.log('click Population 1'),
        selected: true
      },
      {
        text: 'P',
        information: '1 p',
        onClick: () => console.log('click P'),
        selected: true
      },
      {
        text: 'Population managed by othes RH in some country',
        information: '10 users',
        onClick: () => console.log('click Population managed by othes RH in some country')
      },
      {
        text: 'Population 4',
        information: '106728 users',
        onClick: () => console.log('click Population 4')
      },
      {
        text: 'Population a long with a long name',
        information: '105 users',
        onClick: () => console.log('click Population a long with a long name'),
        selected: true
      },
      {
        text: 'Result bit that long',
        information: '1067 users',
        onClick: () => console.log('click Result bit that long')
      }
    ]
  }
};
