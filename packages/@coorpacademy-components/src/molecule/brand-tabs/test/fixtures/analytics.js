export default {
  props: {
    items: [
      {
        title: 'My Dashboard',
        key: 'dashboard',
        href: '#brand/samsung/dashboard',
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
        open: false,
        selected: false
      },
      {
        title: 'Content Creation',
        key: 'contentCreation',
        href: '#brand/samsung/content-creation',
        open: false,
        selected: false,
        type: 'iconLink'
      },
      {
        title: 'Animation',
        key: 'animation',
        href: '#brand/samsung/content-creation',
        selected: true,
        tabs: [
          {
            title: 'My platform',
            href: '#/myplatform',
            selected: true,
            subTabs: [
              {
                name: 'general-settings',
                title: 'general-settings',
                href: `general-settings`,
                selected: false
              },
              {
                name: 'sso',
                title: 'sso',
                href: `sso`,
                selected: true
              },
              {
                name: 'danger-zone',
                title: 'danger-zone',
                href: `danger-zone`,
                selected: false
              },
              {
                name: 'manage-users',
                title: 'manage-users',
                href: `manage-users`,
                selected: false
              },
              {
                name: 'upload-users',
                title: 'upload-users',
                href: `upload-users`,
                selected: false
              },
              {
                name: 'lms',
                title: 'lms',
                href: `lms`,
                selected: false
              },
              {
                name: 'teams',
                title: 'teams',
                href: `teams`,
                selected: false
              }
            ]
          },
          {title: 'Look and Feel', href: '#/look-and-feel', selected: false},
          {title: 'Settings', href: '#/settings', selected: false},
          {title: 'Any', href: '#/any', selected: false},
          {title: 'Many', href: '#/many', selected: false}
        ]
      },
      {
        title: 'Analytics',
        key: 'analytics',
        href: '#brand/samsung/analytics',
        open: true,
        selected: false,
        tabs: [
          {title: 'SSO', href: '#/sso', selected: false, type: 'iconLink'},
          {title: 'Look and Feel', href: '#/look-and-feel', selected: false},
          {title: 'Settings', href: '#/settings', selected: false},
          {title: 'Any', href: '#/any', selected: false},
          {title: 'Many', href: '#/many', selected: false}
        ]
      }
    ],
    type: 'default'
  }
};
