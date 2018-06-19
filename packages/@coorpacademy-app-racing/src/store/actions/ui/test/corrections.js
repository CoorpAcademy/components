import test from 'ava';
import macro from '../../test/helpers/macro';
import {selectResource, UI_SELECT_RESOURCE_IN_POPIN} from '../corrections';

test(
  'should set state with selected resource',
  macro,
  {},
  t => ({}),
  selectResource('videoId'),
  [
    {
      type: UI_SELECT_RESOURCE_IN_POPIN,
      payload: {id: 'videoId'}
    }
  ],
  0
);
