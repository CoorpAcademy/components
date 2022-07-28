import noop from 'lodash/fp/noop';
import {FreeText} from '../../../types/slides';
import {SlideFromAPI} from '../../../types/common';

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

export const freeTextUISlide: FreeText = {
  type: 'freeText',
  placeholder: 'Type here',
  value: undefined,
  onChange: noop
};
