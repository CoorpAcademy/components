import noop from 'lodash/fp/noop';
import test from 'ava';
import {createMapStateToProps} from '..';
import state from './fixtures/progression-state';

const mapStateToProps = createMapStateToProps({})(noop);

test('should map progression-fetch-success state to props', t => {
  const props = mapStateToProps(state);
  t.is(props.header.lives.count, 3);
  t.is(props.player.step.current, 0);
  t.is(props.player.step.total, 4);
});
