import {cloneDeep} from 'lodash/fp';
import edition from '../../../../../organism/assignment-edition/test/fixtures/published-ongoing';
import header from '../../../../../organism/header-with-actions/test/fixtures/assignment-published-ongoing-changes';
import shell from './custom-skill-edition';

const items = cloneDeep(shell.props.items);
items[2].tabs = items[2].tabs.map(tab =>
  tab.selected
    ? {
        ...tab,
        title: 'Assignments',
        name: 'brand_tab_admin_assignments',
        href: '/brands/7steps/admin/assignments'
      }
    : tab
);
export default {
  props: {
    ...shell.props,
    items,
    header: {...header.props, type: 'header-with-actions'},
    content: {...edition.props, type: 'assignment-edition'}
  }
};
