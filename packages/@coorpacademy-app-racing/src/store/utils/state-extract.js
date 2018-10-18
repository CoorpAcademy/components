import isNil from 'lodash/fp/isNil';
import countBy from 'lodash/fp/countBy';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import identity from 'lodash/fp/identity';
import last from 'lodash/fp/last';
import pipe from 'lodash/fp/pipe';
import map from 'lodash/fp/map';
import toUpper from 'lodash/fp/toUpper';
import reduce from 'lodash/fp/reduce';
import _toString from 'lodash/fp/toString';

const getId = get('_id');

export const getChapterId = get('chapter_id');
export const getChoices = get('question.content.choices');
export const getCurrentProgressionId = get('ui.current.progressionId');
export const isReadyForNextQuestion = get('ui.current.readyForNextQuestion');
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

export const isStarter = state => {
  const userState = getCurrentUserState(state);
  const questionNum = get('questionNum', userState);
  return questionNum === 1;
};

export const isSpectator = state => {
  if (!getCurrentUserState(state)) {
    return true;
  }
};

export const showLoading = state => {
  return getRoute(state) === 'loading';
};

export const getVictorMembers = state => {
  const race = getCurrentRace(state);
  const progression = getCurrentProgression(state);
  const goal = get('engineOptions.goal', progression);

  const ids = reduce.convert({cap: false})(
    (members, tower, index) => {
      if (members) {
        return members;
      }

      const towerCount = countBy(identity, tower);
      const nbBlocks =
        (towerCount.new || 0) +
        (towerCount.placed || 0) +
        (towerCount.good || 0) +
        (towerCount.drop || 0);

      const gameOver = nbBlocks >= goal;
      if (gameOver) {
        const playerIds = get(['state', 'teams', index, 'players'], progression);
        return playerIds;
      }

      return null;
    },
    null,
    race
  );

  const victors = ids && map(id => getUserState(id, state), ids);
  return victors;
};

export const isGameOver = state => !!getVictorMembers(state);

// -----------------------------------------------------------------------------

export const allTeammatesHaveAnswered = (progression, currentUserId) => {
  const currentUser = get(['state', 'users', currentUserId], progression);
  const team = get('team', currentUser);
  const teammates = get(['state', 'teams', team, 'players'], progression);
  const myQuestionNum = get(['state', 'users', currentUserId, 'questionNum'], progression);

  const _allTeammatesHaveAnswered = reduce(
    (result, playerId) => {
      const player = get(['state', 'users', playerId], progression);
      const teammateQuestionNum = get('questionNum', player);
      return result && myQuestionNum <= teammateQuestionNum;
    },
    true,
    teammates
  );

  return _allTeammatesHaveAnswered;
};

export const isTimerOn = type => get(['ui', 'timer', type]);

const getInitial = name => {
  const init = name.split(' ');
  const firstName = toUpper(init[0].slice(0, 1));
  const lastName = toUpper(init[1].slice(0, 1));
  const initial = firstName + lastName;
  return initial;
};

export const currentTeam = state => {
  const progression = getCurrentProgression(state);
  const userState = getCurrentUserState(state);

  const team = get('team', userState);
  const players = get(['state', 'teams', team, 'players'], progression);
  let questionNumDisplayed = reduce(
    (result, playerId) => {
      const player = getUserState(playerId, state);
      const questionNum = get('questionNum', player);

      return Math.min(result, questionNum);
    },
    1000000,
    players
  );

  if (isReadyForNextQuestion(state)) {
    questionNumDisplayed -= 1;
  }
  return map(playerId => {
    const player = getUserState(playerId, state);

    return {
      isMe: playerId === userState.id,
      isWaitingAnswer: playerId === userState.id && isTimerOn('me')(state),
      name: get('name', player),
      initial: getInitial(get('name', player)),
      color: player.team,
      isCorrect: getOr(null, `allAnswers[${questionNumDisplayed - 1}].isCorrect`, player)
    };
  }, players);
};

export const shouldStartTimerNextQuestion = state => {
  if (isTimerOn('nextQuestion')(state) || isTimerOn('teammateHighlight')(state)) {
    return false;
  }

  const nextQuestion = isReadyForNextQuestion(state);
  return !!nextQuestion;
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
