import PropTypes from 'prop-types';

export const OnboardingPropsTypes = {
  title: PropTypes.string
};

export const TipPropsTypes = {
  text: PropTypes.string,
  Icon: PropTypes.any
};

export type OnboardingProps = {
  title: string;
};

export type TipProps = {
  text: string | undefined;
  Icon: any;
};
