import Breadcrumbs from '../../../../../molecule/breadcrumbs/test/fixtures/default';
import BrandTabs from '../../../../../molecule/brand-tabs/test/fixtures/default';
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
    subTabs: [
      {title: 'SSO', href: '#/sso', selected: true},
      {title: 'Look and Feel', href: '#/look-and-feel', selected: false},
      {title: 'Settings', href: '#/settings', selected: false},
      {title: 'Any', href: '#/any', selected: false},
      {title: 'Many', href: '#/many', selected: false}
    ],
    content: {
      type: 'form',
      groups: []
    }
  }
};
