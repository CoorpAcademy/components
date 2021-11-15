export default {
  props: {
    type: 'secondary',
    label: 'Global Analytics',
    'data-name': 'default-button',
    'rgaa-title': 'rgaa button',
    icon: {
      position: 'right',
      type: 'analytics'
    },
    onClick: () => {
      console.log('Click on link');
      return;
    },
    link: {
      href: 'https://www.google.com'
    }
  }
};
