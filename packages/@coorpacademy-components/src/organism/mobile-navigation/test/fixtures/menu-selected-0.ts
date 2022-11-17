import {
  NovaCompositionCoorpacademyClockTime as ClockIcon,
  NovaSolidPlacesPlacesHome2 as HomeIcon,
  NovaCompositionCoorpacademySearch as SearchIcon
} from '@coorpacademy/nova-icons';
import {Props} from '../../index.native';

type Fixture = {props: Props};

const openHome = () => null;
const openSearch = () => null;
const openRevision = () => null;

const fixture: Fixture = {
  props: {
    items: [
      {label: 'Home', icon: HomeIcon, action: openHome},
      {label: 'Search', icon: SearchIcon, action: openSearch},
      {label: 'Revision', icon: ClockIcon, action: openRevision}
    ],
    selectedItemIndex: 0
  }
};

export default fixture;
