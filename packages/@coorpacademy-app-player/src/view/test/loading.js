import test from 'ava';
import noop from 'lodash/fp/noop';
import loadingStateToProps from '../loading';
import testRendering from './helpers/render';

const translate = key => `__${key}`;
const commonOptions = {
  translate
};

const toProps = loadingStateToProps(commonOptions, {dispatch: noop});

test('should display loading view', t => {
  const vNode = toProps();
  t.notThrows(() => testRendering(vNode));
});
