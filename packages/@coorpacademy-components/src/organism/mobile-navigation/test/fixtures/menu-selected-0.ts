import {
  NovaCompositionCoorpacademyClockTime as ClockIcon,
  NovaSolidPlacesPlacesHome2 as HomeIcon,
  NovaCompositionCoorpacademySearch as SearchIcon
} from '@coorpacademy/nova-icons';
import {noop} from 'lodash/fp';
import {Props} from '../../index.native';

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    items: [
      {label: 'Home', icon: HomeIcon, onPress: noop},
      {label: 'Search', icon: SearchIcon, onPress: noop},
      {label: 'Revision', icon: ClockIcon, onPress: noop}
    ],
    selectedItemIndex: 0
  }
};

export default fixture;
