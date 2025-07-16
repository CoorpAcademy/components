import PropTypes from 'prop-types';
import filterChipProptypes, {FilterChipProps} from '../../organism/filter-chip/prop-types';
import filterCheckboxAndSearchProptypes, {
  FilterCheckboxAndSearchProps
} from '../../organism/filter-checkbox-and-search/props-types';

const propTypes = {
  title: PropTypes.string,
  showSelectedFilters: PropTypes.bool,
  onClearAll: PropTypes.func,
  onRemoveSelectedFilter: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        type: PropTypes.oneOf(['chip']),
        options: PropTypes.shape(filterChipProptypes)
      }),
      PropTypes.shape({
        type: PropTypes.oneOf(['checkbox']),
        options: PropTypes.shape(filterCheckboxAndSearchProptypes)
      })
    ])
  )
};

export type OptionsChipProps = {
  type: 'chip';
  options: FilterChipProps;
};

export type OptionsCheckboxProps = {
  type: 'checkbox';
  options: FilterCheckboxAndSearchProps;
};

export type FilterOptionsProps = OptionsChipProps | OptionsCheckboxProps;

export type SelectedFilter = {
  icon: string;
  label: string;
  selected: boolean;
  type: string;
};

export type SelectedFilterItem = {
  // returned by allSelectedFilters
  label?: string;
  selected: boolean;
  icon?: string;
  type?: string;
  value?: string;
  ref?: string;
  count?: number;
};
export type MultiFilterPanelProps = {
  title: string;
  showSelectedFilters?: boolean;
  onRemoveSelectedFilter?: (filterId: string) => void;
  onClearAll: () => void;
  options: FilterOptionsProps[];
};

export default propTypes;
