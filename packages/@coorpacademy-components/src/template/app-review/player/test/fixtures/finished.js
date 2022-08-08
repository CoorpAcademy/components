import omit from 'lodash/fp/omit';
import initialState from './initial-state';

const initialStateProps = initialState.props;

export default {
  props: {
    ...omit(
      ['stepItems', 'finishedSlides', 'uiSlides', 'progression', 'reviewStatus'],
      initialStateProps
    ),
    reviewStatus: 'finished',
    uiSlides: {
      '0': {
        hidden: true,
        position: 0
      },
      '1': {
        hidden: true,
        position: 0
      },
      '2': {
        hidden: true,
        position: 0
      },
      '3': {
        hidden: true,
        position: 0
      },
      '4': {
        hidden: true,
        position: 0
      }
    },
    progression: {
      _id: '62b1d1087aa12f00253f40e3',
      state: {
        isCorrect: true,
        nextContent: {
          type: 'success',
          ref: 'successExitNode'
        }
      }
    },
    finishedSlides: {
      '0': true,
      '1': true,
      '2': true,
      '3': true,
      '4': true
    },
    stepItems: {
      '0': {
        current: false,
        value: '1',
        icon: 'right'
      },
      '1': {
        current: false,
        value: '2',
        icon: 'right'
      },
      '2': {
        current: false,
        value: '3',
        icon: 'right'
      },
      '3': {
        current: false,
        value: '4',
        icon: 'right'
      },
      '4': {
        current: false,
        value: '5',
        icon: 'right'
      }
    }
  }
};
