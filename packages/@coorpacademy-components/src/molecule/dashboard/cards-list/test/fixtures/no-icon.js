import Card from '../../../../card/test/fixtures/default';

const {props} = Card;
const chapterProps = props;
chapterProps.type = 'chapter';

export default {
  props: {
    title: 'Most popular',
    cards: [
      props,
      props,
      props,
      {},
      {},
      {},
      props,
      props,
      props,
      {},
      {},
      {},
      props,
      props,
      chapterProps
    ],
    onScroll: (skip, limit) => {
      console.log(skip, limit);
    }
  }
};
