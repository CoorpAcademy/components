import {noop} from 'lodash/fp';
import defaultTheme from '../../variables/theme.native';
import {Brand, defaultBrandTheme} from '../../variables/brand.native';
import {TemplateContextValues} from '../../template/app-review/template-context';
import {Vibration, VIBRATION_TYPE} from '../../variables/vibration';
import {Analytics} from '../../variables/analytics';

type MockOptions = {
  logEvent?: Analytics['logEvent'];
  vibrate?: Vibration['vibrate'];
  brandTheme?: Brand;
};

const mockMobileContext = ({
  logEvent = noop,
  vibrate = noop,
  brandTheme = defaultBrandTheme
}: MockOptions = {}): TemplateContextValues => ({
  theme: defaultTheme,
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
  store: {},
  brandTheme
});

export default mockMobileContext;
