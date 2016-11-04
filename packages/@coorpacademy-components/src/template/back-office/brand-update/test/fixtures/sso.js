import Breadcrumbs from '../../../../../molecule/breadcrumbs/test/fixtures/default';
import BrandTabs from '../../../../../molecule/brand-tabs/test/fixtures/sso';
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
        title: 'SSO',
        fields: [{
          title: 'Activate',
          value: false,
          type: 'switch',
          description: 'Lorem Ipsum dolor sit amet.',
          onChange: () => {}
        }]
      }, {
        title: 'URLs',
        disabled: true,
        fields: [{
          title: 'Issuer URL',
          value: 'https://www.coorpacademy.com',
          type: 'readonly',
          description: 'Lorem Ipsum dolor sit amet.'
        }, {
          title: 'Entrypoint:',
          value: '',
          type: 'text',
          description: 'Lorem Ipsum dolor sit amet.',
          onChange: () => {}
        }, {
          title: 'Callback URL:',
          value: '',
          type: 'text',
          description: 'Lorem Ipsum dolor sit amet.',
          onChange: () => {}
        }, {
          title: 'Logout URL:',
          value: '',
          type: 'text',
          description: 'Lorem Ipsum dolor sit amet.',
          onChange: () => {}
        }, {
          title: 'Certificat PEM:',
          value: '',
          type: 'text',
          description: 'Lorem Ipsum dolor sit amet.',
          onChange: () => {}
        }]
      }, {
        title: 'Mapping users',
        disabled: true,
        fields: [{
          title: 'Issuer URL',
          value: 'https://www.coorpacademy.com',
          type: 'readonly',
          description: 'Lorem Ipsum dolor sit amet.'
        }, {
          title: 'Login:',
          value: '',
          type: 'text',
          description: 'Lorem Ipsum dolor sit amet.',
          onChange: () => {}
        }, {
          title: 'Email:',
          value: '',
          type: 'text',
          description: 'Lorem Ipsum dolor sit amet.',
          onChange: () => {}
        }, {
          title: 'Display name:',
          value: '',
          type: 'text',
          description: 'Lorem Ipsum dolor sit amet.',
          onChange: () => {}
        }, {
          title: 'Optional mapping:',
          value: '',
          type: 'textarea',
          description: 'Lorem Ipsum dolor sit amet.',
          onChange: () => {}
        }, {
          title: 'Provider name:',
          value: '',
          type: 'text',
          description: 'Lorem Ipsum dolor sit amet.',
          onChange: () => {}
        }]
      }, {
        title: 'Advanced Options',
        disabled: true,
        fields: [{
          title: 'Hash algorithm:',
          value: 'SHA-1',
          values: ['SHA-1', 'SHA-256'],
          type: 'select',
          description: 'Lorem Ipsum dolor sit amet.',
          onChange: () => {}
        }, {
          title: 'Clock skew:',
          value: '',
          type: 'text',
          description: 'Lorem Ipsum dolor sit amet.',
          onChange: () => {}
        }, {
          title: 'Binding:',
          value: 'HTTP POST',
          values: ['HTTP POST', 'HTTP_REDIRECT'],
          type: 'select',
          description: 'Lorem Ipsum dolor sit amet.',
          onChange: () => {}
        }]
      }],
      onSubmit: () => {},
      submitValue: 'Save changes'
    }
  }
};
