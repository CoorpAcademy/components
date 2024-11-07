import {defaultsDeep} from 'lodash/fp';
import Go1BaseBanner from '../../../../../molecule/coorpmanager-base-banner/test/fixtures/default';
import Default, {items} from './default';

const {props} = Default;

const cards = [
  {
    title: 'Upload users',
    description: 'Upload new users on your learning platform.',
    openInNewTab: false,
    feature: 'upload_users',
    href: () => `/brands/mock/admin/user/upload`,
    permissions: ['user']
  },
  {
    title: 'Learning priorities',
    description: 'Manage your company Learning Priorities',
    openInNewTab: false,
    feature: 'learning_priorities',
    href: () => `/brands/mock/animation/massive-battle`,
    permissions: ['user']
  },
  {
    title: 'Organize dashboard',
    description: 'Manage display and order all sections composing the dashboard.',
    openInNewTab: false,
    feature: 'dashboard',
    href: () => `/brands/mock/editorialization/dashboard`,
    permissions: ['user']
  },
  {
    title: 'Manage Users',
    description: 'Manage and edit each of your users.',
    openInNewTab: false,
    feature: 'manage_users',
    href: () => `/brands/mock/admin/user/manage`,
    permissions: ['user']
  }
];

export default {
  props: defaultsDeep(props, {
    items,
    content: {
      type: 'home',
      groups: [],
      header: {
        title: 'Welcome Developer',
        subtitle: 'Welcome to the coorpmanager dashboard'
      },
      banner: Go1BaseBanner.props,
      quickAccessCards: {
        title: 'quick access',
        loading: false,
        cards: {
          list: cards
        }
      }
    }
  })
};
