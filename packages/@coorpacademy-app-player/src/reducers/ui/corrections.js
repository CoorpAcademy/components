import getOr from 'lodash/fp/getOr';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import {UI_TOGGLE_ACCORDION, UI_SELECT_RESOURCE_IN_POPIN} from '../../actions/ui/corrections';
import {UI_SELECT_PROGRESSION} from '../../actions/ui/progressions';

const uiCorrectionsReducer = (state = {}, {type, payload, meta}) => {
  switch (type) {
    case UI_TOGGLE_ACCORDION: {
      const {id: tabId} = payload;
      const currentValue = getOr(false, `accordion.${tabId}`, state);
      return set(`accordion.${tabId}`, !currentValue, state);
    }

    case UI_SELECT_RESOURCE_IN_POPIN: {
      const {id: resourceId} = payload;
      return set('playResource', resourceId, state);
    }

    case UI_SELECT_PROGRESSION: {
      return pipe(set('accordion', [false, false, false]), set('playResource', ''))(state);
    }
  }

  return state;
};

export default uiCorrectionsReducer;
