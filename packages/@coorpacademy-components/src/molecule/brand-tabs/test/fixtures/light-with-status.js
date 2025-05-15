export default {
  props: {
    tabs: [
      {
        title: 'General Settings',
        href: '#brand/samsung/settings',
        selected: true,
        status: '32'
      },
      {
        title: 'Look & Feel',
        href: '#brand/samsung/lookandfeel',
        selected: false,
        status: '0'
      },
      {
        title: 'SSO',
        href: '#brand/samsung/sso',
        selected: false,
        status: '2'
      },
      {
        title: 'Manage users',
        href: '#brand/samsung/users',
        selected: false,
        status: '300'
      },
      {
        title: 'Upload users',
        href: '#brand/samsung/import',
        selected: false,
        status: '0'
      },
      {
        title: 'Analytics',
        href: '#brand/samsung/analytics',
        selected: false,
        status: '0'
      },
      {
        title: 'Cohort',
        href: '#brand/samsung/cohort',
        selected: false,
        status: '20'
      }
    ],
    type: 'light'
  }
};
