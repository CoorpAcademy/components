import test from 'ava';
import {shouldStartTour} from '..';

const createClient = finished => ({
  isFinished: () => finished
});

test('should start tour when autoStart + not finished', t => {
  const client = createClient(false);
  t.true(shouldStartTour(true, 'a-group', client));
});

test('should not start tour when already finished', t => {
  const client = createClient(true);
  t.false(shouldStartTour(true, 'a-group', client));
});

test('should not start when autoStart disabled even if not finished', t => {
  const client = createClient(false);
  t.false(shouldStartTour(false, 'a-group', client));
});
