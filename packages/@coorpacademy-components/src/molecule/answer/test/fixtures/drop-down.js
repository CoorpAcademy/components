import DropDown from '../../../questions/drop-down/test/fixtures/default';

const answerProps = DropDown.props;

export default {
  props: {
    model: {
      type: 'dropDown',
      ...answerProps
    },
    media:
      'https://api-staging.coorpacademy.com/api-service/medias?h=300&w=300&q=90&url=https://user-images.githubusercontent.com/7602475/28273504-db1da18a-6b0e-11e7-97cd-b2e307fc51c7.png'
  }
};
