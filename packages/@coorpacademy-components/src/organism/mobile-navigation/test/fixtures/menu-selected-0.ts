import {
  NovaCompositionCoorpacademyClockTime as ClockIcon,
  NovaSolidPlacesPlacesHome2 as HomeIcon,
  NovaCompositionCoorpacademySearch as SearchIcon
} from '@coorpacademy/nova-icons';
import {Props} from '../../index.native';

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    items: [
      {label: 'Home', icon: HomeIcon, onPress: () => {}},
      {label: 'Search', icon: SearchIcon, onPress: () => {}},
      {label: 'Revision', icon: ClockIcon, onPress: () => {}}
    ],
    selectedItemIndex: 0
  }
};

export default fixture;
