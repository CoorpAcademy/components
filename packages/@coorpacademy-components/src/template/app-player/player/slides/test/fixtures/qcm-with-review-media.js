import Answer from '../../../../../../molecule/answer/test/fixtures/qcm';
import Default from './default';

const answerType = Answer.props;

export default {
  props: {
    typeClue: 'answer',
    ...Default.props,
    answerType,
    showNewMedia: false,
    showReviewMedia: true,
    buttons: [
      {
        title: 'Media',
        type: 'media',
        notify: false,
        onClick: () => console.log('Review Media')
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
