import PropTypes from 'prop-types';
import filterChipProptypes, {
  FilterChipOptionsProps,
  FilterChipProps
} from '../../organism/filter-chip/prop-types';
import filterCheckboxAndSearchProptypes, {
  FilterCheckboxAndSearchOptions,
  FilterCheckboxAndSearchProps
} from '../../organism/filter-checkbox-and-search/props-types';
import filterSwitchProptypes, {
  FilterSwitchOptionsProps,
  FilterSwitchProps
} from '../../organism/filter-switch/prop-types';

const propTypes = {
  title: PropTypes.string,
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
      }),
      PropTypes.shape({
        type: PropTypes.oneOf(['switch']),
        options: PropTypes.shape(filterSwitchProptypes)
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

export type OptionsSwitchProps = {
  type: 'switch';
  options: FilterSwitchProps;
};

export type FilterOptionsProps = OptionsChipProps | OptionsCheckboxProps | OptionsSwitchProps;

export type SelectedFilter =
  | FilterChipOptionsProps
  | FilterSwitchOptionsProps
  | FilterCheckboxAndSearchOptions;

export type MultiFilterPanelProps = {
  title: string;
  onRemoveSelectedFilter?: (filterItem: SelectedFilter) => void;
  onClearAll: () => void;
  options: FilterOptionsProps[];
};

export default propTypes;
