import type {SlideFromAPI} from '@coorpacademy/review-services';

export const createQcmSlide = (
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
      template: 'All of the 7-S elements are {{sel26453}} .',
      choices: [
        {
          media: {
            src: [],
            posters: [],
            subtitles: []
          },
          name: 'sel26453',
          type: 'select',
          items: [
            {
              text: 'interdependent ',
              value: 'sli_N1YPCUx-3.choice_Vygz3CIgdn',
              _id: '63ee974b0284f29dc3f4fea9'
            },
            {
              text: 'independent',
              value: 'sli_N1YPCUx-3.choice_EyZf20Ugd3',
              _id: '63ee974b0284f29dc3f4feaa'
            }
          ],
          _id: '63ee974b0284f29dc3f4fea8',
          id: '63ee974b0284f29dc3f4fea8'
        }
      ],
      answers: [['interdependent ']]
    },
    type: 'template',
    header: 'What is the relationship between the 7-S elements in McKinsey’s model?',
    explanation: 'Select the right answer in the drop-down menu.',
    medias: medias || []
  },
  klf: 'All of the 7-S elements are interdependent. The number one goal of McKinsey’s 7-S model is to maintain alignment of these elements during the change processes. Change to one element may cause a change in others to properly realign them.',
  tips: 'McKinsey & Company is a management consulting company founded in 1926. It is now one of the largest consulting firm in the world.',
  hasClue: false,
  parentContentTitle: {
    title: 'Agility In Times Of Change',
    type: 'course'
  },
  universalRef,
  _id: universalRef
});
