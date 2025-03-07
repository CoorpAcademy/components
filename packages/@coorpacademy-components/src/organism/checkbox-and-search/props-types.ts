import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  onClearFilters: PropTypes.func,
  withSearch: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      selected: PropTypes.bool,
      ref: PropTypes.string,
      count: PropTypes.number,
      onClick: PropTypes.func
    })
  )
};

type CheckboxItem = {
  label: string;
  value: string;
  selected: boolean;
  skillRef: string;
  count: number;
  onClick: () => void;
};

export type FilterCheckboxAndSearchProps = {
  title: string;
  type: string;
  onClearFilters: () => void;
  withSearch: boolean;
  options: CheckboxItem[];
};

export default propTypes;
