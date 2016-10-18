import Breadcrumbs from '../../../../../molecule/breadcrumbs/test/fixtures/default';
import BrandTabs from '../../../../../molecule/brand-tabs/test/fixtures/default';

const {breadcrumbs, links} = Breadcrumbs.props;
const {tabs} = BrandTabs.props;

export default {
  props: {
    notifications: [],
    breadcrumbs,
    links,
    tabs,
    content: {
      groups: [{
        title: 'Platform Name',
        fields: [{
          title: 'Domain name',
          value: 'samsung.coorpacademy.com',
          type: 'readonly'
        }, {
          title: 'Platform name',
          value: 'Samsung',
          type: 'readonly'
        }]
      },
      {
        title: 'Forum',
        fields: [{
          title: 'Activate',
          value: false,
          type: 'switch',
          description: 'Lorem Ipsum dolor sit amet.',
          onChange: () => {}
        }]
      }, {
        title: 'Danger Zone',
        fields: [{
          title: 'Delete Platform',
          type: 'doublestep',
          description: 'Deleting your platform is irreversible!',
          onChange: () => {}
        }]
      }]
    }
  }
};
