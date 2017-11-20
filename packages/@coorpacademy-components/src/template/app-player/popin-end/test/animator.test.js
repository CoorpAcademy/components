import test from 'ava';
import {
  FIRST_FRAME,
  getTargetedValue,
  updateCounter,
  formatCounter,
  updateChildProps
} from '../animator';
import correctFixture from './fixtures/correct';

test('should return 0 if regex does not match', t => {
  const value = getTargetedValue({foo: '+++5'}, 'foo');

  t.is(value, 0);
});

test('should return 0 if path does not exist', t => {
  const value = getTargetedValue({foo: '+5'}, 'bar');

  t.is(value, 0);
});

test('should return targeted value if regex match', t => {
  const value = getTargetedValue({foo: '+5'}, 'foo');

  t.is(value, 5);
});

test('should return 0 at frame 0', t => {
  const value = updateCounter(100, 0);

  t.is(value, 0);
});

test('should return target after last frame', t => {
  const value = updateCounter(100, {index: FIRST_FRAME + 100});

  t.is(value, 100);
});

test('should not format counter if not present in original props', t => {
  const props = {bar: '+0'};
  const newProps = formatCounter(props, 'foo', 100)(props);

  t.deepEqual(newProps, props);
});

test('should format counter if present in original props', t => {
  const props = {foo: '+0'};
  const newProps = formatCounter(props, 'foo', 100)(props);

  t.deepEqual(newProps, {foo: '+100'});
});

test('should set counters in child props to 0 at first frame', t => {
  const frame = {index: 0};
  const newProps = updateChildProps(correctFixture.props, {frame});

  t.is(newProps.summary.header.stars, '+0');
  t.is(newProps.summary.header.rank, '+0');
});

test('should set counters in child props to target after last frame', t => {
  const frame = {index: FIRST_FRAME + 29};
  const newProps = updateChildProps(correctFixture.props, {frame});

  t.is(newProps.summary.header.stars, '+29');
  t.is(newProps.summary.header.rank, '+5');
});
