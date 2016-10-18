export default {
  props: {
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
    }]
  }
};
