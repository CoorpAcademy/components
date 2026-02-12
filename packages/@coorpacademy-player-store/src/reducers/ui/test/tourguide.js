import test from 'ava';
import reducer from '../tourguide';
import {HIDE_TOURGUIDE, SET_TOURGUIDE_STEP, SHOW_TOURGUIDE} from '../../../actions/ui/tourguide';
import macro from '../../test/helpers/macro';

test(
  'should initialize tourguide state',
  macro,
  reducer,
  undefined,
  {type: '@@INIT'},
  {
    visible: false,
    step: 0,
    hasTourGuideBeenShown: false,
    forceStart: false
  }
);

test(
  'should show tourguide and set step',
  macro,
  reducer,
  {
    visible: false,
    step: 0,
    hasTourGuideBeenShown: false,
    forceStart: false
  },
  {type: SHOW_TOURGUIDE, payload: {step: 2}},
  {
    visible: true,
    step: 2,
    hasTourGuideBeenShown: true,
    forceStart: false
  }
);

test(
  'should keep previous step when show payload is missing step',
  macro,
  reducer,
  {
    visible: false,
    step: 3,
    hasTourGuideBeenShown: false,
    forceStart: false
  },
  {type: SHOW_TOURGUIDE, payload: {}},
  {
    visible: true,
    step: 3,
    hasTourGuideBeenShown: true,
    forceStart: false
  }
);

test(
  'should hide tourguide without resetting step',
  macro,
  reducer,
  {
    visible: true,
    step: 3,
    hasTourGuideBeenShown: true,
    forceStart: false
  },
  {type: HIDE_TOURGUIDE},
  {
    visible: false,
    step: 3,
    hasTourGuideBeenShown: true,
    forceStart: false
  }
);

test(
  'should update tourguide step',
  macro,
  reducer,
  {
    visible: true,
    step: 1,
    hasTourGuideBeenShown: true,
    forceStart: false
  },
  {type: SET_TOURGUIDE_STEP, payload: {step: 4}},
  {
    visible: true,
    step: 4,
    hasTourGuideBeenShown: true,
    forceStart: false
  }
);

test(
  'should keep previous step when set step payload is invalid',
  macro,
  reducer,
  {
    visible: true,
    step: 2,
    hasTourGuideBeenShown: true,
    forceStart: false
  },
  {type: SET_TOURGUIDE_STEP, payload: {step: '3'}},
  {
    visible: true,
    step: 2,
    hasTourGuideBeenShown: true,
    forceStart: false
  }
);
