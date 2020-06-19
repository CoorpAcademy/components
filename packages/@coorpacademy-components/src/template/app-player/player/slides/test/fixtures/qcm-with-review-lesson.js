import Answer from '../../../../../../molecule/answer/test/fixtures/qcm';
import Default from './default';

const answerType = Answer.props;

export default {
  props: {
    ...Default.props,
    typeClue: 'answer',
    answerType,
    showNewMedia: false,
    showReviewLesson: true,
    buttons: [
      {
        title: 'Media',
        type: 'media',
        notify: false,
        onClick: () => console.log('Review Lesson')
      },
      {
        title: 'Clue',
        type: 'clue'
      },
      {
        title: 'Coach',
        type: 'coach'
      }
    ]
  }
};
