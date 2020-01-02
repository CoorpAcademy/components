export default {
  props: {
    type: 'feature',
    message: 'Cockpit has a new feature. Click on "Know more" for more information.',
    closeLabel: 'Close',
    closeOnClick: () => console.log('Feature function'),
    acceptLabel: 'Know more',
    acceptOnClick: () => {
      window.open('https://www.coorpacademy.com');
    }
  }
};
