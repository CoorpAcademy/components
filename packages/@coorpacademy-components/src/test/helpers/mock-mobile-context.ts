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
}: MockOptions): TemplateContextValues => ({
  theme: defaultTheme,
  analytics: {
    logEvent
  },
  vibration: {
    VIBRATION_TYPE,
    vibrate
  }
});

export default mockMobileContext;
