export default {
  props: {
    tabs: [
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
    ],
    type: 'default'
  }
};
