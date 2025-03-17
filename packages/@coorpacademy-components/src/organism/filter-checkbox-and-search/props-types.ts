import PropTypes from 'prop-types';
import SearchForm from '../../molecule/search-form';

const propTypes = {
  title: PropTypes.string,
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
  searchOptions: PropTypes.shape(SearchForm.propTypes)
};

export type FilterCheckboxAndSearchOptions = {
  label: string;
  value: string;
  selected: boolean;
  ref: string;
  count: number;
  onClick: () => void;
};

export type FilterCheckboxAndSearchProps = {
  title: string;
  onClear: () => void;
  searchOptions: React.ComponentProps<typeof SearchForm>;
  options: FilterCheckboxAndSearchOptions[];
};

export default propTypes;
