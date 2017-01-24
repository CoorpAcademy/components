export default {
  props: {
    startLabel: 'Start <span>now</span>',
    buyLabel: 'Buy <span>now</span>',
    start: () => console.log('start'), // eslint-disable-line no-console
    buy: () => console.log('buy') // eslint-disable-line no-console
  }
};
