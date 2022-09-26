import {noop} from 'lodash/fp';
import defaultTheme from '../../variables/theme.native';
import {TemplateContextValues} from '../../template/app-review/template-context';
import {VibrationType, VIBRATION_TYPE} from '../../variables/vibration';

type MockOptions = {
  logEvent?: Function;
  vibrate?: (arg0: VibrationType | void) => void;
};

const mockMobileContext = ({
  logEvent = noop,
  vibrate = noop
}: MockOptions = {}): TemplateContextValues => ({
  theme: defaultTheme,
  brandTheme: {
    images: {
      'logo-mobile':
        'https://static.coorpacademy.com/content/mobile/raw/coorp_logo_infinite-1552063832916.png'
    }
  },
  translations: {
    selectAnAnswer: 'Select an answer',
    selectSomethingBelow: 'Select something below',
    typeHere: 'type here'
  },
  analytics: {
    logEvent
  },
  vibration: {
    VIBRATION_TYPE,
    vibrate
  },
  display: {
    statusBarHeight: 80,
    headerHeight: 67
  },
  store: {}
});

export default mockMobileContext;
