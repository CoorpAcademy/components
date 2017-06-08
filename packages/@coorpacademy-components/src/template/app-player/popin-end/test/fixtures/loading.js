import defaultsDeep from 'lodash/fp/defaultsDeep';
import Loading from '../../../../../organism/app-player/summary/test/fixtures/loading';
import template from './default';

const summaryProps = Loading.props;

export default defaultsDeep(template, {
  props: {
    summary: summaryProps
  }
});
