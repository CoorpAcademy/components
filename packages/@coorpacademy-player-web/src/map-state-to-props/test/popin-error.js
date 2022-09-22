import test from 'ava';

import {identity, omit} from 'lodash/fp';

import mapStateToErrorPopinProps from '../error-popin';

test('should retourn error popin props is isFailure', t => {
  t.plan(2);
  global.window = {
    location: {
      reload: () => {
        t.pass();
      }
    }
  };
  const props = mapStateToErrorPopinProps({dispatch: identity})({
    data: {
      progressions: {
        isFailure: true
      }
    }
  });

  t.deepEqual(omit('firstButton.handleOnclick', props), {
    content: 'An unexpected error has occurred',
    icon: 'AlertDiamond',
    mode: 'alert',
    descriptionText: 'Please reload the page and try again',
    firstButton: {
      largeButton: true,
      label: 'Reload',
      type: 'primary',
      'aria-label': 'Reload'
    }
  });
  props.firstButton.handleOnclick();
});

test('should not retourn error popin props', t => {
  const props = mapStateToErrorPopinProps({dispatch: identity})({});

  t.is(props, undefined);
});
