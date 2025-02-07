import {noop} from 'lodash/fp';
import {type Props} from '../../index.native';

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    onClose: noop,
    onOpenInbox: noop,
    locales: {
      successTitle: 'Link successfully sent',
      successDescription: 'Check your inbox and click on the magic link to log into your app.',
      successCta: 'Open my inbox'
    }
  }
};

export default fixture;
