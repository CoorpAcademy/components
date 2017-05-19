import noop from 'lodash/fp/noop';
import test from 'ava';
import {createMapStateToProps} from '../../view';
import state from './state';

const mapStateToProps = createMapStateToProps({})(noop);

test('should provide default props to init state', t => {
  const props = mapStateToProps(state);
  t.truthy(props);
  t.truthy(props.header);
  t.truthy(props.player);
});
