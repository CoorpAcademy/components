import cond from 'lodash/fp/cond';
import constant from 'lodash/fp/constant';
import get from 'lodash/fp/get';
import isEqual from 'lodash/fp/isEqual';
import pipe from 'lodash/fp/pipe';
import {
  getCurrentExitNode,
  getCurrentProgression,
  getRecommendations,
  getStartRank,
  getEndRank
} from '../../utils/state-extract';
import headerProps from './header';

const extractRank = state => {
  const start = getStartRank(state);
  const end = getEndRank(state);

  if (start === end) {
    return null;
  } else {
    const sign = end - start > 0 ? '-' : '+';
    const diff = Math.abs(end - start);
    return `${sign}${diff}`;
  }
};

const popinEndStateToProps = (options, store) => state => {
  const {translate} = options;

  const exitNode = getCurrentExitNode(state);
  const progression = getCurrentProgression(state);

  const header = cond([
    [
      pipe(get('type'), isEqual('success')),
      () => ({
        title: '',
        subtitle: translate('Congratulations!'),
        fail: false,
        stars: get('state.stars')(progression),
        rank: extractRank(state),
        cta: {
          title: translate('Back to dashboard'),
          subtitle: '',
          href: '/'
        }
      })
    ],
    [
      pipe(get('type'), isEqual('failure')),
      () => ({
        title: translate('O O O P S'),
        subtitle: translate('You are missing lives!'),
        fail: true,
        lives: get('state.lives')(progression),
        rank: extractRank(state),
        cta: {
          title: translate('Retry level'),
          href: `/`
        }
      })
    ],
    [constant(true), constant(null)]
  ])(exitNode);

  const recommendation = {
    title: translate('Related subjects'),
    cards: getRecommendations(state)
  };
  const footer = {
    title: translate('Back to dashboard'),
    href: '/'
  };

  const props = {
    header: headerProps(options, store)(state),
    summary: {
      header,
      recommendation,
      footer
    }
  };

  return props;
};

export default popinEndStateToProps;
