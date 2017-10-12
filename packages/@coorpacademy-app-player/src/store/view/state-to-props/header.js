import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import {getEngine, getLives, getCurrentContent} from '../../utils/state-extract';

const headerContent = (engineRef, state) => {
  const content = getCurrentContent(state);

  switch (engineRef) {
    case 'learner':
      return {
        title: getOr('', 'name')(content),
        details: get('level')(content)
      };
    case 'microlearning':
      return {
        title: getOr('', 'name')(content)
      };
    default:
      return null;
  }
};

const headerSubcontent = (engineRef, state) => {
  switch (engineRef) {
    case 'learner':
      return {
        title: 'todo get chapter name',
        details: 'todo i/n'
      };
    case 'microlearning':
    default:
      return null;
  }
};

const headerProps = (options, store) => state => {
  const engine = getEngine(state);
  const {ref: engineRef} = engine;
  return {
    type: engineRef,
    content: {
      href: '/',
      ...headerContent(engineRef, state)
    },
    subcontent: headerSubcontent(engineRef, state),
    lives: {
      count: getLives(state)
    }
  };
};

export default headerProps;
