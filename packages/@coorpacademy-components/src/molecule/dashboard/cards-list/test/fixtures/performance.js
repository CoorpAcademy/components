import {times, flatMap, get, flatten, map, pipe} from 'lodash/fp';
import Default from './default';
import Many from './many';
import ManyEmpty from './many-empty';
import Microlearning from './microlearning';
import NoIcon from './no-icon';

const mapValuesWithIndex = map.convert({cap: false});

const cards = pipe(
  flatMap(get('props.cards')),
  cs => times(() => cs, 35),
  flatten,
  mapValuesWithIndex((p, index) =>
    p
      ? {
          ...p,
          title: `${p.title}#${index}`
        }
      : p
  )
)([Default, Many, ManyEmpty, Microlearning, NoIcon]);

export default {
  props: {
    title: 'Performance',
    showMore: 'See all',
    cards,
    onScroll: (skip, limit) => {
      console.log(skip, limit);
    },
    onShowMore: () => {
      console.log('show More');
    },
    contentType: 'chapter'
  }
};
