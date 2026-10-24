import Assignment from './list-items-assignment';

const subTabs = [
  {
    title: 'Active',
    href: '/brands/7steps/assignments/active',
    selected: true,
    status: '5'
  },
  {
    title: 'Upcoming',
    href: '/brands/7steps/assignments/upcoming',
    selected: false,
    status: '0'
  },
  {
    title: 'Ended',
    href: '/brands/7steps/assignments/ended',
    selected: false,
    status: '0'
  },
  {
    title: 'Drafts',
    href: '/brands/7steps/assignments/drafts',
    selected: false,
    status: '0'
  },
  {
    title: 'Disabled',
    href: '/brands/7steps/assignments/disabled',
    selected: false,
    status: '0'
  }
];

export default {
  props: {
    ...Assignment.props,
    items: Assignment.props.items.map(item => ({
      ...item,
      selected: item.key === 'editorialization',
      ...(item.key === 'editorialization'
        ? {
            open: true,
            tabs: [
              {
                title: 'Assignments',
                href: '/brands/7steps/assignments',
                selected: true,
                type: 'simpleTab',
                subTabs
              }
            ]
          }
        : {})
    }))
  }
};
