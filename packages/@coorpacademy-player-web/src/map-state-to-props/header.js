import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import indexOf from 'lodash/fp/indexOf';
import {
  getCurrentChapter,
  getEngine,
  getLives,
  getCurrentContent,
  back
} from '@coorpacademy/player-store';

const headerContent = (engineRef, state) => {
  const content = getCurrentContent(state);

  switch (engineRef) {
    case 'learner':
      return {
        title: getOr('', 'name')(content),
        details: get('levelTranslation')(content)
      };
    case 'microlearning':
    default:
      return {
        title: getOr('', 'name')(content)
      };
  }
};

const headerSubcontent = (engineRef, state) => {
  switch (engineRef) {
    case 'learner': {
      const chapter = getCurrentChapter(state);
      const level = getCurrentContent(state);
      const chapterIds = get('chapterIds', level);
      const details =
        chapter && chapterIds
          ? `${1 + indexOf(chapter._id, chapterIds)}/${chapterIds.length}`
          : null;

      return {
        title: getOr('', 'name', chapter),
        details
      };
    }
    case 'microlearning':
    default:
      return null;
  }
};

const headerProps = (options, {dispatch}) => state => {
  const engine = getEngine(state);
  const {ref: engineRef} = engine;
  const lives = getLives(state);

  return {
    type: engineRef,
    content: {
      onClick: () => dispatch(back),
      ...headerContent(engineRef, state)
    },
    subcontent: headerSubcontent(engineRef, state),
    lives: lives.hide ? null : lives
  };
};

export default headerProps;
