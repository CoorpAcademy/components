import PropTypes from 'prop-types';
import {GestureResponderEvent} from 'react-native';
const levelItem = PropTypes.shape({
  text: PropTypes.string,
  tooltipText: PropTypes.string
});

const propTypes = {
  'aria-label': PropTypes.string,
  reviewTitle: PropTypes.string,
  reviewText: PropTypes.string,
  labelsList: PropTypes.shape({
    skills: levelItem,
    questions: levelItem,
    lifes: levelItem,
    allright: levelItem
  })
};

export default propTypes;

export const OnboardingPropsTypes = {
  onPress: PropTypes.func
};

export const TipPropsTypes = {
  text: PropTypes.string,
  Icon: PropTypes.any
};

export type OnboardingProps = {onPress: (event: GestureResponderEvent) => any};

export type TipProps = {
  text: string | undefined;
  Icon: any;
};