import {UI_TOGGLE_ACCORDION} from '../../../corrections';
import {ANSWER_FETCH_REQUEST, ANSWER_FETCH_SUCCESS} from '../../../../api/answers';
import {UI_PROGRESSION_UPDATED} from '../../../progressions';
import {
  SEND_PROGRESSION_ANALYTICS_REQUEST,
  SEND_PROGRESSION_ANALYTICS_SUCCESS
} from '../../../../api/analytics';

export const progressionUpdated = [
  {
    type: UI_PROGRESSION_UPDATED,
    meta: {
      id: 'foo'
    }
  },
  {
    type: SEND_PROGRESSION_ANALYTICS_REQUEST,
    meta: {
      id: 'foo'
    }
  },
  {
    type: SEND_PROGRESSION_ANALYTICS_SUCCESS,
    meta: {
      id: 'foo'
    },
    payload: 'sent'
  }
];

export const accordionIsOpenAt = i => [
  {
    type: UI_TOGGLE_ACCORDION,
    payload: {
      id: i
    }
  }
];

export const fetchCorrection = [
  {
    type: ANSWER_FETCH_REQUEST,
    meta: {
      progressionId: 'foo',
      slideId: 'baz'
    }
  },
  {
    type: ANSWER_FETCH_SUCCESS,
    meta: {
      progressionId: 'foo',
      slideId: 'baz'
    },
    payload: ['Bonne réponse']
  }
];
