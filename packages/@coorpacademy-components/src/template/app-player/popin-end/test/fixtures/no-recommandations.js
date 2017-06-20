import defaultsDeep from 'lodash/fp/defaultsDeep';
import NoRecommandations
  from '../../../../../organism/app-player/summary/test/fixtures/no-recommandations';
import template from './default';

const summaryProps = NoRecommandations.props;

export default defaultsDeep(template, {
  props: {
    summary: summaryProps
  }
});
