import PropTypes from 'prop-types';
import Search from '../../atom/input-search';

const propTypes = {
  title: PropTypes.string,
  titleAriaLabel: PropTypes.string,
  onClear: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      selected: PropTypes.bool,
      ref: PropTypes.string,
      count: PropTypes.number,
      onClick: PropTypes.func
    })
  ),
  searchOptions: PropTypes.shape(Search.propTypes)
};

export type FilterCheckboxAndSearchOptions = {
  label: string;
  value: string;
  selected: boolean;
  ref: string;
  count: number;
  onClick: () => void;
};

type SearchType = {
  value?: string;
  placeholder: string;
  onChange?: () => void;
  onClear?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  theme?: 'default' | 'coorpmanager';
  dataTestId?: string;
};

export type FilterCheckboxAndSearchProps = {
  title: string;
  titleAriaLabel?: string;
  onClear: () => void;
  searchOptions: SearchType;
  options: FilterCheckboxAndSearchOptions[];
};

export default propTypes;
