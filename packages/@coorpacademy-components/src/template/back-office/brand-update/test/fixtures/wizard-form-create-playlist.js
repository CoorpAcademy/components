import WizardForm from '../../../../../organism/wizard-contents/test/fixtures/playlist-general-settings-create';
import headerAndMenu from './default';

const {header, items} = headerAndMenu.props;
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
    title: 'Custom Playlists',
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
        selected: false,
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
const form = WizardForm.props;

export default {
  props: {
    notifications: [],
    header,
    items,
    content: {
      ...form,
      isLoading: false,
      key: 'general-settings',
      type: 'wizard'
    }
  }
};
