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
        type: 'skill'
      }
    ],
    preselected: ['ref-1'],
    filters: [
      {
        name: 'All',
        value: 'all',
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
        value: 'certificate',
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
    isOpen: true,
    isLoading: false,
    onCancel: () => {},
    onAdd: () => {},
    onClose: () => {}
  }
};
