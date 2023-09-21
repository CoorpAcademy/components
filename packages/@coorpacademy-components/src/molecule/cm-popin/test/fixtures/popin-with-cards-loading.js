import popinWithCards from './popin-with-cards';

export default {
  props: {
    ...popinWithCards.props,
    items: {
      type: 'content',
      list: {
        list: [{}, {}, {}, {}]
      }
    }
  }
};
