import PropTypes from 'prop-types';
import {GestureResponderEvent} from 'react-native';

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
