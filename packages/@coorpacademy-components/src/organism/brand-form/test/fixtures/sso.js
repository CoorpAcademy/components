const groups = [
  {
    title: 'Add an SSO configuration',
    fieldsLayout: 'grid',
    fields: [
      {
        type: 'select',
        options: [
          {name: '', value: ''},
          {name: 'SAML', value: 'saml'},
          {name: 'OIDC', value: 'oidc'}
        ]
      },
      {type: 'button', submitValue: 'Add'}
    ]
  },
  {
    title: 'Single Sign On (SSO)',
    subtitle:
      'Setup your platform’s single-sign-on method. This lets users connect to the Coorpacademy platform using your company’s login/password, and have seamless integration with their business identity. \rFollow the steps below to set up your platform’s SSO',
    fields: [
      {
        type: 'slider',
        tabProps: [{title: 'SAML', isOpen: true}],
        slides: [
          {
            fields: [
              {
                title: '1. Download Coorpacademy’s Service Provider (SP) Metadata',
                type: 'downloadbox',
                description:
                  'This is the information your company needs to configure Coorpacademy as a service provider accepted by your IdP',
                href: 'http://up.mooc:3000/sso/metadata.xml',
                submitValue: 'Download Metadata XML'
              },
              {
                title:
                  '2. Enter Coorpacademy’s Service Provider (SP) Metadata in your Company’s Identity Provider (IdP) Settings',
                subtitle:
                  'Go to your Company’s IdP Settings and follow the instructions they provide to connect to a Service Provider (in this case, Coorpacademy). Depending on your Idp, you wil either import the SAML Service Provider file that you downloaded Step 1, or manually add the Issuer ID, Callback URL, and PEM Certificate.',
                type: 'form-group'
              },
              {
                title: '3. Export metadata from your Identity Provider (IdP)',
                subtitle:
                  'Get the metadata that Coorpacademy can use to connect to your IdP. Follow your IdP’s instructions for exporting a SAML metadata file.',
                type: 'form-group'
              },
              {
                title: 'Entrypoint URL',
                type: 'text',
                key: 'payload.sso.saml.entryPoint',
                value: '',
                required: true,
                description:
                  'This is the URL users are redirected to when they connect to Coorpacademy so that they can log in to the SSO',
                error: 'error',
                modified: true
              },
              {
                title: 'PEM Certificate',
                type: 'text',
                key: 'payload.sso.saml.cert',
                value: '',
                required: true,
                description:
                  'This is the certificate (public key) that allows your IdP to connect to Coorpacademy',
                error: 'error',
                modified: true
              },
              {
                type: 'slider',
                tabProps: [{title: 'User fields', isOpen: false}],
                slides: [
                  {
                    fields: [
                      {
                        title: 'Unique Login',
                        type: 'text',
                        key: 'payload.sso.saml.userMapping.uniqueLogin',
                        value: '',
                        required: true,
                        description: 'Mandatory',
                        error: 'error',
                        modified: true
                      },
                      {
                        title: 'Email',
                        type: 'text',
                        key: 'payload.sso.saml.userMapping.emails[0].value',
                        value: '',
                        required: true,
                        description: 'Mandatory',
                        error: 'error',
                        modified: true
                      },
                      {
                        title: 'Last Name',
                        type: 'text',
                        key: 'payload.sso.saml.userMapping.name.familyName',
                        value: '',
                        required: true,
                        description: 'Mandatory',
                        error: 'error',
                        modified: true
                      },
                      {
                        title: 'First Name',
                        type: 'text',
                        key: 'payload.sso.saml.userMapping.name.givenName',
                        value: '',
                        required: true,
                        description: 'Mandatory',
                        error: 'error',
                        modified: true
                      },
                      {
                        title: 'Provider',
                        type: 'text',
                        key: 'payload.sso.saml.userMapping.provider',
                        value: '',
                        required: false,
                        error: '',
                        modified: true
                      },
                      {
                        title: 'Language',
                        type: 'text',
                        key: 'payload.sso.saml.userMapping.language',
                        value: '',
                        required: false,
                        error: '',
                        modified: true
                      }
                    ]
                  }
                ]
              },
              {
                type: 'slider',
                tabProps: [{title: 'Extended fields', isOpen: false}],
                slides: [
                  {
                    fields: [
                      {
                        title: 'Name',
                        type: 'text',
                        key: 'payload.sso.saml.userMapping.organizations[0].name',
                        value: '',
                        required: false,
                        error: '',
                        modified: false
                      },
                      {
                        title: 'Title',
                        type: 'text',
                        key: 'payload.sso.saml.userMapping.organizations[0].title',
                        value: '',
                        required: false,
                        error: '',
                        modified: false
                      },
                      {
                        title: 'Branch',
                        type: 'text',
                        key: 'payload.sso.saml.userMapping.organizations[0].branch',
                        value: '',
                        required: false,
                        error: '',
                        modified: false
                      },
                      {
                        title: 'Business Unit',
                        type: 'text',
                        key: 'payload.sso.saml.userMapping.organizations[0].businessUnit',
                        value: '',
                        required: false,
                        error: '',
                        modified: false
                      },
                      {
                        title: 'Country',
                        type: 'text',
                        key: 'payload.sso.saml.userMapping.organizations[0].workingCountry',
                        value: '',
                        required: false,
                        error: '',
                        modified: false
                      },
                      {
                        title: 'City',
                        type: 'text',
                        key: 'payload.sso.saml.userMapping.organizations[0].workingCity',
                        value: '',
                        required: false,
                        error: '',
                        modified: false
                      },
                      {
                        title: 'Boutique Referent',
                        type: 'text',
                        key: 'payload.sso.saml.userMapping.organizations[0].boutiqueReferent',
                        value: '',
                        required: false,
                        error: '',
                        modified: false
                      },
                      {
                        title: 'Boutique',
                        type: 'text',
                        key: 'payload.sso.saml.userMapping.organizations[0].boutique',
                        value: '',
                        required: false,
                        error: '',
                        modified: false
                      },
                      {
                        title: 'Region',
                        type: 'text',
                        key: 'payload.sso.saml.userMapping.organizations[0].region',
                        value: '',
                        required: false,
                        error: '',
                        modified: false
                      },
                      {
                        title: 'Role',
                        type: 'text',
                        key: 'payload.sso.saml.userMapping.organizations[0].role',
                        value: '',
                        required: false,
                        error: '',
                        modified: false
                      },
                      {
                        title: 'Grade',
                        type: 'text',
                        key: 'payload.sso.saml.userMapping.organizations[0].grade',
                        value: '',
                        required: false,
                        error: '',
                        modified: false
                      },
                      {
                        title: 'Entity',
                        type: 'text',
                        key: 'payload.sso.saml.userMapping.organizations[0].entity',
                        value: '',
                        required: false,
                        error: '',
                        modified: false
                      },
                      {
                        title: 'LMS Id',
                        type: 'text',
                        key: 'payload.sso.saml.userMapping.organizations[0].lmsId',
                        value: '',
                        required: false,
                        error: '',
                        modified: false
                      },
                      {
                        title: 'Extended Field n°1',
                        type: 'text',
                        key: 'payload.sso.saml.userMapping.organizations[0].extendedField1',
                        value: '',
                        required: false,
                        error: '',
                        modified: false
                      },
                      {
                        title: 'Extended Field n°2',
                        type: 'text',
                        key: 'payload.sso.saml.userMapping.organizations[0].extendedField2',
                        value: '',
                        required: false,
                        error: '',
                        modified: false
                      },
                      {
                        title: 'Extended Field n°3',
                        type: 'text',
                        key: 'payload.sso.saml.userMapping.organizations[0].extendedField3',
                        value: '',
                        required: false,
                        error: '',
                        modified: false
                      }
                    ]
                  }
                ]
              },
              {
                title: 'Activate',
                type: 'switch',
                value: false,
                modified: false
              },
              {
                title: 'Default route',
                type: 'switch',
                description:
                  'Turn this setting on to make the SSO connection the default way to access the platform, rather than the traditional Coorpacademy-specific login',
                value: false,
                modified: false
              },
              {
                title: 'Logout url',
                type: 'text',
                key: 'payload.sso.saml.logoutUrl',
                value: '',
                required: false,
                description:
                  'Logging off will redirect you to a page associated with the single sign-on, rather than the classical logout page (related to login)',
                error: '',
                modified: true
              },
              {
                options: [
                  {value: 'sha1', name: 'RSA-SHA1', selected: false},
                  {value: 'sha256', name: 'RSA-SHA256', selected: true},
                  {value: 'sha512', name: 'RSA-SHA512', selected: false}
                ],
                title: 'Hash algorithm',
                type: 'select',
                key: 'payload.sso.saml.signatureAlgorithm',
                value: 'sha256',
                required: true,
                error: false,
                modified: true
              },
              {
                title: 'Clock Skew',
                type: 'text',
                key: 'payload.sso.saml.acceptedClockSkewMs',
                value: '',
                required: false,
                description:
                  'if you get an error that says "SAML assertion not yet valid" or "SAML assertion expired", you can adjust this number (in ms) by trial and error to find a value that allows both servers to synchronize (max: 100 000)',
                error: 'error',
                modified: true
              },
              {
                options: [
                  {value: 'HTTP-REDIRECT', name: 'HTTP-REDIRECT', selected: true},
                  {value: 'HTTP-POST', name: 'HTTP-POST', selected: false}
                ],
                title: 'Binding',
                type: 'select',
                key: 'payload.sso.saml.authnRequestBinding',
                value: 'HTTP-REDIRECT',
                required: true,
                error: false,
                modified: true
              },
              {
                title: 'Force authorization (forceAuthn)',
                type: 'switch',
                disabled: false,
                description:
                  'Toggle this option to force users to re-identify themselves if they reconnect to the platform after having connected to another service',
                value: false,
                modified: false
              },
              {
                title: 'Disable Requested Authorization Context',
                type: 'switch',
                disabled: false,
                description:
                  'Toggle this option to allow your IdP to use Microsoft Windows sessions as a login (winAuth)',
                value: false,
                modified: false
              },
              {
                title: 'Name ID Format',
                type: 'text',
                disabled: false,
                description:
                  'Fill with the format of the Name Identifier (available in the SAML Metadata)',
                value: '',
                modified: false
              }
            ]
          }
        ]
      }
    ]
  }
];

export default {
  props: {
    groups,
    onSubmit: () => {},
    submitValue: 'Save changes'
  }
};
