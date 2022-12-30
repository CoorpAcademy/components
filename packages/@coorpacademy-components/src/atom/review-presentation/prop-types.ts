import PropTypes from 'prop-types';
import {ColorValue, GestureResponderEvent, ViewStyle} from 'react-native';

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

export type OnboardingProps = {
  'aria-label'?: string | undefined;
  reviewTitle?: string | undefined;
  reviewText?: string | undefined;
  labelsList?: {
    skills?:
      | {
          text?: string | undefined;
          tooltipText?: string | undefined;
        }
      | undefined;
    questions?: {
      text?: string | undefined;
      tooltipText?: string | undefined;
    };
    lifes?:
      | {
          text?: string | undefined;
          tooltipText?: string | undefined;
        }
      | undefined;
    allright?:
      | {
          text?: string | undefined;
          tooltipText?: string | undefined;
        }
      | undefined;
  };
  onPress: (event: GestureResponderEvent) => void;
};

export type TipProps = {
  text: string | undefined;
  Icon: React.FC<{height: number; width: number; style: ViewStyle; color: ColorValue}>;
};
