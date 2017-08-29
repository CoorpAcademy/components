import Answer from '../../../../answer/test/fixtures/qcm';
import Default from './default';

const answerType = Answer.props;

export default {
  props: {
    typeClue: 'answer',
    ...Default.props,
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
