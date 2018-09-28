import isNil from 'lodash/fp/isNil';
import countBy from 'lodash/fp/countBy';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import identity from 'lodash/fp/identity';
import last from 'lodash/fp/last';
import pipe from 'lodash/fp/pipe';
import map from 'lodash/fp/map';
import reduce from 'lodash/fp/reduce';
import _toString from 'lodash/fp/toString';

const getId = get('_id');

export const getChapterId = get('chapter_id');
export const getChoices = get('question.content.choices');
export const getCurrentProgressionId = get('ui.current.progressionId');
export const getCurrentUserId = get(['ui', 'current', 'userId']);

export const getQuestionType = get('question.type');

// -----------------------------------------------------------------------------

export const getProgression = id => state => {
  return get(['data', 'progressions', 'entities', id], state);
};

export const getCurrentProgression = state => {
  const id = getCurrentProgressionId(state);
  return getProgression(id)(state);
};

export const getCurrentRace = state => {
  const id = getCurrentProgressionId(state);
  return get(['ui', 'races', 'entities', id])(state);
};

export const hasReceivedPollingData = state => {
  const id = getCurrentProgressionId(state);
  return !isNil(get(['ui', 'current', id, 'polling'], state));
};

// -----------------------------------------------------------------------------

export const getCurrentEngine = state => {
  const progression = getCurrentProgression(state);
  return get(['engine'], progression);
};

export const getRoute = state => {
  const progressionId = getCurrentProgressionId(state);
  return get(['ui', 'route', progressionId], state);
};

// -----------------------------------------------------------------------------

export const getUserState = (userId, state) => {
  const progression = getCurrentProgression(state);
  return get(['state', 'users', userId], progression);
};

export const getCurrentUserState = state => getUserState(getCurrentUserId(state), state);

export const isLastAnswerCorrect = pipe(
  getCurrentUserState,
  get('allAnswers'),
  last,
  get('isCorrect')
);

export const showQuestion = state => {
  const userState = getCurrentUserState(state);
  const questionNum = get('questionNum', userState);
  const ctaWasClicked = getRoute(state) === 'question';

  return questionNum === 1 || ctaWasClicked;
};

export const isSpectator = state => {
  if (!getCurrentUserState(state)) {
    return true;
  }
};

export const showRace = state => {
  return getRoute(state) === 'race';
};

export const showLoading = state => {
  return getRoute(state) === 'loading';
};

export const showGameOver = state => {
  const race = getCurrentRace(state);
  const progression = getCurrentProgression(state);
  const goal = get('engineOptions.goal', progression);

  return reduce(
    (result, tower) => {
      const towerCount = countBy(identity, tower);
      const nbBlocks = (towerCount.new || 0) + (towerCount.placed || 0);

      return result || nbBlocks >= goal;
    },
    false,
    race
  );
};

// -----------------------------------------------------------------------------

export const allTeammatesHaveAnswered = state => {
  const progression = getCurrentProgression(state);
  const userState = getCurrentUserState(state);
  const userQuestionNum = get('questionNum', userState);
  const team = get('team', userState);
  const teammates = get(['state', 'teams', team, 'players'], progression);

  return reduce(
    (result, playerId) => {
      const player = getUserState(playerId, state);
      const questionNum = get('questionNum', player);

      return result && userQuestionNum <= questionNum;
    },
    true,
    teammates
  );
};

export const isTimerOn = type => get(['ui', 'timer', type]);

export const currentTeam = state => {
  const progression = getCurrentProgression(state);
  const userState = getCurrentUserState(state);

  const team = get('team', userState);
  const players = get(['state', 'teams', team, 'players'], progression);
  let questionNumToWaitFor = reduce(
    (result, playerId) => {
      const player = getUserState(playerId, state);
      const questionNum = get('questionNum', player);

      return Math.min(result, questionNum);
    },
    1000000,
    players
  );

  if (isTimerOn('last')(state)) {
    questionNumToWaitFor -= 1;
  }

  return map(playerId => {
    const player = getUserState(playerId, state);

    return {
      isMe: playerId === userState.id,
      isWaitingAnswer: playerId === userState.id && isTimerOn('me')(state),
      name: get('name', player),
      avatar: get('avatar', player),
      isCorrect: getOr(null, `allAnswers[${questionNumToWaitFor - 1}].isCorrect`, player)
    };
  }, players);
};

// -----------------------------------------------------------------------------

export const getAnswers = state => {
  const progressionId = getCurrentProgressionId(state);
  return getOr({}, ['ui', 'answers', progressionId])(state);
};

export const getAnswerValues = (slide, state) => {
  const answers = get('value', getAnswers(state));
  const defaultValue = get('question.content.defaultValue', slide);
  if (answers === undefined && defaultValue !== undefined) {
    return [_toString(defaultValue)];
  }
  return answers;
};

export const getSlide = id => get(['data', 'contents', 'slide', 'entities', id]);

export const getCurrentSlide = state => {
  const id = get('nextContent.ref')(getCurrentUserState(state));
  return getSlide(id)(state);
};

export const getProgressionContent = state => {
  return get('content')(getCurrentProgression(state));
};

export const getContent = (type, ref) => get(['data', 'contents', type, 'entities', ref]);

export const getCurrentContent = state => {
  const {type, ref} = getProgressionContent(state);
  return getContent(type, ref)(state);
};

export const getContentInfo = pipe(getCurrentContent, get('info'));
export const getNbSlides = pipe(getContentInfo, get('nbSlides'));
export const getStepContent = pipe(getCurrentUserState, get('nextContent'));
export const getPrevStepContent = pipe(getCurrentUserState, get('content'));
export const getCurrentChapterId = pipe(getCurrentSlide, getChapterId);

export const getEngine = state => {
  return get('engine')(getCurrentProgression(state));
};

export const getEngineConfig = state => {
  const engine = getEngine(state);
  return get(['data', 'configs', 'entities', `${engine.ref}@${engine.version}`], state);
};

export const getPreviousSlide = state => {
  const id = get('content.ref')(getCurrentUserState(state));
  return getSlide(id)(state);
};

export const getExitNode = ref => state => {
  const entities = get('data.exitNodes.entities')(state);
  return get(ref)(entities);
};

export const getCurrentExitNode = state => {
  const ref = get('nextContent.ref')(getCurrentUserState(state));
  return getExitNode(ref)(state);
};

export const getCorrection = (progressionId, slideId) => state => {
  return get(['data', 'answers', 'entities', progressionId, slideId], state);
};
export const getCurrentCorrection = state => {
  const progression = getCurrentProgression(state);
  const slide = getPreviousSlide(state);

  return getCorrection(getId(progression), getId(slide))(state);
};

export const getQuestionMedia = state => {
  const slide = getCurrentSlide(state);
  const media = get('question.medias.0', slide);
  if (!media) {
    return;
  }
  const {type} = media;
  const resource = get('src.0', media);
  switch (type) {
    case 'img':
      return {
        type,
        url: resource.url
      };
    case 'video':
      return {
        ...resource,
        type
      };
  }
};
