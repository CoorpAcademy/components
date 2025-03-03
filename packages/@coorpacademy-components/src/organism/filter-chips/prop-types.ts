import PropTypes from 'prop-types';

const propTypes = PropTypes.shape({
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      type: PropTypes.string,
      selected: PropTypes.bool,
      icon: PropTypes.string,
      onClick: PropTypes.func
    })
  )
});

export type FilterChipProps = {
  options: {
    label: string;
    type: string;
    selected: boolean;
    icon: string;
    onClick: (type: string) => void;
  }[];
};

export default propTypes;
