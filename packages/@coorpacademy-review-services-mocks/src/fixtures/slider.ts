import type {SlideFromAPI} from '@coorpacademy/review-services';

export const createSliderSlide = (
  universalRef: string,
  medias?: SlideFromAPI['question']['medias']
): SlideFromAPI => ({
  question: {
    content: {
      media: {
        src: [],
        posters: [],
        subtitles: []
      },
      template:
        '<i>Present privilege</i> is {{sel53415}} limited to those who are working in a shared location where they have {{sel96852}} direct access to leaders and managers which is difficult for {{sel42375}} to recreate.',
      choices: [
        {
          media: {
            src: [],
            posters: [],
            subtitles: []
          },
          name: 'sel53415',
          type: 'select',
          items: [
            {
              text: 'an advantage',
              value: 'sli_V1oDNr3C2.choice_NJlZaVr3R3',
              _id: '63ee972b0284f29dc3f439d2'
            },
            {
              text: 'a drawback',
              value: 'sli_V1oDNr3C2.choice_4kZWaVBnRh',
              _id: '63ee972b0284f29dc3f439d3'
            }
          ],
          _id: '63ee972b0284f29dc3f439d1',
          id: '63ee972b0284f29dc3f439d1'
        },
        {
          media: {
            src: [],
            posters: [],
            subtitles: []
          },
          name: 'sel96852',
          type: 'select',
          items: [
            {
              text: 'less',
              value: 'sli_V1oDNr3C2.choice_41xgR4HnA3',
              _id: '63ee972b0284f29dc3f439d5'
            },
            {
              text: 'more',
              value: 'sli_V1oDNr3C2.choice_V1WxCNH2A3',
              _id: '63ee972b0284f29dc3f439d6'
            }
          ],
          _id: '63ee972b0284f29dc3f439d4',
          id: '63ee972b0284f29dc3f439d4'
        },
        {
          media: {
            src: [],
            posters: [],
            subtitles: []
          },
          name: 'sel42375',
          type: 'select',
          items: [
            {
              text: 'office workers',
              value: 'sli_V1oDNr3C2.choice_4yxVJBB202',
              _id: '63ee972b0284f29dc3f439d8'
            },
            {
              text: 'remote workers',
              value: 'sli_V1oDNr3C2.choice_VybVkHS3R3',
              _id: '63ee972b0284f29dc3f439d9'
            }
          ],
          _id: '63ee972b0284f29dc3f439d7',
          id: '63ee972b0284f29dc3f439d7'
        }
      ],
      answers: [['an advantage', 'more', 'remote workers']]
    },
    type: 'template',
    header: 'What does <i>present privilege</i> mean?',
    explanation: 'Select the right answer in the drop-down menus.',
    medias: medias || []
  },
  klf: 'People who are working in the office have more direct access to leaders and managers than remote workers. This advantage is called the <i>present privilege</i>.',
  tips: 'When there is an opportunity to involve another team member in a projet, think “remote first” rather than just going to the people you can see. This will allow avoiding <i>present privilege</i>.',
  hasClue: false,
  parentContentTitle: {
    title: 'Working in a hybrid team',
    type: 'course'
  },

  universalRef,
  _id: universalRef
});
