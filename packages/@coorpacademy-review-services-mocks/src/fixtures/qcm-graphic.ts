import type {SlideFromAPI} from '@coorpacademy/review-services';

export const createQcmGraphicSlide = (
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
        'Trust is built by listening to each person and {{sel57565}} to suit their preferences.',
      choices: [
        {
          media: {
            src: [],
            posters: [],
            subtitles: []
          },
          name: 'sel57565',
          type: 'select',
          items: [
            {
              text: 'adapting',
              value: 'sli_4kG7NAVj3.choice_4Jl5AEAEs2',
              _id: '63ee97840284f29dc3f65202'
            },
            {
              text: 'refusing',
              value: 'sli_4kG7NAVj3.choice_VyZ9C4R4j3',
              _id: '63ee97840284f29dc3f65203'
            }
          ],
          _id: '63ee97840284f29dc3f65201',
          id: '63ee97840284f29dc3f65201'
        }
      ],
      answers: [['adapting']]
    },
    type: 'template',
    header: 'How can you make sure that your are building trust and that your team feels heard?',
    explanation: 'Select the right answer in the drop-down menu.',
    medias: medias || []
  },
  klf: 'Trust is built by listening to each person and adapting to suit their preferences. There is also an element of trust that will vary from person to person, which is related to their personality and their early childhood experiences. Therefore, some people will naturally be more trusting than others.',
  tips: 'Make sure that your team has a clear vision about work. This is especially relevant in post pandemic times.',
  hasClue: false,
  parentContentTitle: {
    title: 'Communicating in a hybrid world of work',
    type: 'course'
  },
  universalRef,
  _id: universalRef
});
