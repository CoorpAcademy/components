import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  titleAriaLabel: PropTypes.string,
  onClear: PropTypes.func.isRequired,
  options: PropTypes.shape({
    label: PropTypes.string.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    step: PropTypes.number,
    value: PropTypes.arrayOf(PropTypes.number),
    minLabel: PropTypes.string,
    maxLabel: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    theme: PropTypes.string,
    selected: PropTypes.bool
  })
};

export type FilterRangeOptionsProps = {
  label: string;
  min: number;
  max: number;
  step?: number;
  value: number[];
  minLabel?: string;
  maxLabel?: string;
  minValueLabel?: string;
  maxValueLabel?: string;
  onChange: (value: number[]) => void;
  theme?: string;
  selected?: boolean;
};

export type FilterRangeProps = {
  title: string;
  titleAriaLabel?: string;
  onClear: () => void;
  options: FilterRangeOptionsProps;
};

export default propTypes;
