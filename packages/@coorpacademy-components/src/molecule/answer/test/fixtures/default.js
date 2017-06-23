import FreeText from '../../../../molecule/questions/free-text/test/fixtures/default';

export default {
  props: {
    answer: {
      type: 'freeText',
      ...FreeText.props
    }
  }
};
