export default {
  props: {
    items: [
      {
        title: 'My Dashboard',
        key: 'dashboard',
        href: '#brand/samsung/dashboard',
        hasChild: false,
        open: undefined,
        selected: false
      },
      {
        title: 'Administration',
        key: 'administration',
        href: '#brand/samsung/administration',
        open: false,
        selected: false
      },
      {
        title: 'Editorialization',
        key: 'editorialization',
        href: '#brand/samsung/editorialization',
        type: 'iconLink',
        selected: true
      },
      {
        title: 'Content Creation',
        key: 'contentCreation',
        href: '#brand/samsung/content-creation',
        open: false,
        selected: false
      },
      {
        title: 'Animation',
        key: 'animation',
        href: '#brand/samsung/content-creation',
        open: false,
        selected: false
      },
      {
        title: 'Analytics',
        key: 'analytics',
        href: '#brand/samsung/analytics',
        open: false,
        selected: false
      }
    ],
    type: 'default'
  }
};
