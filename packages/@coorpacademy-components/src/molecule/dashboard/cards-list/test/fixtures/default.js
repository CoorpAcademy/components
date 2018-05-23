import Card from '../../../../card/test/fixtures/default';

const {props} = Card;

export default {
  props: {
    title: 'Most popular',
    cards: [props, props, props, {}, {}, {}, props, props, props, {}, {}, {}, props, props, props],
    onScroll: (skip, limit) => {
      console.log(skip, limit);
    }
  }
};
