import test from 'ava';
import {
  trackTourguideCompleted,
  trackTourguideDismissed,
  trackTourguideStarted,
  trackTourguideStepViewed
} from '../tourguide-tracking';

test('trackTourguideStarted builds action', t => {
  const stepTracking = {stepRef: 'step-a', stepNumber: 1, totalSteps: 3};
  t.deepEqual(trackTourguideStarted('g', stepTracking), {
    type: 'ui/tourguide/track-started',
    payload: {group: 'g', ...stepTracking}
  });
});

test('trackTourguideStepViewed builds action', t => {
  const stepTracking = {stepRef: 'step-b', stepNumber: 2, totalSteps: 3};
  t.deepEqual(trackTourguideStepViewed('g', stepTracking), {
    type: 'ui/tourguide/track-step-viewed',
    payload: {group: 'g', ...stepTracking}
  });
});

test('trackTourguideCompleted builds action', t => {
  const stepTracking = {stepRef: 'step-c', stepNumber: 3, totalSteps: 3};
  t.deepEqual(trackTourguideCompleted('g', stepTracking), {
    type: 'ui/tourguide/track-completed',
    payload: {group: 'g', ...stepTracking}
  });
});

test('trackTourguideDismissed builds action', t => {
  const stepTracking = {stepRef: 'step-c', stepNumber: 3, totalSteps: 3};
  t.deepEqual(trackTourguideDismissed('g', stepTracking), {
    type: 'ui/tourguide/track-dismissed',
    payload: {group: 'g', ...stepTracking}
  });
});
