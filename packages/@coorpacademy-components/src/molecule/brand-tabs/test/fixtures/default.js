export default {
  props: {
    tabs: [
      {
        title: 'General Settings',
        href: '#brand/samsung/settings',
        open: false,
        selected: false
      },
      {
        title: 'Look & Feel',
        href: '#brand/samsung/lookandfeel',
        type: 'iconLink',
        open: false,
        selected: false
      },
      {
        title: 'SSO',
        href: '#brand/samsung/sso',
        selected: true,
        open: false,
        subTabs: [
          {title: 'SSO', href: '#/sso', selected: true, type: 'iconLink'},
          {title: 'Look and Feel', href: '#/look-and-feel', selected: false},
          {title: 'Settings', href: '#/settings', selected: false},
          {title: 'Any', href: '#/any', selected: false},
          {title: 'Many', href: '#/many', selected: false}
        ]
      },
      {
        title: 'Manage users',
        href: '#brand/samsung/users',
        open: true,
        selected: false,
        subTabs: [
          {title: 'Settings', href: '#/settings', selected: false, type: 'iconLink'},
          {title: 'Any', href: '#/any', selected: false},
          {title: 'Many', href: '#/many', selected: false}
        ]
      },
      {
        title: 'Upload users',
        href: '#brand/samsung/import',
        open: false,
        selected: false
      },
      {
        title: 'Analytics',
        href: '#brand/samsung/analytics',
        open: false,
        selected: false
      },
      {
        title: 'Cohort',
        href: '#brand/samsung/cohort',
        open: false,
        selected: false
      }
    ],
    type: 'default'
  }
};
