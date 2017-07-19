import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import {getCurrentProgression, getCurrentChapter} from '../../utils/state-extract';

const headerProps = (options, store) => state => {
  return {
    backHref: '/',
    primary: {
      title: getOr('', 'name')(getCurrentChapter(state))
    },
    lives: {
      count: get('state.lives')(getCurrentProgression(state))
    }
  };
};

export default headerProps;
