import noop from 'lodash/fp/noop';
import {GestureResponderEvent} from 'react-native';

const mockedGestureEvent: GestureResponderEvent = {
  target: 0,
  type: '',
  currentTarget: 0,
  bubbles: false,
  cancelable: false,
  defaultPrevented: false,
  eventPhase: 0,
  isTrusted: false,
  preventDefault: noop,
  isDefaultPrevented: () => false,
  stopPropagation: noop,
  isPropagationStopped: () => true,
  persist: noop,
  timeStamp: 0,
  nativeEvent: {
    changedTouches: [],
    identifier: 'fake',
    locationX: 0,
    locationY: 0,
    pageX: 0,
    pageY: 0,
    target: '',
    timestamp: 0,
    touches: []
  }
};

export default mockedGestureEvent;
