export default {
  props: {
    notifications: [],
    breadcrumbs: [{
      icon: '',
      title: 'Platform list',
      href: '#'
    }, {
      icon: '',
      title: 'Samsung Settings'
    }],
    links: [{
      title: 'Go to Cockpit',
      href: '#cockpit',
      type: 'primary'
    }, {
      title: 'Go to Platform',
      href: '#platform',
      type: 'secondary'
    }],
    tabs: [{
      title: 'General Settings',
      href: '#brand/samsung/settings',
      selected: true
    }, {
      title: 'Look & Feel',
      href: '#brand/samsung/lookandfeel',
      selected: false
    }, {
      title: 'SSO',
      href: '#brand/samsung/sso',
      selected: false
    }],
    content: {
      groups: [{
        title: 'Platform Name',
        fields: [{
          title: 'Domain name',
          value: 'samsung.coorpacademy.com',
          type: 'readonly'
        }, {
          title: 'Platform name',
          value: 'Samsung',
          type: 'readonly'
        }]
      },
      {
        title: 'Forum',
        fields: [{
          title: 'Activate',
          value: false,
          type: 'switch',
          description: 'Lorem Ipsum dolor sit amet.',
          onChange: () => {}
        }]
      }, {
        title: 'Danger Zone',
        fields: [{
          title: 'Delete Platform',
          type: 'doublestep',
          description: 'Deleting your platform is irreversible!',
          onChange: () => {}
        }]
      }]
    }
  }
};
