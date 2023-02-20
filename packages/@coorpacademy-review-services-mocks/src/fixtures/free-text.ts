import type {SlideFromAPI} from '@coorpacademy/review-services';

export const createFreeTextSlide = (
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
      template: 'The first talk of remote working started in the {{sel69354}} {{sel11368}}.',
      choices: [
        {
          media: {
            src: [],
            posters: [],
            subtitles: []
          },
          _id: '63ee97940284f29dc3f6b78c',
          id: '63ee97940284f29dc3f6b78c',
          name: 'sel69354',
          type: 'select',
          items: [
            {
              text: '1950s',
              value: 'sli_41IlNtPvK.choice_NklkdHKwwt',
              _id: '63ee97940284f29dc3f6b78d'
            },
            {
              text: '1970s',
              value: 'sli_41IlNtPvK.choice_E1~y-SFDDF',
              _id: '63ee97940284f29dc3f6b78e'
            },
            {
              text: '1990s',
              value: 'sli_41IlNtPvK.choice_NkJKrYPDF',
              _id: '63ee97940284f29dc3f6b78f'
            }
          ]
        },
        {
          media: {
            src: [],
            posters: [],
            subtitles: []
          },
          name: 'sel11368',
          type: 'select',
          items: [
            {
              text: 'in France',
              value: 'sli_41IlNtPvK.choice_VJgBuBtwPY',
              _id: '63ee97940284f29dc3f6b791'
            },
            {
              text: 'in Japan',
              value: 'sli_41IlNtPvK.choice_V1WHuSFDvF',
              _id: '63ee97940284f29dc3f6b792'
            },
            {
              text: 'in the USA',
              value: 'sli_41IlNtPvK.choice_N1LcHKDwF',
              _id: '63ee97940284f29dc3f6b793'
            }
          ],
          _id: '63ee97940284f29dc3f6b790',
          id: '63ee97940284f29dc3f6b790'
        }
      ],
      answers: [['1950s', 'in the USA']]
    },
    type: 'template',
    header: 'When and where did remote working take its first steps?',
    explanation: 'Select the correct answers from the drop-down menus.',
    medias: medias || []
  },
  klf: 'Remote working took its first steps in the 1950s in the USA. Since then, its legal framework has never ceased to evolve.',
  tips: 'In the United States, remote working has been a subject of study since the 1950s, and the first realistic and promising results were obtained in the 1970s, in particular within the American Telephone & Telegraph Company.',
  hasClue: true,
  parentContentTitle: {
    title: 'Remote Working: From Theory to Best Practices',
    type: 'course'
  },
  universalRef,
  _id: universalRef
});
