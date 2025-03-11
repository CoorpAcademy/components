import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  onClear: PropTypes.func,
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

type FilterCheckboxAndSearchOptions = {
  label: string;
  value: string;
  selected: boolean;
  skillRef: string;
  count: number;
  onClick: () => void;
};

export type FilterCheckboxAndSearchProps = {
  title: string;
  placeholder: string;
  onClear: () => void;
  withSearch: boolean;
  options: FilterCheckboxAndSearchOptions[];
};

export default propTypes;
