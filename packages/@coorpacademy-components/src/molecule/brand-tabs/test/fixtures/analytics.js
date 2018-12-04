export default {
  props: {
    tabs: [
      {
        title: 'General Settings',
        href: '#brand/samsung/settings',
        selected: false
      },
      {
        title: 'Look & Feel',
        href: '#brand/samsung/lookandfeel',
        selected: false
      },
      {
        title: 'SSO',
        href: '#brand/samsung/sso',
        selected: false,
        // eslint-disable-next-line no-alert
        onClick: () => alert('Fear the SSO!')
      },
      {
        title: 'Users',
        href: '#brand/samsung/users',
        selected: false
      },
      {
        title: 'Analytics',
        href: '#brand/samsung/analytics',
        selected: true
      }
    ]
  }
};
