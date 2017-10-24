import cond from 'lodash/fp/cond';
import constant from 'lodash/fp/constant';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import isEqual from 'lodash/fp/isEqual';
import pipe from 'lodash/fp/pipe';
import {retry, exit, nextLevel} from '../../actions/ui/location';
import {
  getCurrentContent,
  getCurrentExitNode,
  getCurrentProgression,
  getRecommendations,
  getBestScore,
  getStartRank,
  getEndRank,
  isCurrentEngineMicrolearning,
  isCurrentEngineLearner
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

const summaryHeader = ({translate}, {dispatch}) => state => {
  const progression = getCurrentProgression(state);
  const successCta = {
    title: translate('Back to home'),
    href: '/'
  };

  if (isCurrentEngineLearner(state)) {
    const level = get('level', getCurrentContent(state));
    if (level === 'advanced' || level === 'base') {
      const recommendations = getRecommendations(state);
      const _nextLevel = get('nextLevel', recommendations);
      if (_nextLevel) {
        successCta.title = translate('Next level');
        successCta.href = null;
        successCta.onClick = () => dispatch(nextLevel);
      }
    }
  }

  return cond([
    [
      pipe(get('type'), isEqual('success')),
      () => ({
        title: getOr('', 'name')(getCurrentContent(state)),
        subtitle: translate('Congratulations!'),
        fail: false,
        stars: extractStars(state),
        rank: extractRank(state),
        cta: successCta
      })
    ],
    [
      pipe(get('type'), isEqual('failure')),
      () => ({
        title: translate('Ooops'),
        subtitle: translate('You are out of lives!'),
        fail: true,
        lives: get('state.lives')(progression),
        rank: extractRank(state),
        stars: null,
        cta: {
          title: isCurrentEngineMicrolearning(state)
            ? translate('Retry chapter')
            : translate('Retry level'),
          onClick: () => dispatch(retry)
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

const extractAction = ({translate}, {dispatch}) => state => {
  const recommendations = getRecommendations(state);
  return cond([
    [
      pipe(get('type'), isEqual('success')),
      () => {
        if (get('nextChapter', recommendations)) {
          return {
            type: 'nextCourse',
            description: translate('Check out the next chapter in this course!'),
            prefix: translate('Next chapter_'),
            ...recommendations.nextChapter
          };
        }
        if (get('nextLevel', recommendations)) {
          const _nextLevel = get('nextLevel', recommendations);
          const title = getOr('', 'name')(getCurrentContent(state));
          return {
            type: 'simple',
            prefix: translate('Next level_'),
            title: `${title} - ${_nextLevel.level}`,
            button: {
              title: translate('Next level'),
              href: null,
              onClick: () => dispatch(nextLevel)
            }
          };
        }
      }
    ],
    [
      pipe(get('type'), isEqual('failure')),
      () => ({
        type: 'simple',
        prefix: isCurrentEngineMicrolearning(state)
          ? translate('Retry chapter_')
          : translate('Retry level_'),
        title: getOr('', 'name')(getCurrentContent(state)),
        button: {
          title: isCurrentEngineMicrolearning(state)
            ? translate('Retry chapter')
            : translate('Retry level'),
          onClick: () => dispatch(retry)
        }
      })
    ],
    [constant(true), constant(null)]
  ]);
};

const popinEndStateToProps = (options, store) => state => {
  const {translate} = options;
  const {dispatch} = store;

  const exitNode = getCurrentExitNode(state);

  const footer = {
    title: translate('Back to home'),
    onClick: () => dispatch(exit)
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
