import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import {getEngine, getLives, getCurrentContent} from '../../utils/state-extract';
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
