import Answer from '../../../../../../molecule/answer/test/fixtures/qcm';
import Default from './default';

const answerType = Answer.props;

export default {
  props: {
    typeClue: 'answer',
    ...Default.props,
    step: {current: 1, total: 6},
    answerType,
    showNewMedia: true,
    buttons: [
      {
        title: 'Media',
        type: 'media',
        notify: true,
        onClick: () => console.log('See lesson')
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
