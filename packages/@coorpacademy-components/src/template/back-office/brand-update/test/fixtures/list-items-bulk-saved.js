import {defaultsDeep, cloneDeep} from 'lodash/fp';
import listItemsImportsSaved from '../../../../../organism/list-items/test/fixtures/imports-saved';
import Default from './default';

const props = cloneDeep(Default.props);
const listItemsImportsSavedProps = listItemsImportsSaved.props;

props.items = [
  {
    title: 'My Dashboard',
    key: 'dashboard',
    href: '#brand/samsung/dashboard',
    open: undefined,
    selected: false,
    type: 'simpleTab'
  },
  {
    title: 'Administration',
    key: 'administration',
    href: '#brand/samsung/administration',
    open: false,
    selected: false,
    type: 'collapsibleTab'
  },
  {
    title: 'Editorialization',
    key: 'editorialization',
    href: '#brand/samsung/editorialization',
    type: 'collapsibleTab',
    open: false,
    selected: false
  },
  {
    title: 'Content Creation',
    key: 'contentCreation',
    href: '#brand/samsung/content-creation',
    isOpen: true,
    selected: true,
    type: 'collapsibleTab',
    tabs: [
      {title: 'Go to Cockpit', href: '#/cockpit', selected: false, type: 'iconLink'},
      {
        title: 'Bulk Import',
        href: '#/external-content',
        selected: true,
        subTabs: [
          {
            title: 'Saved',
            href: '#/external-content/saved',
            name: 'saved-imports',
            permissions: ['list-saved-imports'],
            selected: true,
            status: '2',
            type: 'simpleTab'
          },
          {
            title: 'Pending',
            href: '#/external-content/pending',
            name: 'pending-imports',
            permissions: ['list-pending-imports'],
            selected: false,
            status: '3',
            type: 'simpleTab'
          },
          {
            title: 'Queued',
            href: '#/external-content/pending',
            name: 'pending-imports',
            permissions: ['list-pending-imports'],
            selected: false,
            status: '1',
            type: 'simpleTab'
          }
        ]
      }
    ]
  },
  {
    title: 'Animation',
    key: 'animation',
    href: '#brand/samsung/content-creation',
    selected: false,
    isOpen: true,
    type: 'collapsibleTab'
  },
  {
    title: 'Analytics',
    key: 'analytics',
    href: '#brand/samsung/analytics',
    open: false,
    selected: false,
    type: 'collapsibleTab',
    tabs: [
      {title: 'SSO', href: '#/sso', selected: false, type: 'iconLink'},
      {title: 'Look and Feel', href: '#/look-and-feel', selected: false},
      {title: 'Settings', href: '#/settings', selected: false},
      {title: 'Any', href: '#/any', selected: false},
      {title: 'Many', href: '#/many', selected: false}
    ]
  }
];

export default {
  props: defaultsDeep(props, {
    content: {
      ...listItemsImportsSavedProps,
      type: 'list-content',
      itemType: 'certification'
    }
  })
};
