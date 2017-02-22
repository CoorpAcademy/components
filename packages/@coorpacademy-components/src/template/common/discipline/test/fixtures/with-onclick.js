import defaultsDeep from 'lodash/fp/defaultsDeep';
import disciplineScope from '../../../../../molecule/discipline-scope/test/fixtures/with-onclick';
import Default from './default';

const {props} = Default;
const {content, levels} = disciplineScope.props;

export default {
  props: defaultsDeep(props, {
    level: content,
    levels
  })
};
