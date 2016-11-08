import Breadcrumbs from '../../../../../molecule/breadcrumbs/test/fixtures/default';
import BrandTabs from '../../../../../molecule/brand-tabs/test/fixtures/users';
import Header from '../../../../../organism/setup-header/test/fixtures/default';

const {breadcrumbs, links} = Breadcrumbs.props;
const {tabs} = BrandTabs.props;

export default {
  props: {
    header: Header.props,
    notifications: [],
    breadcrumbs,
    links,
    tabs,
    content: {
      type: 'list',
      createHref: '',
      search: {
        value: '',
        placeholder: '',
        onChange: () => {}
      },
      pagination: {
        value : '',
        nextHref: '';
        previousHred: ''
      },
      displayOptions: {
        value: '',
        values: ['', '', ''],
        onChange: () => {},
        users: [{
          fields: ['', '', '', ''],
          editHref: () => {}
        }],
        columns: [{
          title: '',
          filtered: false,
          options: [{
            values: [{
              title: 'Sort A -> Z',
              onChange: () => {},
              selected: false
            },
            {
              title: 'Sort Z -> A',
              onChange: () => {},
              selected: false
            }]
          }]
        }]
      }
    }
  }
};
