export default {
  props: {
    breadcrumbs: [{
      icon: '',
      title: 'Platform list',
      href: '/something'
    }, {
      icon: '',
      title: 'Samsung Settings'
    }],
    links: [{
      title: 'Go to Cockpit',
      href: '/pouet',
      type: 'primary'
    }, {
      title: 'Go to Platform',
      href: '/pouet',
      type: 'secondary'
    }]
  }
};
