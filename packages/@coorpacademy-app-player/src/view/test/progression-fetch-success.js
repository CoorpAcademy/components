import test from 'ava';
import identity from 'lodash/fp/identity';
import {createSlideStateToProps} from '../slide';
import state from './fixtures/progression-state';

const mapStateToProps = createSlideStateToProps({translate: identity}, {dispatch: identity});

test('should map progression-fetch-success state to props', t => {
  const props = mapStateToProps(state);
  t.is(props.header.lives.count, 3);
  t.is(props.player.step.current, 0);
  t.is(props.player.step.total, 4);
});
