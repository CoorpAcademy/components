import popinWithCards from './popin-with-cards';

export default {
  props: {
    ...popinWithCards.props,
    items: {
      type: 'content',
      list: {
        list: [
          {key: 'loading-card-1'},
          {key: 'loading-card-2'},
          {key: 'loading-card-3'},
          {key: 'loading-card-4'}
        ]
      }
    }
  }
};
