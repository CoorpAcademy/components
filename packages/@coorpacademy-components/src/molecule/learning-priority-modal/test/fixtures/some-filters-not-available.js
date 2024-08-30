export default {
  props: {
    priorities: [
      {
        title: 'Learning Priority 1',
        ref: 'ref-1',
        courses: 0,
        type: 'skill'
      },
      {
        title: 'Learning Priority 2',
        ref: 'ref-2',
        courses: 0,
        type: 'skill'
      }
    ],
    preSelectedPriorities: ['ref-1'],
    filters: {
      options: [
        {
          name: 'All',
          value: 'ALL',
          selected: false,
          count: 8
        },
        {
          name: 'Skill',
          value: 'skill',
          selected: true,
          count: 3
        },
        {
          name: 'Certification',
          value: 'certification',
          selected: false,
          count: 0
        },
        {
          name: 'Playlist',
          value: 'playlist',
          selected: false,
          count: 0
        }
      ],
      onChange: value => console.log(value)
    },
    isOpen: true,
    isLoading: false,
    onCancel: () => {},
    onAdd: () => {},
    onClose: () => {}
  }
};
