import PropTypes from 'prop-types';
import filterChipProptypes, {FilterChipProps} from '../../organism/filter-chip/prop-types';
import filterCheckboxAndSearchProptypes, {
  FilterCheckboxAndSearchProps
} from '../../organism/filter-checkbox-and-search/props-types';

const propTypes = {
  title: PropTypes.string,
  onClearAll: PropTypes.func,
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

export type MultiFilterPanelProps = {
  title: string;
  onClearAll: () => void;
  options: FilterOptionsProps[];
};

export default propTypes;
