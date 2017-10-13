import getOr from 'lodash/fp/getOr';
import {getLives, getCurrentContent} from '../../utils/state-extract';

const headerProps = (options, store) => state => {
  const content = getCurrentContent(state);
  return {
    backHref: '/',
    primary: {
      title: getOr('', 'name', content)
    },
    lives: {
      count: getLives(state)
    }
  };
};

export default headerProps;
