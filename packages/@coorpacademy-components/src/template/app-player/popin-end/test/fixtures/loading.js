import {defaultsDeep} from 'lodash/fp';
import template from './default';

export default defaultsDeep(template, {
  props: {
    summary: {
      header: {
        type: 'popinEnd'
      },
      action: null
      // feedback: {
      //   title: 'Donnez votre avis sur ce cours',
      //   value: '',
      //   onChange: value => {},
      //   sumitValue: 'Post',
      //   onSumbit: () => {},
      //   sent: false
      // },
    }
  }
});
