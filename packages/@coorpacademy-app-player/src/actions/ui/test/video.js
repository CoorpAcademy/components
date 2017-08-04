import test from 'ava';
import macro from '../../test/helpers/macro';
import {UI_VIDEO_PLAY, UI_VIDEO_PAUSE, UI_VIDEO_ENDED, play, pause, ended} from '../video';

const payload = {
  _id: 'foo'
};

test('should dispatch video play action', macro, {}, t => ({}), play(payload), [
  {
    type: UI_VIDEO_PLAY,
    payload
  }
]);

test('should dispatch video pause action', macro, {}, t => ({}), pause(payload), [
  {
    type: UI_VIDEO_PAUSE,
    payload
  }
]);

test('should dispatch video ended action', macro, {}, t => ({}), ended(payload), [
  {
    type: UI_VIDEO_ENDED,
    payload
  }
]);
