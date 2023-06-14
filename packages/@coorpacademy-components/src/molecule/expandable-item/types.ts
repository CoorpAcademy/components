import PropTypes from 'prop-types';

export const propTypes = {
  title: PropTypes.string,
  icon: PropTypes.oneOf(['arrow']),
  isExpended: PropTypes.bool,
  isLink: PropTypes.bool,
  content: PropTypes.string,
  image: PropTypes.string,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string
};

export type Props = {
  title: string;
  icon: 'arrow';
  isExpended: boolean;
  content: string;
  ariaLabel? : string;
  isLink?: boolean;
  image?: string;
  onClick: () => void;
};
