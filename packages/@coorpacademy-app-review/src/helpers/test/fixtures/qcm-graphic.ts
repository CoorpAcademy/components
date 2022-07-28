import noop from 'lodash/fp/noop';
import {QcmGraphic} from '../../../types/slides';
import {SlideFromAPI} from '../../../types/common';

export const qcmGraphicSlide: SlideFromAPI = {
  id: 'sli_41~RSVclH',
  universalRef: 'sli_41~RSVclH',
  question: {
    type: 'qcmGraphic',
    header: 'sli_41~RSVclH.header',
    explanation: 'sli_41~RSVclH.explanation',
    content: {
      choices: [
        {
          media: {
            type: 'img',
            src: [
              {
                _id: '5fdce726359bf4003ee66997',
                mimeType: 'image/png',
                url: 'med_4JVRrE5gH.mediaUrl_VkBtUV9gB'
              }
            ],
            posters: [],
            subtitles: []
          },
          _id: '5fdce726359bf4003ee66996',
          label: 'sli_41~RSVclH.choice_V1gN0r4qgS',
          value: 'sli_41~RSVclH.choice_V1gN0r4qgS',
          items: []
        },
        {
          media: {
            type: 'img',
            src: [
              {
                _id: '5fdce726359bf4003ee66999',
                mimeType: 'image/png',
                url: 'med_Ek8gIEqxB.mediaUrl_EkcFUEclH'
              }
            ],
            posters: [],
            subtitles: []
          },
          _id: '5fdce726359bf4003ee66998',
          label: 'sli_41~RSVclH.choice_4JlLeLE5lS',
          value: 'sli_41~RSVclH.choice_4JlLeLE5lS',
          items: []
        }
      ]
    }
  },
  clue: 'sli_41~RSVclH.clue',
  klf: 'sli_41~RSVclH.klf',
  tips: 'sli_41~RSVclH.tips'
};

export const qcmGraphicUISlide: QcmGraphic = {
  type: 'qcmGraphic',
  answers: [
    {
      title: 'sli_41~RSVclH.choice_V1gN0r4qgS',
      image: 'med_4JVRrE5gH.mediaUrl_VkBtUV9gB',
      selected: false,
      onClick: noop
    },
    {
      title: 'sli_41~RSVclH.choice_4JlLeLE5lS',
      image: 'med_Ek8gIEqxB.mediaUrl_EkcFUEclH',
      selected: false,
      onClick: noop
    }
  ]
};
