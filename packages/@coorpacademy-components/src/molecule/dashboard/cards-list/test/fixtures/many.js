import defaultsDeep from 'lodash/fp/defaultsDeep';
import Card from '../../../../card/test/fixtures/default';

const {props} = Card;

export default {
  props: {
    title: 'Most Recent',
    cards: [
      defaultsDeep(props, { title: 'First item' }),
      defaultsDeep(props, { title: 'Second item' }),
      defaultsDeep(props, { title: 'Third item' }),
      defaultsDeep(props, { title: 'Fourth item' }),
      defaultsDeep(props, { title: 'Fifth item' }),
      defaultsDeep(props, { title: 'Sixth item' }),
      defaultsDeep(props, { title: 'Seventh item' }),
      defaultsDeep(props, { title: 'Eigth item' }),
      defaultsDeep(props, { title: 'Ninth item' }),
      defaultsDeep(props, { title: 'Tenth item' })
    ],
    onScroll: (skip, limit) => { console.log(skip, limit); } // eslint-disable-line no-console
  }
};
