import {defaultsDeep, cloneDeep} from 'lodash/fp';
import GeneralSettings from '../../../../../organism/brand-form/test/fixtures/general-settings';
import Default from './default';

const props = cloneDeep(Default.props);
const {groups} = GeneralSettings.props;

props.items[0].selected = false;
props.items[1].selected = true;
props.items[1].tabs = [
  {
    title: 'My Platform',
    href: '/brands/7steps/admin/my-platform/general-settings',
    name: 'brand_tab_admin_my_platform',
    selected: true,
    type: 'simpleTab',
    subTabs: [
      {
        title: 'General Settings',
        href: '/brands/7steps/admin/my-platform/general-settings',
        name: 'general-settings',
        permissions: ['general-settings'],
        selected: true,
        type: 'simpleTab'
      },
      {
        title: 'SSO',
        href: '/brands/7steps/admin/my-platform/sso',
        name: 'sso',
        permissions: ['sso'],
        selected: false,
        type: 'simpleTab'
      },
      {
        title: 'Danger Zone',
        href: '/brands/7steps/admin/my-platform/danger-zone',
        name: 'danger-zone',
        permissions: ['danger-zone'],
        selected: false,
        type: 'simpleTab'
      }
    ]
  },
  {
    title: 'User',
    href: '/brands/7steps/admin/user/manage',
    name: 'brand_tab_admin_user',
    selected: false,
    type: 'simpleTab',
    subTabs: [
      {
        title: 'Manage Users',
        href: '/brands/7steps/admin/user/manage',
        name: 'manage',
        permissions: ['list-users'],
        selected: false,
        type: 'simpleTab'
      },
      {
        title: 'Upload Users',
        href: '/brands/7steps/admin/user/upload',
        name: 'upload',
        permissions: ['upload-users'],
        selected: false,
        type: 'simpleTab'
      }
    ]
  },
  {
    title: 'Integration',
    href: '/brands/7steps/admin/integration/lms',
    name: 'brand_tab_admin_integration',
    selected: false,
    type: 'simpleTab',
    subTabs: [
      {
        title: 'LMS',
        href: '/brands/7steps/admin/integration/lms',
        name: 'lms',
        permissions: ['lms'],
        selected: false,
        type: 'simpleTab'
      },
      {
        title: 'Teams',
        href: '/brands/7steps/admin/integration/teams',
        name: 'teams',
        permissions: ['teams'],
        selected: false,
        type: 'simpleTab'
      }
    ]
  }
];

export default {
  props: defaultsDeep(props, {
    content: {
      type: 'form',
      groups
    }
  })
};
