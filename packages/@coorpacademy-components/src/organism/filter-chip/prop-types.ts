import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  titleAriaLabel: PropTypes.string,
  onClear: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      type: PropTypes.string,
      textColor: PropTypes.string,
      selected: PropTypes.bool,
      icon: PropTypes.string,
      customIcon: PropTypes.string,
      onClick: PropTypes.func
    })
  )
};

export type FilterChipProps = {
  title: string;
  titleAriaLabel?: string;
  onClear: () => void;
  options: {
    label: string;
    type: string;
    selected: boolean;
    icon?: string;
    textColor?: string;
    customIcon?: string;
    onClick: (type: string) => void;
  }[];
};

export default propTypes;
