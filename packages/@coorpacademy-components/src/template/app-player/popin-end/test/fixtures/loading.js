import defaultsDeep from 'lodash/fp/defaultsDeep';
import template from './default';

export default defaultsDeep(template, {
  props: {
    summary: {
      header: null,
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
