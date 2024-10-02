import DraggableListProps from '../../../../molecule/draggable-list/test/fixtures/learning-priority-setup-item';

export default {
  props: {
    content: DraggableListProps.props,
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
      },
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
    isLoading: false,
    onAdd: () => console.log('added')
  }
};
