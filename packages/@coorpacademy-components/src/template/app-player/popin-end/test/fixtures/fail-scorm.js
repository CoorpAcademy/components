import {defaultsDeep} from 'lodash/fp';
import loading from './loading';

export default defaultsDeep(loading, {
  props: {
    mode: 'scorm',
    summary: {
      header: {
        type: 'popinEnd',
        title: 'Ooops...',
        subtitle: 'Almost, try again !',
        failed: true
      }
    }
  }
});
