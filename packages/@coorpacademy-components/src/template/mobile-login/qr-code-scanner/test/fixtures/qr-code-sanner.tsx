import {noop} from 'lodash/fp';
import type {Props} from '../../index.native';

type Fixture = {props: Props};

const qrCodeScanner: Fixture = {
  props: {
    onScan: noop,
    onHelpPress: noop,
    hasPermission: true,
    locales: {
      title: 'How to access the QR code ?',
      explanation1: 'Log in to your learning platform on a computer',
      explanation2: 'Scan the QR code available on “my account” page',
      ctaHelp: 'Contact our support team',
      titleHelp: 'Need help?'
    }
  }
};

export default qrCodeScanner;
