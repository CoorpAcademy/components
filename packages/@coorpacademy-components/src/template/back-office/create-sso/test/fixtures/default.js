import Breadcrumbs from '../../../../../molecule/breadcrumbs/test/fixtures/default';
import BrandTabs from '../../../../../molecule/brand-tabs/test/fixtures/sso';
import Header from '../../../../../organism/setup-header/test/fixtures/default';
import BrandSso from '../../../../../organism/brand-sso/test/fixtures/default';

const {breadcrumbs, links} = Breadcrumbs.props;
const {tabs} = BrandTabs.props;

export default {
  props: {
    header: Header.props,
    breadcrumbs,
    links,
    tabs,
    content: {
      type: 'sso',
      groups: []
    },
    mysso: BrandSso.props
  }
};
