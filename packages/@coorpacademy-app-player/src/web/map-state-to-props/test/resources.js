import test from 'ava';
import isArray from 'lodash/fp/isArray';
import identity from 'lodash/fp/identity';
import {mockTranslate} from '@coorpacademy/translate';
import {getCurrentSlide} from '../@coorpacademy/player-store/es/utils/state-extract';
import creategetResourcesProps from '../resources';
import unselected from './fixtures/slides/videos';

const options = {translate: mockTranslate};
const store = {dispatch: identity};
const getResourcesProps = creategetResourcesProps(options, store);

const createAssertVideoShape = t => video => {
  t.truthy(video.videoId);
  t.truthy(video.description);
  t.truthy(video.mimeType);
  t.truthy(video.onClick);
};

test('should create list of videos', t => {
  const slide = getCurrentSlide(unselected);
  const props = getResourcesProps(unselected, slide);
  const assertVideoShape = createAssertVideoShape(t);

  t.true(isArray(props));
  t.is(props.length, 2);

  props.forEach(assertVideoShape);
});
