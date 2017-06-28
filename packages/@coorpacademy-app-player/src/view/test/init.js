import identity from 'lodash/fp/identity';
import test from 'ava';
import {createSlideStateToProps} from '../slide';
import state from './fixtures/init-state';

const mapStateToProps = createSlideStateToProps({translate: identity}, {dispatch: identity});

test('should provide default props to init state', t => {
  const props = mapStateToProps(state);
  t.truthy(props);
  t.truthy(props.header);
  t.truthy(props.player);
});
