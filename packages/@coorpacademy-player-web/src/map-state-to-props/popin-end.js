import {
  cond,
  constant,
  get,
  getOr,
  isArray,
  isEqual,
  isEmpty,
  map,
  pick,
  pipe,
  omit,
  isNull
} from 'lodash/fp';

import {
  editComment,
  exit,
  getBestScore,
  getCurrentContent,
  getCurrentExitNode,
  getCurrentProgression,
  getCurrentProgressionId,
  getEndRank,
  getLives,
  getNextContent,
  getRecommendations,
  getStartRank,
  isCommentSent,
  isCurrentEngineLearner,
  isCurrentEngineMicrolearning,
  nextLevel,
  openRecommendation,
  postComment,
  retry,
  seeComment
} from '@coorpacademy/player-store';
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

const comment = ({translate}, {dispatch}) => state => {
  const progressionId = getCurrentProgressionId(state);
  const content = getCurrentContent(state);
  const message = get('ui.comments.text', state);
  return {
    isSent: isCommentSent(state),
    confirmation: {
      commentSectionTitle: translate('Thank you for your review!'),
      confirmationLinkText: translate('See your comment and those of your peers'),
      onClick: e => dispatch(seeComment)
    },
    edition: {
      title: translate('Share your opinion on this course'),
      value: get('ui.comments.text', state),
      postDisabled: isEmpty(get('ui.comments.text', state)),
      onChange: e => dispatch(editComment(e.target.value)),
      onPost: e => dispatch(postComment(progressionId, content, message))
    }
  };
};

const summaryHeader = ({translate}, {dispatch}) => state => {
  const {hide, count} = getLives(state);
  const lives = hide ? null : count;

  /*
   const redirection = getRedirectURLAfterEnd();
   if getRedirectURLAfterEnd() {
      const successCta = {
        title: translate('Continue'),
        // onClick = () => dispatch(redirectContentAfterEnd);
        href: '/'
      };
   }
   */

  // {url} = Location.redirectContent;
  // if non redirectContent

  const successCta = {
    title: translate('Back to home'),
    href: '/'
  };

  // if redirect Content
  /**
   * const successCta = {
    title: translate('Continuer'),
    href: url
  };
   */

  if (isCurrentEngineLearner(state)) {
    // if (isCurrentEngineLearner(state)) { and pas de redirectContent
    const level = get('level', getCurrentContent(state));
    if (level === 'advanced' || level === 'base') {
      const _nextLevel = getNextContent(state);
      if (_nextLevel) {
        successCta.title = translate('Next level');
        successCta.href = null;
        successCta.onClick = () => dispatch(nextLevel);
        successCta.showNextLevel = true;
      }
    }
  }

  return cond([
    [
      pipe(get('type'), isEqual('success')),
      () => ({
        type: 'popinEnd',
        title: getOr('', 'name')(getCurrentContent(state)),
        subtitle: translate('Congratulations!'),
        failed: false,
        stars: extractStars(state),
        rank: extractRank(state),
        cta: successCta
      })
    ],
    [
      pipe(get('type'), isEqual('failure')),
      () => ({
        type: 'popinEnd',
        title: translate('Ooops'),
        subtitle: lives === 0 ? translate('You are out of lives!') : translate('Nice try!'),
        failed: true,
        lives,
        rank: extractRank(state),
        stars: null,
        // si redirectContent => redirect au cours qu'on devait faire
        cta: {
          title: isCurrentEngineMicrolearning(state)
            ? translate('Retry chapter')
            : translate('Retry level'),
          onClick: () => dispatch(retry)
        }
      })
    ],
    [constant(true), constant({type: 'popinEnd'})]
  ]);
};

const extractRecommendation = ({translate}, {dispatch}) => state => {
  const _recommendations = getRecommendations(state);
  const hasRecommendations = isNull(_recommendations) || isArray(_recommendations);

  if (!hasRecommendations) {
    return null;
  }

  const recommendations = map(
    recommendation => ({
      ...recommendation,
      onClick: () => dispatch(openRecommendation(recommendation))
    }),
    _recommendations
  );

  return {
    title: translate('Related subjects'),
    cards: recommendations
  };
};

const extractAction = ({translate}, {dispatch}) => state => {
  const nextContent = getNextContent(state);
  return cond([
    [
      pipe(get('type'), isEqual('success')),
      () => {
        if (get('nextContentType', nextContent) === 'chapter') {
          return {
            type: 'nextCourse',
            description: translate('Check out the next chapter in this course!'),
            prefix: translate('Next chapter_'),
            ...nextContent
          };
        } else if (nextContent) {
          // then it is a level
          const {name, levelTranslation} = nextContent;
          return {
            type: 'simple',
            prefix: translate('Next level_'),
            title: `${name} - ${levelTranslation}`,
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
      () => {
        const currentContent = getCurrentContent(state);
        let title = getOr('', 'name', currentContent);
        if (isCurrentEngineLearner(state)) {
          title = `${getOr('', 'name', currentContent)} - ${getOr(
            '',
            'levelTranslation',
            currentContent
          )}`;
        }
        return {
          type: 'simple',
          prefix: isCurrentEngineMicrolearning(state)
            ? translate('Retry chapter_')
            : translate('Retry level_'),
          title,
          button: {
            title: isCurrentEngineMicrolearning(state)
              ? translate('Retry chapter')
              : translate('Retry level'),
            onClick: () => dispatch(retry)
          }
        };
      }
    ],
    [constant(true), constant(null)]
  ]);
};

const extractFeedback = pipe(
  pick(['title', 'description', 'media', 'mediaDescription']),
  omit(['media.ref', 'media.subtitles', 'media.posters'])
);

const popinEndStateToProps = (options, store) => {
  const headerProps_ = headerProps(options, store);
  const summaryHeader_ = summaryHeader(options, store);
  const extractAction_ = extractAction(options, store);
  const extractRecommendation_ = extractRecommendation(options, store);
  const comment_ = comment(options, store);

  return state => {
    const progression = getCurrentProgression(state);

    const {translate} = options;
    const {dispatch} = store;

    const exitNode = getCurrentExitNode(state);

    const canPostAComment =
      get('type', exitNode) === 'success' && get('engine.ref', progression) === 'learner';

    const footer = {
      title: translate('Back to home'),
      onClick: () => dispatch(exit)
    };

    const props = {
      header: headerProps_(state),
      summary: {
        header: summaryHeader_(state)(exitNode),
        action: extractAction_(state)(exitNode),
        feedback: extractFeedback(exitNode),
        recommendation: extractRecommendation_(state),
        comment: canPostAComment ? comment_(state) : null,
        footer
      }
    };

    return props;
  };
};

export default popinEndStateToProps;
