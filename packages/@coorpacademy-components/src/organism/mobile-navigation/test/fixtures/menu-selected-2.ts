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
      {label: 'Home', icon: HomeIcon, handleOnPress: noop},
      {label: 'Search', icon: SearchIcon, handleOnPress: noop},
      {label: 'Revision', icon: ClockIcon, handleOnPress: noop}
    ],
    selectedItemIndex: 2
  }
};

export default fixture;
