import {noop} from 'lodash/fp';
import type {Props} from '../../index.native';

type Fixture = {props: Props};

const receiveEmail: Fixture = {
  props: {
    onClose: noop,
    locales: {
      title: 'Receive a magic link by email',
      explanation:
        'To receive a link by email and access the app automatically, please fill in your professional email address:',
      subtitle: 'Professional email address',
      cta: 'Send'
    }
  }
};

export default receiveEmail;
