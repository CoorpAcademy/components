import defaultsDeep from 'lodash/fp/defaultsDeep';
import Correct from '../../../../../organism/app-player/summary/test/fixtures/correct';
import template from './default';

const summaryProps = Correct.props;

export default defaultsDeep(template, {
  props: {
    summary: summaryProps
  }
});
