import update from 'lodash/fp/update';
import uniqueId from 'lodash/fp/uniqueId';

import card1 from '../../../../molecule/card/test/fixtures/adaptiv';
import card2 from '../../../../molecule/card/test/fixtures/catalogue';
import card3 from '../../../../molecule/card/test/fixtures/default';

const list = [
  card1.props,
  card2.props,
  card1.props,
  card2.props,
  card3.props,
  card2.props
].map(update('key', () => uniqueId()));

export default {
  props: {
    list
  }
};
