import defaultsDeep from 'lodash/fp/defaultsDeep';
import correct from './with-recommendations';

export default defaultsDeep(correct, {
  props: {
    summary: {
      comment: {
        title: 'Donnez votre avis sur ce cours',
        isSent: false,
        value: '',
        onPost: () => console.log('onPost'),
        onChange: () => console.log('onChange')
      }
    }
  }
});
