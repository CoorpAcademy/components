import {defaultsDeep} from 'lodash/fp';
import base from './default';

export default defaultsDeep(base, {
  props: {
    summary: {
      header: {
        type: 'popinEnd'
      },
      comment: {
        header: null,
        action: null,
        title: 'Donnez votre avis sur ce cours',
        isSent: false,
        edition: {
          value: '',
          onPost: () => console.log('onPost'),
          onChange: () => console.log('onChange')
        }
      }
    }
  }
});
