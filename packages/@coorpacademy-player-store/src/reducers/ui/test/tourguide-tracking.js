import test from 'ava';
import reducer from '../tourguide-tracking';
import {
  TOURGUIDE_TRACK_COMPLETED,
  TOURGUIDE_TRACK_DISMISSED,
  TOURGUIDE_TRACK_STARTED,
  TOURGUIDE_TRACK_STEP_VIEWED
} from '../../../actions/ui/tourguide-tracking';
import macro from '../../test/helpers/macro';

test(
  'should initialize tourguide tracking state',
  macro,
  reducer,
  undefined,
  {type: '@@INIT'},
  {lastEvent: null}
);

test(
  'should store last tracking event',
  macro,
  reducer,
  {lastEvent: null},
  {
    type: TOURGUIDE_TRACK_STARTED,
    payload: {group: 'g', stepRef: 'step-a', stepNumber: 1, totalSteps: 3}
  },
  {
    lastEvent: {
      type: TOURGUIDE_TRACK_STARTED,
      payload: {group: 'g', stepRef: 'step-a', stepNumber: 1, totalSteps: 3}
    }
  }
);

test(
  'should update last tracking event for step viewed',
  macro,
  reducer,
  {
    lastEvent: {
      type: TOURGUIDE_TRACK_STARTED,
      payload: {group: 'g', stepRef: 'step-a', stepNumber: 1, totalSteps: 3}
    }
  },
  {
    type: TOURGUIDE_TRACK_STEP_VIEWED,
    payload: {group: 'g', stepRef: 'step-b', stepNumber: 2, totalSteps: 3}
  },
  {
    lastEvent: {
      type: TOURGUIDE_TRACK_STEP_VIEWED,
      payload: {group: 'g', stepRef: 'step-b', stepNumber: 2, totalSteps: 3}
    }
  }
);

test(
  'should update last tracking event for completed/dismissed',
  macro,
  reducer,
  {
    lastEvent: {
      type: TOURGUIDE_TRACK_STEP_VIEWED,
      payload: {group: 'g', stepRef: 'step-b', stepNumber: 2, totalSteps: 3}
    }
  },
  {
    type: TOURGUIDE_TRACK_COMPLETED,
    payload: {group: 'g', stepRef: 'step-c', stepNumber: 3, totalSteps: 3}
  },
  {
    lastEvent: {
      type: TOURGUIDE_TRACK_COMPLETED,
      payload: {group: 'g', stepRef: 'step-c', stepNumber: 3, totalSteps: 3}
    }
  }
);

test(
  'should update last tracking event for dismissed',
  macro,
  reducer,
  {
    lastEvent: {
      type: TOURGUIDE_TRACK_COMPLETED,
      payload: {group: 'g', stepRef: 'step-c', stepNumber: 3, totalSteps: 3}
    }
  },
  {
    type: TOURGUIDE_TRACK_DISMISSED,
    payload: {group: 'g', stepRef: 'step-c', stepNumber: 3, totalSteps: 3}
  },
  {
    lastEvent: {
      type: TOURGUIDE_TRACK_DISMISSED,
      payload: {group: 'g', stepRef: 'step-c', stepNumber: 3, totalSteps: 3}
    }
  }
);
