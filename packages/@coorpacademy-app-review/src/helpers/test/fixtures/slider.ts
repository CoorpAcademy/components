import noop from 'lodash/fp/noop';
import {SlideFromAPI, UISlide} from '../../../types/common';

export const sliderSlide: SlideFromAPI = {
  id: 'sli_41D5AovN~',
  universalRef: 'sli_41D5AovN~',
  question: {
    type: 'slider',
    header: 'sli_41D5AovN~.header',
    explanation: 'sli_41D5AovN~.explanation',
    content: {
      min: 1,
      max: 10,
      unitLabel: 'sli_41D5AovN~.unitLabel'
    }
  },
  clue: 'sli_41D5AovN~.clue',
  klf: 'sli_41D5AovN~.klf',
  tips: 'sli_41D5AovN~.tips'
};

export const sliderUISlide: Partial<UISlide> = {
  questionText: 'sli_41D5AovN~.header',
  answerUI: {
    help: 'sli_41D5AovN~.explanation',
    model: {
      type: 'slider',
      placeholder: 'sli_41D5AovN~.explanation',
      minLabel: '1 undefined',
      maxLabel: '10 undefined',
      title: '0 sli_41D5AovN~.unitLabel',
      value: -0.1111111111111111,
      onChange: noop
    }
  }
};
