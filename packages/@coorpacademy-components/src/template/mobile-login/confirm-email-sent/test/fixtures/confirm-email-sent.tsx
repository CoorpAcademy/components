import {noop} from 'lodash/fp';
import type {Props} from '../../index.native';

type Fixture = {props: Props};

const landing: Fixture = {
  props: {
    onOpenInbox: noop,
    locales: {
      title: 'Welcome!',
      description: 'Enjoy learning new skills on your app anywhere, anytime!',
      ctaQrCode: 'Scan my QR code',
      ctaReceiveMail: 'Receive an email',
      titleHelp: 'Need help?',
      ctaHelp: 'Contact our support team'
    }
  }
};

export default landing;
