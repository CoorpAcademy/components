import {defaultsDeep} from 'lodash/fp';
import loading from './loading';

export default defaultsDeep(loading, {
  props: {
    summary: {
      header: {
        type: 'popinEnd',
        title: 'Big Data - Avancé',
        subtitle: 'Congratulations!',
        failed: false
      }
    }
  }
});
