import {noop} from 'lodash/fp';
import type {Props} from '../../index.native';

type Fixture = {props: Props};

const landing: Fixture = {
  props: {
    onDemoPress: noop,
    onDesktopButtonPress: noop,
    onHelpPress: noop,
    onMobileButtonPress: noop,
    locales: {
      title: 'Welcome!',
      description: 'Enjoy learning new skills on your app anywhere, anytime!',
      ctaQRCode: 'Scan my QR code',
      ctaReceiveMail: 'Receive an email',
      titleHelp: 'Need help?',
      ctaHelp: 'Contact our support team'
    }
  }
};

export default landing;
