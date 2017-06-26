import FreeText from '../../../../molecule/questions/free-text/test/fixtures/default';

export default {
  props: {
    question: {
      type: 'freeText',
      ...FreeText.props
    }
  }
};
