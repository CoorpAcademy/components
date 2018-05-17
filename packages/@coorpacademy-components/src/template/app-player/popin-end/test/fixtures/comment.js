import defaultsDeep from 'lodash/fp/defaultsDeep';
import correct from './with-recommendations';

export default defaultsDeep(correct, {
  props: {
    summary: {
      header: {
        type: 'popinEnd'
      },
      comment: {
        isSent: false,
        edition: {
          title: 'Donnez votre avis sur ce cours',
          value: '',
          postDisabled: true,
          onPost: () => console.log('onPost'),
          onChange: () => console.log('onChange')
        }
      }
    }
  }
});
