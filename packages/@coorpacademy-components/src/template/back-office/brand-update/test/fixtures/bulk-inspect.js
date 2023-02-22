import ExpandibleErrorsTable from '../../../../../molecule/expandible-errors-table/test/fixtures/default';
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
    isOpen: true,
    selected: true,
    type: 'collapsibleTab',
    tabs: [
      {title: 'Go to Cockpit', href: '#/cockpit', selected: false, type: 'iconLink'},
      {title: 'Bulk Import', href: '#/external-content', selected: true}
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

const contentSteps = [
  {
    title: 'Import',
    done: true
  },
  {
    title: 'Inspect',
    done: false,
    current: true
  }
];
const wizardHeader = {
  title: 'Massive Import',
  onClick: function onClick() {
    return console.log('Close');
  }
};

const notifications = [
  {
    type: 'warning',
    message:
      '1 file out of 3 failed, you can still save the rest of the content. The files in error will be ignored. You will be able to correct them via a subsequent re-upload',
    firstCTALabel: 'Download report',
    firstCTA: function firstCTA() {
      return console.log('first cta');
    }
  }
];

export default {
  props: {
    header,
    items,
    content: {
      content: {
        type: 'expandible-errors-table',
        ...ExpandibleErrorsTable.props
      },
      steps: contentSteps,
      wizardHeader,
      key: 'expandible-errors-table',
      type: 'expandible-errors-table'
    },
    notifications,
    contentFixHeight: true
  }
};
