import get from 'lodash/fp/get';
import {getCurrentProgression} from '../../utils/state-extract';

const headerProps = state => {
  return {
    primary: {
      title: 'Du management classique au nouveau blablabla'
    },
    lives: {
      count: get('state.lives')(getCurrentProgression(state))
    }
  };
};

export default headerProps;
