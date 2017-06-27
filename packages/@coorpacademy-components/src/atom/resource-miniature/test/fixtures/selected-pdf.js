import defaultsDeep from 'lodash/fp/defaultsDeep';
import pdf from './pdf';

export default defaultsDeep(pdf, {
  props: {
    selected: true
  }
});
