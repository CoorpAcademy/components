import Breadcrumbs from '../../../../../molecule/breadcrumbs/test/fixtures/default';
import BrandTabs from '../../../../../molecule/brand-tabs/test/fixtures/default';
import Header from '../../../../../organism/setup-header/test/fixtures/default';

const {breadcrumbs, links} = Breadcrumbs.props;
const {items} = BrandTabs.props;

export default {
  props: {
    header: Header.props,
    notifications: [],
    breadcrumbs,
    links,
    items,
    logo: '',
    content: {
      type: 'form',
      groups: []
    }
  }
};
