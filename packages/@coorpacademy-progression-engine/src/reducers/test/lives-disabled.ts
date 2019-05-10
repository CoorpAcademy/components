import test from 'ava';
// @ts-ignore
import {getConfig} from '../../config';
import livesDisabled from '../lives-disabled';
import {moveAction} from './fixtures/actions';
import {microlearning} from './fixtures/engines';

const config = getConfig(microlearning);

test('should return livesDisabled from config', t => {
  t.true(
    livesDisabled({
      ...config,
      livesDisabled: true
    })(undefined, moveAction)
  );
  t.true(
    livesDisabled({
      ...config,
      livesDisabled: true
    })(false, moveAction)
  );
  t.true(
    livesDisabled({
      ...config,
      livesDisabled: true
    })(true, moveAction)
  );
  t.false(
    livesDisabled({
      ...config,
      livesDisabled: false
    })(undefined, moveAction)
  );
  t.false(
    livesDisabled({
      ...config,
      livesDisabled: false
    })(false, moveAction)
  );
  t.false(
    livesDisabled({
      ...config,
      livesDisabled: false
    })(true, moveAction)
  );
});
