import BulkEmptyDashboard from '../../../../../molecule/bulk-empty-dashboard/test/fixtures/default';
import headerAndMenu from './default';

const {header} = headerAndMenu.props;
const items = [
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
    open: false,
    selected: true,
    type: 'iconLink'
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
  props: {
    header,
    items,
    content: {
      ...BulkEmptyDashboard.props,
      key: 'bulk-empty-dashboard',
      type: 'bulk-empty-dashboard'
    },
    contentFixHeight: true
  }
};
