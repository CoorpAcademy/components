import Breadcrumbs from '../../../../../molecule/breadcrumbs/test/fixtures/default';
import BrandTabs from '../../../../../molecule/brand-tabs/test/fixtures/lookandfeel';
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
      groups: [{
        title: 'Platform design',
        fields: [{
          title: 'Primary color',
          value: '#ececec',
          placeholder: '#ffffff',
          type: 'color',
          description: 'Lorem ipsum dolor sit amet.',
          onChange: () => {}
        }, {
          title: 'Secondary color',
          value: '#ececec',
          placeholder: '#ffffff',
          type: 'color',
          description: 'Lorem ipsum dolor sit amet.',
          onChange: () => {}
        }, {
          title: 'Tertirary color',
          value: '#ececec',
          placeholder: '#ffffff',
          type: 'color',
          description: 'Lorem ipsum dolor sit amet.',
          onChange: () => {}
        }, {
          title: 'Validation color',
          value: '#ececec',
          placeholder: '#ffffff',
          type: 'color',
          description: 'Lorem ipsum dolor sit amet.',
          onChange: () => {}
        }, {
          title: 'Error color',
          value: '#ff0000',
          placeholder: '#ffffff',
          type: 'color',
          description: 'Lorem ipsum dolor sit amet.',
          onChange: () => {}
        }]
      }],
      onSubmit: () => {},
      submitValue: 'Save changes'
    }
  }
};
