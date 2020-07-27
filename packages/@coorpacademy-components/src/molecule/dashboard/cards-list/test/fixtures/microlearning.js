import {times} from 'lodash/fp';
import Card from '../../../../card/test/fixtures/default';

const {props} = Card;
props.type = 'chapter';

export default {
  props: {
    title: 'Microlearning: Most popular',
    showMore: 'See all',
    cards: times(() => props, 8).map((p, index) => ({...p, title: `${p.title}#${index}`})),
    onScroll: (skip, limit) => {
      console.log(skip, limit);
    },
    onShowMore: () => {
      console.log('show More');
    },
    contentType: 'chapter'
  }
};
