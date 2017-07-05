import cond from 'lodash/fp/cond';
import constant from 'lodash/fp/constant';
import get from 'lodash/fp/get';
import isEqual from 'lodash/fp/isEqual';
import pipe from 'lodash/fp/pipe';
import {
  getCurrentExitNode,
  getCurrentProgression,
  getRecommendations,
  getBestScore,
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

const extractStars = state => {
  const progression = getCurrentProgression(state);
  const stars = get('state.stars')(progression);
  const bestScore = getBestScore(state);

  return stars > bestScore ? `+${stars - bestScore}` : '+0';
};

const summaryHeader = (state, translate) => {
  const progression = getCurrentProgression(state);
  return cond([
    [
      pipe(get('type'), isEqual('success')),
      () => ({
        title: '',
        subtitle: translate('Congratulations!'),
        fail: false,
        stars: extractStars(state),
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
  ]);
};

const extractRecommendation = (state, translate) => {
  const recommendations = getRecommendations(state);
  const list = get('list', recommendations);
  const hasRecommendations = list && list.length > 0;

  const recommendation = hasRecommendations && {
    title: translate('Related subjects'),
    cards: list
  };

  return recommendation;
};

const extractAction = (state, translate) => {
  const recommendations = getRecommendations(state);
  return cond([
    [
      pipe(get('type'), isEqual('success')),
      () =>
        get('nextChapter', recommendations) && {
          type: 'nextCourse',
          description: translate('Validate your skills!'),
          prefix: translate('See course:'),
          ...recommendations.nextChapter
        }
    ],
    [
      pipe(get('type'), isEqual('failure')),
      () => ({
        type: 'simple',
        prefix: translate('Retry level:'),
        title: '------ current state.chapter.title ------',
        button: {
          title: translate('Retry level'),
          href: `/`
        }
      })
    ],
    [constant(true), constant(null)]
  ]);
};

const popinEndStateToProps = (options, store) => state => {
  const {translate} = options;

  const exitNode = getCurrentExitNode(state);

  const footer = {
    title: translate('Back to dashboard'),
    href: '/'
  };

  const props = {
    header: headerProps(options, store)(state),
    summary: {
      header: summaryHeader(state, translate)(exitNode),
      action: extractAction(state, translate)(exitNode),
      recommendation: extractRecommendation(state, translate),
      footer
    }
  };

  return props;
};

export default popinEndStateToProps;
