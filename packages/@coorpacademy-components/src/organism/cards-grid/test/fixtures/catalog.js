import update from 'lodash/fp/update';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import uniqueId from 'lodash/fp/uniqueId';

import card1 from '../../../../molecule/card/test/fixtures/adaptiv';
import card2 from '../../../../molecule/card/test/fixtures/catalogue';
import card3 from '../../../../molecule/card/test/fixtures/default';
import card4 from '../../../../molecule/card/test/fixtures/disabled';
import card5 from '../../../../molecule/card/test/fixtures/freerun';
import card6 from '../../../../molecule/card/test/fixtures/freerun-and-disabled';
import card7 from '../../../../molecule/card/test/fixtures/adaptiv-and-disabled';

const list = [
  card1.props,
  card2.props,
  card3.props,
  card4.props,
  card5.props,
  card6.props,
  card7.props
].map(pipe(update('key', () => uniqueId()), set('view', 'list')));

export default {
  props: {
    list
  }
};
