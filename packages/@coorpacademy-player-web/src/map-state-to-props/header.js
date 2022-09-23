import {get, getOr, indexOf} from 'lodash/fp';
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
  const {hide, count} = getLives(state);

  return {
    type: engineRef,
    content: {
      ...headerContent(engineRef, state),
      onClick: () => dispatch(back)
    },
    subcontent: headerSubcontent(engineRef, state),
    lives: hide ? false : {count},
    mode: options.mode || 'default'
  };
};

export default headerProps;
