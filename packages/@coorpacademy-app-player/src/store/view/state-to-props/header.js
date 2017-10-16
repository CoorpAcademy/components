import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import indexOf from 'lodash/fp/indexOf';
import {
  getContent,
  getCurrentChapterId,
  getEngine,
  getLives,
  getCurrentContent
} from '../../utils/state-extract';
import {back} from '../../actions/ui/location';

const headerContent = (engineRef, state) => {
  const content = getCurrentContent(state);

  switch (engineRef) {
    case 'learner':
      return {
        title: getOr('', 'name')(content),
        details: get('level')(content)
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
      const chapterId = getCurrentChapterId(state);
      const chapter = getContent('chapter', chapterId)(state);
      const level = getCurrentContent(state);
      const chapterIds = get('chapterIds', level);
      const details = chapterId && chapterIds
        ? `${1 + indexOf(chapterId, chapterIds)}/${chapterIds.length}`
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
  return {
    type: engineRef,
    content: {
      onClick: () => dispatch(back),
      ...headerContent(engineRef, state)
    },
    subcontent: headerSubcontent(engineRef, state),
    lives: {
      count: getLives(state)
    }
  };
};

export default headerProps;
