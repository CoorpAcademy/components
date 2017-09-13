import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import {getCurrentProgression, getCurrentContent} from '../../utils/state-extract';
const headerProps = (options, store) => state => {
  const content = getCurrentContent(state);
  return {
    backHref: '/',
    primary: {
      title: getOr('', 'name')(content)
    },
    lives: {
      count: get('state.lives')(getCurrentProgression(state))
    }
  };
};

export default headerProps;
