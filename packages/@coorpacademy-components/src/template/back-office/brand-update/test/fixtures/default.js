import Header from '../../../../../organism/setup-header/test/fixtures/default';

export const items = [
  {
    title: 'My Dashboard',
    key: 'dashboard',
    href: '#brand/samsung/dashboard',
    open: undefined,
    selected: false,
    type: 'simple-tab'
  },
  {
    title: 'Administration',
    key: 'administration',
    href: '#brand/samsung/administration',
    open: false,
    selected: false,
    type: 'collapsible-tab'
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
    isOpen: true,
    type: 'collapsible-tab',
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
            selected: false
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
            selected: true
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
    type: 'collapsible-tab',
    tabs: [
      {title: 'SSO', href: '#/sso', selected: false, type: 'iconLink'},
      {title: 'Look and Feel', href: '#/look-and-feel', selected: false},
      {title: 'Settings', href: '#/settings', selected: false},
      {title: 'Any', href: '#/any', selected: false},
      {title: 'Many', href: '#/many', selected: false}
    ]
  }
];

export default {
  props: {
    header: Header.props,
    notifications: [],
    items,
    logo: '',
    content: {
      type: 'form',
      groups: []
    }
  }
};
