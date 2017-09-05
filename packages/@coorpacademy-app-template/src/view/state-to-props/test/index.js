import test from 'ava';
import {INCREMENT, DECREMENT} from '../../../actions';
import createMapStateToProps from '..';

test('should send counter data from state', t => {
  const options = {api: {}};
  const dispatch = () => {};

  const mapStateToProps = createMapStateToProps(options)(dispatch);
  t.is(mapStateToProps({counter: 1}).counter, 1);
  t.is(mapStateToProps({counter: -1}).counter, -1);
  t.is(mapStateToProps({counter: 1000}).counter, 1000);
});

test('should dispatch increment action when calling onIncrement', t => {
  t.plan(1);
  const options = {api: {}};
  const dispatch = action => {
    t.deepEqual(action, {type: INCREMENT});
  };
  const state = {counter: 1};

  const props = createMapStateToProps(options)(dispatch)(state);
  props.onIncrement();
});

test('should dispatch decrement action when calling onIncrement', t => {
  t.plan(1);
  const options = {api: {}};
  const dispatch = action => {
    t.deepEqual(action, {type: DECREMENT});
  };
  const state = {counter: 1};

  const props = createMapStateToProps(options)(dispatch)(state);
  props.onDecrement();
});
