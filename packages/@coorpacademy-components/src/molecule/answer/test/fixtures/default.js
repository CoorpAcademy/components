import FreeText from '../../../../molecule/questions/free-text/test/fixtures/default';

export default {
  props: {
    model: {
      type: 'freeText',
      ...FreeText.props
    },
    media: 'http://static.coorpacademy.com/content/ijoinchanel/en/slides/1B2_Q6/1B2-Q6-canap-v1.jpg'
  }
};
