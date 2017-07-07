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

const formatGain = gain => {
  if (gain > 0) return `+${gain}`;
  return `${gain}`;
};

const extractRank = state => {
  const start = getStartRank(state);
  const end = getEndRank(state);

  if (start === end) {
    return null;
  } else {
    const diff = start - end;
    return formatGain(diff);
  }
};

const extractStars = state => {
  const progression = getCurrentProgression(state);
  const stars = get('state.stars')(progression);
  const bestScore = getBestScore(state);

  return stars > bestScore ? `+${stars - bestScore}` : '+0';
};

const summaryHeader = ({translate}, store) => state => {
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
        stars: null,
        cta: {
          title: translate('Retry level'),
          href: `/`
        }
      })
    ],
    [constant(true), constant(null)]
  ]);
};

const extractRecommendation = ({translate}, store) => state => {
  const recommendations = getRecommendations(state);
  const list = get('list', recommendations);
  const hasRecommendations = list && list.length > 0;

  const recommendation = hasRecommendations && {
    title: translate('Related subjects'),
    cards: list
  };

  return recommendation;
};

const extractAction = ({translate}, store) => state => {
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
      header: summaryHeader(options, store)(state)(exitNode),
      action: extractAction(options, store)(state)(exitNode),
      recommendation: extractRecommendation(options, store)(state),
      footer
    }
  };

  return props;
};

export default popinEndStateToProps;
