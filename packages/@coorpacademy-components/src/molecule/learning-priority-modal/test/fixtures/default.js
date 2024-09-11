export default {
  props: {
    priorities: [
      {
        title: 'Learning Priority 1',
        priorityRef: 'ref-1',
        courses: 0,
        type: 'skill'
      },
      {
        title: 'Learning Priority 2',
        priorityRef: 'ref-2',
        courses: 0,
        type: 'playlist'
      },
      {
        title: 'Learning Priority 3',
        priorityRef: 'ref-3',
        courses: 0,
        type: 'certificate'
      }
    ],
    preselected: ['ref-1'],
    filters: [
      {
        name: 'All',
        value: 'all',
        count: 3
      },
      {
        name: 'Skill',
        value: 'skill',
        count: 1
      },
      {
        name: 'Certification',
        value: 'certificate',
        count: 1
      },
      {
        name: 'Playlist',
        value: 'playlist',
        count: 1
      }
    ],
    isOpen: true,
    isLoading: false,
    onCancel: () => {},
    onAdd: () => {},
    onClose: () => {}
  }
};
