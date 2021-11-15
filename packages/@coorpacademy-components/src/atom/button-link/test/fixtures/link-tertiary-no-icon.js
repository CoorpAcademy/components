export default {
  props: {
    type: 'tertiary',
    label: 'Go to google',
    'data-name': 'default-button',
    'aria-label': 'aria button',
    onClick: () => {
      console.log('Click on link');
      return;
    },
    link: {
      href: 'https://www.google.com'
    }
  }
};
