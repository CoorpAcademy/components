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
      {label: 'Home', icon: HomeIcon, handlePress: () => null},
      {label: 'Search', icon: SearchIcon, handlePress: () => null},
      {label: 'Revision', icon: ClockIcon, handlePress: () => null}
    ],
    selectedItemIndex: 1
  }
};

export default fixture;
