import {cloneDeep} from 'lodash/fp';
import SkillEditionReadonly from '../../../../../organism/skill-edition/test/fixtures/draft-readonly';
import HeaderWithActionsProps from '../../../../../organism/header-with-actions/test/fixtures/default';
import Default from './default';

const items = cloneDeep(Default.props.items);
items[0].selected = false;
items[2].selected = true;
items[2].tabs = [
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
    type: 'simpleTab'
  }
];

// Create readonly header with published state and only archive action
const readonlyHeader = {
  ...HeaderWithActionsProps.props,
  tag: {
    label: 'Published',
    type: 'success',
    size: 'S'
  },
  saveStatus: {
    display: false
  },
  bulletPointMenuButton: null,
  actionButtons: [
    {
      label: 'Archive',
      onClick: 'onClick() {}',
      type: 'secondary',
      iconName: 'folder-open',
      iconColor: '#1D1D2B'
    }
  ]
};

export default {
  props: {
    header: {...readonlyHeader, type: 'header-with-actions'},
    items,
    content: {...SkillEditionReadonly.props, type: 'skill-edition'}
  }
};
