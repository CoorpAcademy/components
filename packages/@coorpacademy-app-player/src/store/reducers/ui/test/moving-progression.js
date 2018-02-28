import test from 'ava';
import reducer from '../moving-progression';
import macro from '../../test/helpers/macro';
import {
  PROGRESSION_CREATE_ANSWER_REQUEST,
  PROGRESSION_CREATE_ANSWER_SUCCESS,
  PROGRESSION_CREATE_ANSWER_FAILURE,
  PROGRESSION_EXTRALIFEACCEPTED_REQUEST,
  PROGRESSION_EXTRALIFEACCEPTED_SUCCESS,
  PROGRESSION_EXTRALIFEACCEPTED_FAILURE,
  PROGRESSION_EXTRALIFEREFUSED_REQUEST,
  PROGRESSION_EXTRALIFEREFUSED_SUCCESS,
  PROGRESSION_EXTRALIFEREFUSED_FAILURE
} from '../../../actions/api/progressions';

test('should have initial value', macro, reducer, undefined, {}, {});

test(
  'should set moving progression to true when an answer creation request action has been executed',
  macro,
  reducer,
  {
    progression_0: false,
    progression_1: false
  },
  {
    type: PROGRESSION_CREATE_ANSWER_REQUEST,
    meta: {
      progressionId: 'progression_0'
    }
  },
  {
    progression_0: true,
    progression_1: false
  }
);

test(
  'should set moving progression to false when an answer creation success action has been executed',
  macro,
  reducer,
  {
    progression_0: true,
    progression_1: true
  },
  {
    type: PROGRESSION_CREATE_ANSWER_SUCCESS,
    meta: {
      progressionId: 'progression_0'
    }
  },
  {
    progression_0: false,
    progression_1: true
  }
);

test(
  'should set moving progression to false when an answer creation failure action has been executed',
  macro,
  reducer,
  {
    progression_0: true,
    progression_1: true
  },
  {
    type: PROGRESSION_CREATE_ANSWER_FAILURE,
    meta: {
      progressionId: 'progression_0'
    }
  },
  {
    progression_0: false,
    progression_1: true
  }
);

test(
  'should set moving progression to true when an extra life acceptance request action has been executed',
  macro,
  reducer,
  {
    progression_0: false,
    progression_1: false
  },
  {
    type: PROGRESSION_EXTRALIFEACCEPTED_REQUEST,
    meta: {
      progressionId: 'progression_0'
    }
  },
  {
    progression_0: true,
    progression_1: false
  }
);

test(
  'should set moving progression to false when an extra life acceptance success action has been executed',
  macro,
  reducer,
  {
    progression_0: true,
    progression_1: true
  },
  {
    type: PROGRESSION_EXTRALIFEACCEPTED_SUCCESS,
    meta: {
      progressionId: 'progression_0'
    }
  },
  {
    progression_0: false,
    progression_1: true
  }
);

test(
  'should set moving progression to false when an extra life acceptance failure action has been executed',
  macro,
  reducer,
  {
    progression_0: true,
    progression_1: true
  },
  {
    type: PROGRESSION_EXTRALIFEACCEPTED_FAILURE,
    meta: {
      progressionId: 'progression_0'
    }
  },
  {
    progression_0: false,
    progression_1: true
  }
);

test(
  'should set moving progression to true when an extra life refusal request action has been executed',
  macro,
  reducer,
  {
    progression_0: false,
    progression_1: false
  },
  {
    type: PROGRESSION_EXTRALIFEREFUSED_REQUEST,
    meta: {
      progressionId: 'progression_0'
    }
  },
  {
    progression_0: true,
    progression_1: false
  }
);

test(
  'should set moving progression to false when an extra life refusal success action has been executed',
  macro,
  reducer,
  {
    progression_0: true,
    progression_1: true
  },
  {
    type: PROGRESSION_EXTRALIFEREFUSED_SUCCESS,
    meta: {
      progressionId: 'progression_0'
    }
  },
  {
    progression_0: false,
    progression_1: true
  }
);

test(
  'should set moving progression to false when an extra life refusal failure action has been executed',
  macro,
  reducer,
  {
    progression_0: true,
    progression_1: true
  },
  {
    type: PROGRESSION_EXTRALIFEREFUSED_FAILURE,
    meta: {
      progressionId: 'progression_0'
    }
  },
  {
    progression_0: false,
    progression_1: true
  }
);
