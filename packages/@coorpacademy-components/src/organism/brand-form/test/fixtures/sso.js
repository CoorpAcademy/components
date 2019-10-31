import Download from '../../../../molecule/brand-download-box/test/fixtures/sso';
import Upload from '../../../../molecule/brand-upload-box/test/fixtures/sso';
import Connection from '../../../../atom/button/test/fixtures/sso';

export default {
  props: {
    groups: [
      {
        title: 'Single Sign On (SSO)',
        subtitle:
          'Setup your platform’s single-sign-on method. This lets users connect to the Coorpacademy platform using your compny’s loing/password, adn have seamless integration with their business identity. Follow the steps below to set up your platform’s SSO.'
      },
      {
        title: '1. Download Coorpacademy’s Service Provider (SP) Metadata',
        fields: [
          {
            type: 'downloadbox',
            ...Download.props
          }
        ]
      },
      {
        title:
          '2. Enter Coorpacademy’s Service Provider (SP) Metadata in your Company’s Identity Provider IdP Settings',
        subtitle:
          'Go to your Company’s IdP Settings and follow the instructions they provide to connect to a Service Provider (in this case, Coorpacademy). Depending on your Idp, you wil either import the SAML Service Provider file that you downloaded Step 1, or manually add the Issuer ID, Callback URL, and PEM Certificate.'
      },
      {
        title: '3. Export Metadata from your Identity Provider (Idp)',
        subtitle:
          'Get the metadata that Coorpacademy can use to connect to your IdP. Follow your IdP’s instructions for exporting a SAML metadata file.'
      },
      {
        title: '4. Enter your Company’s Identity Provider (Idp)',
        subtitle:
          'This is the information Coorpacademy needs to connect to your IdP as a Service Provider',
        fields: [
          {
            title: 'Call Back Url*',
            placeholder: 'http://localhost:3000/sso/callback',
            value: '',
            type: 'text',
            description: 'Lorem Ipsum',
            onChange: () => {}
          },
          {
            title: 'entry Point URL*',
            placeholder: 'https://sts-test.adidas-group.com/adfs/ls/',
            value: '',
            type: 'text',
            description:
              'This is the URL users are redirected to when they connect to Coorpacademy so that they can log in to the SSO',
            onChange: () => {}
          },
          {
            title: 'Issuer*',
            placeholder: 'http://localhost:3000',
            value: '',
            type: 'text',
            description: 'Lorem Ipsum',
            onChange: () => {}
          }
        ]
      },
      {
        title: 'Or Upload your Company’s Identity Provider (Idp)',
        subtitle:
          'This is the information Coorpacademy needs to connect to your IdP as a Service Provider',
        fields: [
          {
            type: 'uploadbox',
            ...Upload.props
          }
        ]
      },
      {
        title: '5. Test your connection',
        fields: [
          {
            type: 'button',
            ...Connection.props
          }
        ]
      },
      {
        title: '6. User Attribute Mapping',
        subtitle:
          'Match Coorpacademy’s attributes to your compny’s. These are the names under which the attributes are stored in your database. If an attribute is left blank, it will not be matched.',
        disabled: true,
        fields: [
          {
            title: 'Unique Login*',
            value: '',
            type: 'text',
            description: 'Mandatory',
            onChange: () => {}
          },
          {
            title: 'Email*',
            value: '',
            type: 'text',
            description: 'Mandatory',
            onChange: () => {}
          },
          {
            title: 'First Name',
            value: '',
            type: 'text',
            onChange: () => {}
          },
          {
            title: 'Last Name',
            value: '',
            type: 'text',
            onChange: () => {}
          },
          {
            title: 'Provider',
            value: '',
            type: 'text',
            onChange: () => {}
          },
          {
            title: 'Language',
            value: '',
            type: 'text',
            onChange: () => {}
          },
          {
            title: 'Country',
            value: '',
            type: 'text',
            onChange: () => {}
          }
        ]
      },
      {
        title: '7. Activate SSO',
        fields: [
          {
            title: 'Activate',
            value: false,
            type: 'switch',
            onChange: () => {}
          },
          {
            title: 'Default Route',
            value: false,
            type: 'switch',
            description:
              'Turn this setting on to make the SSO connection the default way to access the platform, rather than the traditionnal Coorpacademy-specific login',
            onChange: () => {}
          }
        ]
      },
      {
        title: 'Advanced Options',
        disabled: true,
        fields: [
          {
            title: 'Hash algorithm',
            value: 'SHA-1',
            values: ['SHA-1', 'SHA-256', 'RSA-SHA512'],
            type: 'select',
            description: 'Lorem Ipsum dolor sit amet.',
            onChange: () => {}
          },
          {
            title: 'Clock skew',
            value: '0',
            type: 'text',
            description:
              'if you geet an error that says "SAML assertion not yet valid", you can adjust this number (in ms) by trial and error to find a value that allows both servers to synchronize',
            onChange: () => {}
          },
          {
            title: 'Binding',
            value: 'HTTP POST',
            values: ['HTTP POST', 'HTTP_REDIRECT'],
            type: 'select',
            description: 'Lorem Ipsum dolor sit amet.',
            onChange: () => {}
          },
          {
            title: 'Force authorization (forceAuthn)',
            value: false,
            type: 'switch',
            description:
              'Toggle this option to force users to re-identify if they reconnect to the platform after having connected to another service',
            onChange: () => {}
          },
          {
            title: 'Disable Requested Authorization Context',
            value: false,
            type: 'switch',
            description:
              'Toggle this option to allow your IdP to use Microsoft Windows sessions as a login (winAuth)',
            onChange: () => {}
          }
        ]
      }
    ],
    onSubmit: () => {},
    submitValue: 'Save changes'
  }
};
