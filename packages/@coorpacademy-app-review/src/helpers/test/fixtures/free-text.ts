import noop from 'lodash/fp/noop';
import {SlideFromAPI, UISlide} from '../../../types/common';

export const freeTextSlide: SlideFromAPI = {
  id: 'sli_E1Pcl-XAYbi',
  universalRef: 'sli_E1Pcl-XAYbi',
  question: {
    type: 'basic',
    header: 'sli_E1Pcl-XAYbi.header',
    explanation: 'sli_E1Pcl-XAYbi.explanation',
    content: {
      label: 'sli_E1Pcl-XAYbi.label',
      placeholder: 'sli_E1Pcl-XAYbi.placeholder',
      id: 'sli_E1Pcl-XAYbi.choice_1'
    }
  },
  clue: 'sli_E1Pcl-XAYbi.clue',
  klf: 'sli_E1Pcl-XAYbi.klf',
  tips: 'sli_E1Pcl-XAYbi.tips'
};

export const freeTextUISlide: Partial<UISlide> = {
  answerUI: {
    help: 'sli_E1Pcl-XAYbi.explanation',
    model: {
      type: 'freeText',
      placeholder: 'Type here',
      value: undefined,
      onChange: noop
    }
  },
  questionText: 'sli_E1Pcl-XAYbi.header'
};
