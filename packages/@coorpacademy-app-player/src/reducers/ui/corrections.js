import getOr from 'lodash/fp/getOr';
import set from 'lodash/fp/set';
import {UI_TOGGLE_ACCORDION} from '../../actions/ui/corrections';

export default (state = {}, {type, payload, meta}) => {
  switch (type) {
    case UI_TOGGLE_ACCORDION: {
      const {id: tabId} = payload;
      const currentValue = getOr(false, `accordion.${tabId}`, state);
      return set(`accordion.${tabId}`, !currentValue, state);
    }
  }

  return set(`accordion`, [false, false, false], state);
};
