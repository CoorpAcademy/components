import type {SlideFromAPI} from '@coorpacademy/review-services';

export const freeTextSlide: SlideFromAPI = {
  question: {
    content: {
      media: {
        src: [],
        posters: [],
        subtitles: []
      },
      label: '',
      placeholder: 'Type here',
      id: 'sli_VJYjJnJhg.choice_1',
      answers: [['Benchmark']]
    },
    type: 'basic',
    header:
      'Which term is used to describe the act of asking what the usual salary is for the position you are applying for?',
    explanation: 'Type your answer.',
    medias: [
      {
        type: 'video',
        src: [
          {
            _id: '63910a48c34a78041f0cad14',
            mimeType: 'application/jwplayer',
            videoId: '489S0B87',
            mediaRef: 'med_Vk0eisjXT'
          }
        ]
      }
    ]
  },
  klf: 'To negotiate your salary when being hired, you have to establish a benchmark beforehand. In other words, you should assess the salary to which you aspire by enquiring about the remuneration paid in the same industry, the same region and the same position.',
  tips: 'According to Insee, Paris salaries are 20-25% higher compared with those of the provinces in 2015.',
  universalRef: 'sli_VJYjJnJhg',
  _id: 'sli_VJYjJnJhg',
  parentContentTitle: {
    title: 'Developing the review app',
    type: 'course'
  }
};
