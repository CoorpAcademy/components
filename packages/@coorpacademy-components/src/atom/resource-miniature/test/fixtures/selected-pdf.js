import {defaultsDeep} from 'lodash/fp';
import pdf from './pdf';

export default defaultsDeep(pdf, {
  props: {
    selected: true
  }
});
