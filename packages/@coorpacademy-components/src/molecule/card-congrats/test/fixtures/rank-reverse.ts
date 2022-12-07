import {NovaSolidVoteRewardsRewardsBadge5 as RankIcon} from '@coorpacademy/nova-icons';
import {COLORS} from '../../../../variables/colors';
import {CardCongratsProps} from '../../types';

type Fixture = {props: CardCongratsProps};

const fixture: Fixture = {
  props: {
    animationUri: 'https://static-staging.coorpacademy.com/animations/review/rank.json',
    text: 'You are now',
    value: '123 th',
    Icon: RankIcon,
    iconColor: COLORS.positive,
    textColor: COLORS.cm_grey_800,
    direction: 'row-reverse'
  }
};

export default fixture;
