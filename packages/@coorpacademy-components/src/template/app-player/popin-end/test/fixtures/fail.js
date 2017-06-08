import defaultsDeep from 'lodash/fp/defaultsDeep';
import Fail from '../../../../../organism/app-player/summary/test/fixtures/fail';
import template from './default';

const summaryProps = Fail.props;

export default defaultsDeep(template, {
  props: {
    summary: summaryProps
  }
});
