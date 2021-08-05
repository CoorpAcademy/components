export default {
  props: {
    tabs: [
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
        open: true,
        selected: true,
        subTabs: [
          {title: 'SSO', href: '#/sso', selected: false, type: 'iconLink'},
          {title: 'Look and Feel', href: '#/look-and-feel', selected: true},
          {title: 'Settings', href: '#/settings', selected: false},
          {title: 'Any', href: '#/any', selected: false},
          {title: 'Many', href: '#/many', selected: false}
        ]
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
