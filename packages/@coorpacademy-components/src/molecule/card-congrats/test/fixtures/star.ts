import {NovaCompositionCoorpacademyStar as StarIcon} from '@coorpacademy/nova-icons';
import {COLORS} from '../../../../variables/colors';
import {CardCongratsProps} from '../../types';

type Fixture = {props: CardCongratsProps};

const fixture: Fixture = {
  props: {
    animationUri: 'https://static-staging.coorpacademy.com/animations/review/star.json',
    text: 'You have won',
    value: '100',
    Icon: StarIcon,
    iconColor: COLORS.positive,
    textColor: COLORS.positive,
    direction: 'row'
  }
};

export default fixture;
