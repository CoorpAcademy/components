export default {
  props: {
    type: 'error',
    message: 'You have some hidden courses that you have to deselect in “add courses” section',
    firstCTALabel: 'Go to the page',
    firstCTA: () => console.log('Go to the page')
  }
};
