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
    results: [
      {
        text: 'Population 2',
        information: '15739 users',
        onClick: () => console.log('click Population 2')
      },
      {
        text: 'Population 1',
        information: '345 users',
        onClick: () => console.log('click Population 1')
      },
      {
        text: 'Population 3',
        information: '10 users',
        onClick: () => console.log('click Population 3')
      },
      {
        text: 'Population 4',
        information: '106728 users',
        onClick: () => console.log('click Population 4')
      },
      {
        text: 'Population 5',
        information: '105 users',
        onClick: () => console.log('click Population 5')
      },
      {
        text: 'Population 6',
        information: '1067 users',
        onClick: () => console.log('click Population 6')
      }
    ]
  }
};
