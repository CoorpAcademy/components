import {defaultsDeep} from 'lodash/fp';
import correct from './scorm-correct';

export default defaultsDeep(correct, {
  props: {
    mode: 'scorm',
    summary: {
      header: {
        title: null,
        subtitle: null,
        failed: null
      }
    }
  }
});
