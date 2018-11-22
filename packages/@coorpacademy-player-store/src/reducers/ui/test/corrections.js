import test from 'ava';
import reducer from '../corrections';
import {UI_TOGGLE_ACCORDION, UI_SELECT_RESOURCE_IN_POPIN} from '../../../actions/ui/corrections';
import {UI_SELECT_PROGRESSION} from '../../../actions/ui/progressions';
import macro from '../../test/helpers/macro';

test(
  'should close all accordion tabs',
  macro,
  reducer,
  {},
  {
    type: UI_SELECT_PROGRESSION
  },
  {
    accordion: [false, false, false],
    playResource: ''
  }
);

test(
  'should set second accordion tab to open',
  macro,
  reducer,
  {},
  {
    type: UI_TOGGLE_ACCORDION,
    payload: {
      id: 2
    }
  },
  {
    accordion: [undefined, undefined, true]
  }
);

test(
  'should set the resource to play',
  macro,
  reducer,
  {
    accordion: [false, false, false],
    playResource: 'video2'
  },
  {
    type: UI_SELECT_RESOURCE_IN_POPIN,
    payload: {
      id: 'video1'
    }
  },
  {
    accordion: [false, false, false],
    playResource: 'video1'
  }
);
