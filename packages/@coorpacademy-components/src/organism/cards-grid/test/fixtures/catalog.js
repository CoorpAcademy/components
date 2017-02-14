import update from 'lodash/fp/update';
import uniqueId from 'lodash/fp/uniqueId';

import card from '../../../../molecule/card/test/fixtures/catalogue';

const content = [
  card.props,
  card.props,
  card.props,
  card.props,
  card.props,
  card.props
].map(update('key', () => uniqueId()));

export default {
  props: {
    content
  }
};
