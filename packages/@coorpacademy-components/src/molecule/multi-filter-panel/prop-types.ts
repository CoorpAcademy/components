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
import filterRangeProptypes, {
  FilterRangeProps,
  FilterRangeOptionsProps
} from '../../organism/filter-range/prop-types';

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
      }),
      PropTypes.shape({
        type: PropTypes.oneOf(['range']),
        options: PropTypes.shape(filterRangeProptypes)
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

export type OptionsRangeProps = {
  type: 'range';
  options: FilterRangeProps;
};

export type FilterOptionsProps =
  | OptionsChipProps
  | OptionsCheckboxProps
  | OptionsSwitchProps
  | OptionsRangeProps;

export type SelectedFilter =
  | FilterChipOptionsProps
  | FilterSwitchOptionsProps
  | FilterCheckboxAndSearchOptions
  | FilterRangeOptionsProps;

export type MultiFilterPanelProps = {
  title: string;
  onRemoveSelectedFilter?: (filterItem: SelectedFilter) => void;
  onClearAll: () => void;
  options: FilterOptionsProps[];
};

export default propTypes;
