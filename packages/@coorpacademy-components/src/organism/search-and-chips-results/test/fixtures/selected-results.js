export default {
  props: {
    selectAllButton: {
      label: 'Select All',
      onClick: () => console.log('Select All')
    },
    search: {
      title: 'Search...',
      placeholder: 'Search...',
      value: 'Loc',
      description: 'Type to find the populations',
      onChange: value => console.log(value)
    },
    selected: [
      {
        text: 'Local Population 3',
        information: '10 users',
        onClick: () => console.log('click Population 3')
      },
      {
        text: 'Block 4',
        information: '106728 users',
        onClick: () => console.log('click Block 4')
      }
    ],
    results: [
      {
        text: 'Location 2',
        information: '15739 users',
        onClick: () => console.log('click Location 2')
      },
      {
        text: 'Holocène',
        information: '345 users',
        onClick: () => console.log('click Holocène')
      },
      {
        text: 'Velocité',
        information: '105 users',
        onClick: () => console.log('click Velocité')
      }
    ]
  }
};
