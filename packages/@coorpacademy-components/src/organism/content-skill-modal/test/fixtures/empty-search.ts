import {cloneDeep, set} from 'lodash/fp';
import ContentSkillListItems from '../../../list-items/test/fixtures/content-skill-empty';
import MultiFilterPanel from '../../../../molecule/multi-filter-panel/test/fixtures/default';
import emptySearchSkillFixture from '../../../filter-checkbox-and-search/test/fixtures/empty-search';
import defaultProps from './default';

const filters = set(
  'options[3].options',
  {...emptySearchSkillFixture.props},
  cloneDeep(MultiFilterPanel.props)
);

export default {
  props: {
    ...defaultProps.props,
    filters,
    contentList: {
      ...ContentSkillListItems.props,
      content: {
        ...ContentSkillListItems.props.content
      }
    }
  }
};
