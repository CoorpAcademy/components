import {defaultsDeep} from 'lodash/fp';
import loading from './loading';

export default defaultsDeep(loading, {
  props: {
    summary: {
      mode: 'scorm',
      header: {
        type: 'popinEnd',
        title: 'Ooops...',
        subtitle: 'Almost, try again !',
        failed: true,
        cta: {title: 'Retry level'}
      },
      action: {
        type: 'simple',
        prefix: 'Retry level:',
        title: 'Boussole managériale - Basic',
        button: {title: 'Retry level'}
      },
      footer: {
        title: 'Back to home'
      }
    }
  }
});
