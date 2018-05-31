import Card from '../../../../card/test/fixtures/default';

const {props} = Card;
props.type = 'chapter';

export default {
  props: {
    title: 'Microlearning: Most popular',
    cards: [props, props, props, {}, {}, {}, props, props, props, {}, {}, {}, props, props, props],
    onScroll: (skip, limit) => {
      console.log(skip, limit);
    },
    contentType: 'chapter'
  }
};
