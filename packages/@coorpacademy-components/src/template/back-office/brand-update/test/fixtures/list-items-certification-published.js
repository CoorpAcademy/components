import {defaultsDeep, cloneDeep} from 'lodash/fp';
import listItemsCertification from '../../../../../organism/list-items/test/fixtures/published-certification';
import Default from './default';

const props = cloneDeep(Default.props);
const listItemsCertificationProps = listItemsCertification.props;

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
    title: 'Certification',
    href: '/brands/7steps/admin/custom-playlist/published',
    name: 'brand_tab_admin_custom_playlist',
    selected: true,
    type: 'simpleTab',
    subTabs: [
      {
        title: 'Published',
        href: '/brands/7steps/admin/custom-playlist/published',
        name: 'published',
        permissions: ['published'],
        selected: true,
        type: 'simpleTab'
      },
      {
        title: 'Drafts',
        href: '/brands/7steps/admin/custom-playlist/drafts',
        name: 'drafts',
        permissions: ['drafts'],
        selected: false,
        type: 'simpleTab'
      },
      {
        title: 'Archived',
        href: '/brands/7steps/admin/custom-playlist/archived',
        name: 'archived',
        permissions: ['archived'],
        selected: false,
        type: 'simpleTab'
      }
    ]
  }
];

export default {
  props: defaultsDeep(props, {
    content: {
      ...listItemsCertificationProps,
      type: 'list-content',
      contentType: 'certification'
    }
  })
};
