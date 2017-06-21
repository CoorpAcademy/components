import noop from 'lodash/fp/noop';
import test from 'ava';
import {slideStateToProps} from '../slide';
import state from './fixtures/init-state';

const mapStateToProps = slideStateToProps({}, noop);

test('should provide default props to init state', t => {
  const props = mapStateToProps(state);
  t.truthy(props);
  t.truthy(props.header);
  t.truthy(props.player);
});
