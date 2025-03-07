import {defaultsDeep, cloneDeep} from 'lodash/fp';
import listItemsProps from '../../../../../organism/list-items/test/fixtures/custom-skill';
import Default from './default';

const props = cloneDeep(Default.props);

props.items[0].selected = false;
props.items[2].selected = true;
props.items[2].tabs = [
  {
    title: 'Look & feel',
    href: '/brands/7steps/admin/look-and-feel',
    name: 'brand_tab_admin_look_and_feel',
    selected: false,
    type: 'simpleTab'
  },
  {
    title: 'Content',
    href: '/brands/7steps/admin/content',
    name: 'brand_tab_admin_user',
    selected: false,
    type: 'simpleTab'
  },
  {
    title: 'Dashboard',
    href: '/brands/7steps/admin/user/dashboard',
    name: 'brand_tab_admin_user',
    selected: false,
    type: 'simpleTab'
  },
  {
    title: 'Skills',
    href: '/brands/7steps/admin/custom-skills/published',
    name: 'brand_tab_admin_custom-skills',
    selected: true,
    type: 'simpleTab',
    subTabs: [
      {
        title: 'Published',
        href: '/brands/7steps/admin/custom-skills/published',
        name: 'published',
        permissions: ['published'],
        selected: true,
        type: 'simpleTab',
        status: '6'
      },
      {
        title: 'Drafts',
        href: '/brands/7steps/admin/custom-skills/drafts',
        name: 'drafts',
        permissions: ['drafts'],
        selected: false,
        type: 'simpleTab',
        status: '1'
      },
      {
        title: 'Archived',
        href: '/brands/7steps/admin/custom-skills/archived',
        name: 'archived',
        permissions: ['archived'],
        selected: false,
        type: 'simpleTab',
        status: '3'
      }
    ]
  }
];

export default {
  props: defaultsDeep(props, {
    content: {
      ...listItemsProps.props,
      type: 'list-content'
    }
  })
};
