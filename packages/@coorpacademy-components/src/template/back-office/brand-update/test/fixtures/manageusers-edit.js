import {defaultsDeep} from 'lodash/fp';
import UserEdit from '../../../../../organism/brand-form/test/fixtures/manageusers-edit';
import Users from './default';

const {props} = Users;
const content = UserEdit.props;

export default {
  props: defaultsDeep(props, {
    content: {
      ...content,
      type: 'form'
    },
    items: [
      {
        title: 'Dashboard',
        key: 'dashboard',
        href: '/brands/digital/dashboard',
        name: 'brand_tab_dashboard',
        selected: false,
        tabs: [],
        type: 'simpleTab',
        permissions: []
      },
      {
        title: 'Administration',
        key: 'administration',
        href: '/brands/digital/admin/',
        name: 'brand_tab_admin_my_platform',
        selected: true,
        tabs: [
          {
            title: 'My Platform',
            href: '/brands/digital/admin/my-platform/general-settings',
            name: 'brand_tab_admin_my_platform',
            selected: false,
            type: 'simpleTab',
            subTabs: [
              {
                title: 'General Settings',
                href: '/brands/digital/admin/my-platform/general-settings',
                name: 'general-settings',
                permissions: ['general-settings'],
                selected: false,
                type: 'simpleTab'
              },
              {
                title: 'SSO',
                href: '/brands/digital/admin/my-platform/sso',
                name: 'sso',
                permissions: ['sso'],
                selected: false,
                type: 'simpleTab'
              },
              {
                title: 'Danger Zone',
                href: '/brands/digital/admin/my-platform/danger-zone',
                name: 'danger-zone',
                permissions: ['danger-zone'],
                selected: false,
                type: 'simpleTab'
              }
            ]
          },
          {
            title: 'User',
            href: '/brands/digital/admin/user/manage',
            name: 'brand_tab_admin_user',
            selected: true,
            type: 'simpleTab',
            subTabs: [
              {
                title: 'Manage Users',
                href: '/brands/digital/admin/user/manage',
                name: 'manage',
                permissions: ['list-users'],
                selected: true,
                type: 'simpleTab'
              },
              {
                title: 'Upload Users',
                href: '/brands/digital/admin/user/upload',
                name: 'upload',
                permissions: ['upload-users'],
                selected: false,
                type: 'simpleTab'
              }
            ]
          },
          {
            title: 'Integration',
            href: '/brands/digital/admin/integration/lms',
            name: 'brand_tab_admin_integration',
            selected: false,
            type: 'simpleTab',
            subTabs: [
              {
                title: 'LMS',
                href: '/brands/digital/admin/integration/lms',
                name: 'lms',
                permissions: ['lms'],
                selected: false,
                type: 'simpleTab'
              },
              {
                title: 'Teams',
                href: '/brands/digital/admin/integration/teams',
                name: 'teams',
                permissions: ['teams'],
                selected: false,
                type: 'simpleTab'
              }
            ]
          }
        ],
        type: 'collapsibleTab',
        subTabs: []
      },
      {
        title: 'Editorialization',
        key: 'editorialization',
        href: '/brands/digital/editorialization/',
        name: 'brand_tab_editorialization_look_and_feel',
        selected: false,
        tabs: [
          {
            title: 'Look & Feel',
            href: '/brands/digital/editorialization/look-and-feel',
            name: 'brand_tab_editorialization_look_and_feel',
            permissions: ['look-feel'],
            selected: false,
            type: 'simpleTab',
            subTabs: []
          },
          {
            title: 'Dashboard',
            href: '/brands/digital/editorialization/dashboard',
            name: 'brand_tab_editorialization_dahsboard',
            permissions: ['dashboard'],
            selected: false,
            type: 'simpleTab',
            subTabs: []
          },
          {
            title: 'Content',
            href: '/brands/digital/editorialization/content/subscription',
            name: 'brand_tab_editorialization',
            selected: false,
            type: 'simpleTab',
            subTabs: [
              {
                title: 'Content Subscription',
                href: '/brands/digital/editorialization/content/subscription',
                name: 'content-subscription',
                permissions: ['content-subscribtion'],
                selected: false,
                type: 'simpleTab'
              },
              {
                title: 'Content Settings',
                href: '/brands/digital/editorialization/content/settings',
                name: 'content-settings',
                permissions: ['content-settings'],
                selected: false,
                type: 'simpleTab'
              }
            ]
          },
          {
            title: 'Custom Playlists',
            href: '/brands/digital/editorialization/custom-playlist/published',
            name: 'brand_tab_editorialization_custom_playlists',
            selected: false,
            type: 'simpleTab',
            subTabs: [
              {
                title: 'Published',
                href: '/brands/digital/editorialization/custom-playlist/published',
                name: 'published',
                permissions: ['list-custom-playlist'],
                selected: false,
                type: 'simpleTab'
              },
              {
                title: 'Drafts',
                href: '/brands/digital/editorialization/custom-playlist/draft',
                name: 'drafts',
                permissions: ['list-custom-playlist'],
                selected: false,
                type: 'simpleTab'
              },
              {
                title: 'Archived',
                href: '/brands/digital/editorialization/custom-playlist/archived',
                name: 'archived',
                permissions: ['list-custom-playlist'],
                selected: false,
                type: 'simpleTab'
              }
            ]
          }
        ],
        type: 'collapsibleTab'
      },
      {
        title: 'Animation',
        key: 'animation',
        href: '/brands/digital/animation/',
        name: 'brand_tab_animation',
        selected: false,
        tabs: [
          {
            title: 'Emails',
            href: '/brands/digital/animation/email',
            name: 'email',
            permissions: ['email'],
            selected: false,
            type: 'simpleTab',
            subTabs: []
          },
          {
            title: 'Massive Battle',
            href: '/brands/digital/animation/massive-battle',
            name: 'massive-battle',
            permissions: ['animation-platform'],
            selected: false,
            type: 'simpleTab',
            subTabs: []
          },
          {
            title: 'Forum',
            href: '/brands/digital/animation/forum',
            name: 'forum',
            permissions: ['forum'],
            selected: false,
            type: 'simpleTab',
            subTabs: []
          },
          {
            title: 'CMS',
            href: 'http://digital.mooc:3000/cms/pages',
            name: 'cms',
            permissions: ['cms'],
            selected: false,
            type: 'iconLink',
            subTabs: []
          }
        ],
        type: 'collapsibleTab'
      },
      {
        title: 'Content Creation',
        key: 'contentCreation',
        href: 'https://cockpit.coorpacademy.com/#/platforms?brand=digital',
        name: 'brand_tab_content_creation',
        selected: false,
        tabs: [],
        type: 'iconLink',
        permissions: ['content-creation']
      },
      {
        title: 'Analytics',
        key: 'analytics',
        href: '/brands/digital/analytics/',
        name: 'brand_tab_analytics_settings',
        selected: false,
        tabs: [
          {
            title: 'Settings',
            href: '/brands/digital/analytics/settings',
            name: 'analytics-settings',
            permissions: ['analytics-settings'],
            selected: false,
            type: 'simpleTab',
            subTabs: []
          },
          {
            title: 'Go To Analytics',
            href: 'http://digital.mooc:3000/sso/connect?redirect-to=%2Fanalytics',
            name: 'go_to_analytics',
            permissions: ['go-to-analytics'],
            selected: false,
            type: 'iconLink',
            subTabs: []
          }
        ],
        type: 'collapsibleTab'
      }
    ]
  })
};
