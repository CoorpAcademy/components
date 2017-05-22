import map from 'lodash/fp/map';
import {PROGRESSION_FETCH_REQUEST, PROGRESSION_FETCH_SUCCESS} from '../actions/progressions';
import {ANSWER_CREATE_REQUEST, ANSWER_CREATE_SUCCESS} from '../actions/answers';
import {SLIDE_FETCH_REQUEST, SLIDE_FETCH_SUCCESS} from '../actions/slides';
import {UI_SELECT_PROGRESSION} from '../actions/ui';

export default dispatch =>
  map(dispatch, [
    /**
   *  LOADING PROGRESSION
   */
    {
      type: UI_SELECT_PROGRESSION,
      payload: {
        id: '0'
      }
    },
    {
      type: PROGRESSION_FETCH_REQUEST,
      meta: {
        id: '0'
      }
    },
    {
      type: PROGRESSION_FETCH_SUCCESS,
      payload: {
        content: {
          type: 'slides',
          ref: '0'
        },
        progression: {
          current: 0,
          total: 4
        },
        lives: 3
      },
      meta: {
        id: '0'
      }
    },
    {
      type: SLIDE_FETCH_REQUEST,
      meta: {
        id: '0'
      }
    },
    {
      type: SLIDE_FETCH_SUCCESS,
      payload: {},
      meta: {
        id: '0'
      }
    },

    /**
   *  ANSWERS FIRST SLIDE
   */

    {
      type: ANSWER_CREATE_REQUEST,
      meta: {
        id: '0'
      }
    },
    {
      type: ANSWER_CREATE_SUCCESS,
      payload: {
        content: {
          type: 'slides',
          ref: '1'
        },
        progression: {
          current: 1,
          total: 4
        },
        lives: 3
      },
      meta: {
        id: '0'
      }
    },
    {
      type: SLIDE_FETCH_REQUEST,
      meta: {
        id: '1'
      }
    },
    {
      type: SLIDE_FETCH_SUCCESS,
      payload: {},
      meta: {
        id: '1'
      }
    },

    /**
   *  ANSWERS SECOND SLIDE
   */

    {
      type: ANSWER_CREATE_REQUEST,
      meta: {
        id: '0'
      }
    },
    {
      type: ANSWER_CREATE_SUCCESS,
      payload: {
        content: {
          type: 'slides',
          ref: '2'
        },
        progression: {
          current: 2,
          total: 4
        },
        lives: 2
      },
      meta: {
        id: '0'
      }
    },
    {
      type: SLIDE_FETCH_REQUEST,
      meta: {
        id: '2'
      }
    },
    {
      type: SLIDE_FETCH_SUCCESS,
      payload: {},
      meta: {
        id: '2'
      }
    },

    /**
   *  ANSWERS LAST SLIDE
   */

    {
      type: ANSWER_CREATE_REQUEST,
      meta: {
        id: '0'
      }
    },
    {
      type: ANSWER_CREATE_SUCCESS,
      payload: {
        content: {
          type: 'slides',
          ref: '3'
        },
        progression: {
          current: 3,
          total: 4
        },
        lives: 2
      },
      meta: {
        id: '0'
      }
    },
    {
      type: SLIDE_FETCH_REQUEST,
      meta: {
        id: '3'
      }
    },
    {
      type: SLIDE_FETCH_SUCCESS,
      payload: {},
      meta: {
        id: '3'
      }
    },

    /**
   *  SUCCESS
   */

    {
      type: ANSWER_CREATE_REQUEST,
      meta: {
        id: '0'
      }
    },
    {
      type: ANSWER_CREATE_SUCCESS,
      payload: {
        content: {
          type: 'endpoint'
        },
        progression: {
          current: 4,
          total: 4
        },
        lives: 2,
        success: true
      },
      meta: {
        id: '0'
      }
    }
  ]);
