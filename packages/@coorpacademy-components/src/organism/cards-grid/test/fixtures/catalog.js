import {update, pipe, set, uniqueId} from 'lodash/fp';

import card1 from '../../../../molecule/card/test/fixtures/course-adaptiv';
import card3 from '../../../../molecule/card/test/fixtures/default';
import card4 from '../../../../molecule/card/test/fixtures/disabled';
import card5 from '../../../../molecule/card/test/fixtures/freerun';
import card6 from '../../../../molecule/card/test/fixtures/freerun-and-disabled';
import card7 from '../../../../molecule/card/test/fixtures/course-adaptiv-and-disabled';
import card8 from '../../../../molecule/card/test/fixtures/favorite';
import card9 from '../../../../molecule/card/test/fixtures/empty';
import card10 from '../../../../molecule/card/test/fixtures/external-content';
import card11 from '../../../../molecule/card/test/fixtures/article';
import card12 from '../../../../molecule/card/test/fixtures/video';
import card13 from '../../../../molecule/card/test/fixtures/podcast';

const list = [
  card1.props,
  card3.props,
  card4.props,
  card5.props,
  card10.props,
  card6.props,
  card11.props,
  card7.props,
  card12.props,
  card8.props,
  card9.props,
  card13.props
].map(
  pipe(
    update('key', () => uniqueId()),
    set('view', 'list')
  )
);

export const cardListWithoutMicrolearning = [
  card1.props,
  card3.props,
  card4.props,
  card10.props,
  card11.props,
  card7.props,
  card12.props,
  card9.props,
  card13.props
].map(
  pipe(
    update('key', () => uniqueId()),
    set('view', 'list')
  )
);

export default {
  props: {
    list
  }
};
