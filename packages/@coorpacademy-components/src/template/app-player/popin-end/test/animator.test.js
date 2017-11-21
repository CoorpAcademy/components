import test from 'ava';
import {
  BEGIN_TIME,
  ANIMATION_PERIOD,
  getTargetedValue,
  updateCounter,
  formatCounter,
  computeSummaryCounters
} from '../animator';
import correctFixture from './fixtures/correct';
import negativeRankFixture from './fixtures/negative-rank';

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

test('should return targeted value if negative regex match', t => {
  const value = getTargetedValue({foo: '-5'}, 'foo');

  t.is(value, -5);
});

test('should return 0 at frame 0', t => {
  const value = updateCounter(100, 0);

  t.is(value, 0);
});

test('should return target after last frame', t => {
  const value = updateCounter(100, {time: BEGIN_TIME + 100 * ANIMATION_PERIOD});

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
  const animation = {time: 0};
  const newProps = computeSummaryCounters(correctFixture.props, {animation});

  t.is(newProps.summary.header.stars, '+0');
  t.is(newProps.summary.header.rank, '+0');
});

test('should set counters in child props to target after last frame', t => {
  const animation = {time: BEGIN_TIME + 29 * ANIMATION_PERIOD};
  const newProps = computeSummaryCounters(correctFixture.props, {animation});

  t.is(newProps.summary.header.stars, '+29');
  t.is(newProps.summary.header.rank, '+5');
});

test('should set counters in child props to target if negative, at first frame', t => {
  const animation = {time: 0};
  const newProps = computeSummaryCounters(negativeRankFixture.props, {animation});

  t.is(newProps.summary.header.stars, '+0');
  t.is(newProps.summary.header.rank, '-5');
});

test('should set counters in child props to target if negative, after last frame', t => {
  const animation = {time: BEGIN_TIME + 29 * ANIMATION_PERIOD};
  const newProps = computeSummaryCounters(negativeRankFixture.props, {animation});

  t.is(newProps.summary.header.stars, '+29');
  t.is(newProps.summary.header.rank, '-5');
});
