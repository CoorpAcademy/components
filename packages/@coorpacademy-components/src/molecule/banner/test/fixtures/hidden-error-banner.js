export default {
  props: {
    type: 'error',
    message: 'You have some hidden courses that you have to deselect in “add courses” section',
    cta: [{label: 'Go to the page', action: () => console.log('Go to the page')}]
  }
};
