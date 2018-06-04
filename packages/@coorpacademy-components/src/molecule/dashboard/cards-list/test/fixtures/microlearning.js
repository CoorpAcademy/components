import Card from '../../../../card/test/fixtures/default';

const {props} = Card;
props.type = 'chapter';

export default {
  props: {
    title: 'Microlearning: Most popular',
    showMore: 'See all',
    cards: [props, props, props, props, props, props, props, props, props, props],
    onScroll: (skip, limit) => {
      console.log(skip, limit);
    },
    onShowMore: () => {
      console.log('show More');
    },
    contentType: 'chapter'
  }
};
