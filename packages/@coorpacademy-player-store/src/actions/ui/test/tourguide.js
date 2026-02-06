import test from 'ava';
import {hideTourguide, setTourguideStep, showTourguide} from '../tourguide';

test('showTourguide builds action with default forceStart', t => {
  t.deepEqual(showTourguide(2), {
    type: 'ui/tourguide/show',
    payload: {step: 2, forceStart: false}
  });
});

test('showTourguide builds action with forceStart flag', t => {
  t.deepEqual(showTourguide(1, true), {
    type: 'ui/tourguide/show',
    payload: {step: 1, forceStart: true}
  });
});

test('hideTourguide builds action', t => {
  t.deepEqual(hideTourguide(), {type: 'ui/tourguide/hide'});
});

test('setTourguideStep builds action', t => {
  t.deepEqual(setTourguideStep(4), {
    type: 'ui/tourguide/set-step',
    payload: {step: 4}
  });
});
