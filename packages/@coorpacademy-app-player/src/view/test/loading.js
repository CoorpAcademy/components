import test from 'ava';
import noop from 'lodash/fp/noop';
import {mockTranslate} from '@coorpacademy/translate';
import loadingStateToProps from '../loading';
import testRendering from './helpers/render';

const options = {
  translate: mockTranslate
};

const toProps = loadingStateToProps(options, {dispatch: noop});

test('should display loading view', t => {
  const vNode = toProps();
  t.notThrows(() => testRendering(vNode));
});
