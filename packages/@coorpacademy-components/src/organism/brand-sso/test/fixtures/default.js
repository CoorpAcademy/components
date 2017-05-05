import Download from '../../../../molecule/brand-download-box/test/fixtures/sso';
import Upload from '../../../../molecule/brand-upload-box/test/fixtures/sso';
import Button from '../../../../atom/button/test/fixtures/sso';
import Inputswitch from '../../../../atom/input-switch/test/fixtures/sso';
import Inputtext from '../../../../atom/input-text/test/fixtures/default';
import Inputcheckbox from '../../../../atom/input-checkbox/test/fixtures/default';

export default {
  props: {
    mainTitle: 'Single Sign On (SSO)',
    /* eslint-disable max-len */
    mainDescription: 'Setup your platform’s single-sign-on method. This lets users connect to the Coorpacademy platform using your compny’s loing/password, adn have seamless integration with their business identity.',
    instruction: 'Follow the steps below to set up your platform’s SSO',
    download: Download.props,
    upload: Upload.props,
    providerTitle: '1. Download Coorpacademy’s Service Provider (SP) Metadata',
    settingTitle: '2. Enter Coorpacademy’s Service Provider (SP) Metadata in your Company’s Identity Provider IdP Settings',
    settingDesc: 'Go to your Company’s IdP Settings and follow the instructions they provide to connect to a Service Provider (in this case, Coorpacademy). Depending on your Idp, you wil either import the SAML Service Provider file that you downloaded Step 1, or manually add the Issuer ID, Callback URL, and PEM Certificate.',
    exportTitle: '3. Export Metadata from your Identity Provider (Idp)',
    exportDesc: 'Get the metadata that Coorpacademy can use to connect to your IdP. Follow your IdP’s instructions for exporting a SAML metadata file.',
    uploadTitle: '4. Upload your Company’s Identity Provider (Idp)',
    uploadDesc: 'This is the information Coorpacademy needs to connect to your IdP as a Service Provider',
    connectionTitle: '5. Test your connection',
    ssoConnection: Button.props,
    attributeTitle: '6. User Attribute Mapping',
    attributeDesc: 'Match Coorpacademy’s attributes to your compny’s. These are the names under which the attributes are stored in your database. If an attribute is left blank, it will not be matched.',
    activateTitle: '7. Activate SSO',
    activate: Inputswitch.props,
    title: 'Activate',
    advancedOptions: 'Advanced options',
    forceAuthorization: {
      ...Inputswitch,
      title: 'Force authorization (forceAuthn)',
      description: 'Toggle this option to force users to re-identify if they reconnect to the platform after having connected to another service'
    },
    disableRequest: {
      ...Inputswitch,
      title: 'Disable Requested Authorization Context',
      description: 'Toggle this option to allow your IdP to use Microsoft Windows sessions as a login (winAuth)'
    },
    skew: {
      ...Inputtext,
      title: 'Clock Skew',
      placeholder: '0'
    },
    skewDesc: 'if you geet an error that says "SAML assertion not yet valid", you can adjust this number (in ms) by trial and error to find a value that allows both servers to synchronize',
    algorithm: 'Hash algorithm',
    rsa1: {
      ...Inputcheckbox,
      title: 'RSA-SHA1'
    },
    rsa2: {
      ...Inputcheckbox,
      title: 'RSA-SHA256'
    },
    rsa3: {
      ...Inputcheckbox,
      title: 'RSA-SHA512'
    },
    binding: 'Binding',
    httppost: {
      ...Inputcheckbox,
      title: 'HTTP_POST'
    },
    httpredirect: {
      ...Inputcheckbox,
      title: 'HTTP_REDIRECT'
    },
    login: {
      ...Inputtext,
      title: 'Unique Login*'
    },
    email: {
      ...Inputtext,
      title: 'Email*'
    },
    fname: {
      ...Inputtext,
      title: 'First Name'
    },
    lname: {
      ...Inputtext,
      title: 'Last Name'
    },
    aprovider: {
      ...Inputtext,
      title: 'Provider'
    },
    language: {
      ...Inputtext,
      title: 'Language'
    },
    country: {
      ...Inputtext,
      title: 'Country'
    },
    mandatory: '*Mandatory'
  }
};
