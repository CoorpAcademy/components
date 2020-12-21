import Answer from '../../../../../../molecule/answer/test/fixtures/qcm-arabic';
import Default from './arabic';

const answerType = Answer.props;

export default {
  props: {
    ...Default.props,
    typeClue: 'answer',
    answerType,
    showNewMedia: true,
    buttons: [
      {
        title: 'Media',
        type: 'media',
        notify: true,
        onClick: () => console.log('New Media')
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
