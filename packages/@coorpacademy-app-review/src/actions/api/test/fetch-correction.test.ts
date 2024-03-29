import test from 'ava';
import type {Services} from '@coorpacademy/review-services';
import {getChoicesCorrection} from '@coorpacademy/review-services-mocks';
import type {StoreState} from '../../../reducers';
import {createTestStore} from '../../test/create-test-store';
import {
  CORRECTION_FETCH_FAILURE,
  CORRECTION_FETCH_REQUEST,
  CORRECTION_FETCH_SUCCESS,
  fetchCorrection
} from '../fetch-correction';
import {freeTextSlide} from '../../../views/slides/test/fixtures/free-text';
import {qcmSlide} from '../../../views/slides/test/fixtures/qcm';
import {postAnswerResponses} from '../../../test/fixtures';

const progression = postAnswerResponses[freeTextSlide.universalRef];
const skillRef = '_skill-ref';
const answer = ['Lister vos tâches pour vous libérer l’esprit', 'Vous isoler dans un lieu calme'];

const initialState: StoreState = {
  data: {
    progression,
    slides: {
      [freeTextSlide.universalRef]: freeTextSlide,
      [qcmSlide.universalRef]: qcmSlide
    },
    token: '1234',
    corrections: {},
    rank: {start: 10, end: Number.NaN},
    currentSkill: {ref: skillRef, name: skillRef},
    videos: {}
  },
  ui: {
    showCongrats: false,
    currentSlideRef: freeTextSlide._id,
    navigation: ['slides'],
    answers: {[freeTextSlide.universalRef]: answer},
    positions: [0, 1, 2, 3, 4],
    slide: {
      [freeTextSlide.universalRef]: {
        validateButton: false,
        animateCorrectionPopin: false,
        showCorrectionPopin: false,
        pendingAnswerRequest: false
      }
    },
    showQuitPopin: false,
    showButtonRevising: false
  }
};

test('should dispatch CORRECTION_FETCH_SUCCESS actions when fetchCorrection returns a correction object', async t => {
  t.plan(6);
  const services: {fetchCorrection: Services['fetchCorrection']} = {
    fetchCorrection: (slideRef, token, progressionId, _answer) => {
      t.is(slideRef, freeTextSlide.universalRef);
      t.is(token, '1234');
      t.is(progression._id, progressionId);
      t.is(_answer, answer);
      return Promise.resolve(getChoicesCorrection(slideRef));
    }
  };

  const expectedActions = [
    {
      type: CORRECTION_FETCH_REQUEST,
      meta: {
        slideRef: freeTextSlide.universalRef
      }
    },
    {
      type: CORRECTION_FETCH_SUCCESS,
      payload: getChoicesCorrection(freeTextSlide.universalRef),
      meta: {
        slideRef: freeTextSlide.universalRef
      }
    }
  ];

  const {dispatch} = createTestStore(t, initialState, services, expectedActions);

  await dispatch(fetchCorrection);
});

test('should dispatch CORRECTION_FETCH_FAILURE action when fetchCorrection fails', async t => {
  t.plan(6);
  const services: {fetchCorrection: Services['fetchCorrection']} = {
    fetchCorrection: (slideRef, token, progressionId, _answer) => {
      t.is(slideRef, freeTextSlide.universalRef);
      t.is(token, '1234');
      t.is(progression._id, progressionId);
      t.is(_answer, answer);
      return Promise.reject(new Error('unexpected'));
    }
  };

  const expectedActions = [
    {
      type: CORRECTION_FETCH_REQUEST,
      meta: {
        slideRef: freeTextSlide.universalRef
      }
    },
    {
      type: CORRECTION_FETCH_FAILURE,
      meta: {
        slideRef: freeTextSlide.universalRef
      },
      payload: new Error('unexpected'),
      error: true
    }
  ];

  const {dispatch} = createTestStore(t, initialState, services, expectedActions);

  await dispatch(fetchCorrection);
});
