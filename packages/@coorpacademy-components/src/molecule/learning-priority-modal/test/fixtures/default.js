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
        type: 'playlist'
      },
      {
        title: 'Learning Priority 3',
        ref: 'ref-3',
        courses: 0,
        type: 'certificate'
      }
    ],
    selectedPriorities: [
      {
        title: 'Learning Priority 1',
        ref: 'ref-1',
        courses: 0,
        type: 'skill'
      }
    ],
    filters: {
      options: [
        {
          name: 'All',
          value: 'ALL',
          selected: true,
          count: 8
        },
        {
          name: 'Skill',
          value: 'skill',
          selected: false,
          count: 3
        },
        {
          name: 'Certification',
          value: 'certification',
          selected: false,
          count: 2
        },
        {
          name: 'Playlist',
          value: 'playlist',
          selected: false,
          count: 3
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
