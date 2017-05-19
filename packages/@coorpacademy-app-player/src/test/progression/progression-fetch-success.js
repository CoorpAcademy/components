import noop from 'lodash/fp/noop';
import test from 'ava';
import {createMapStateToProps} from '../../view';
import state from './state';

const mapStateToProps = createMapStateToProps({})(noop);

test('should map progression-fetch-success state to props', t => {
  const props = mapStateToProps(state);
  t.is(props.header.lives.count, 3);
  t.is(props.player.progression.current, 0);
  t.is(props.player.progression.total, 4);
});
