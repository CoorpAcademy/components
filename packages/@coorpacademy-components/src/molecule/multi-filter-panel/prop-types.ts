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
        options: PropTypes.arrayOf(PropTypes.shape(filterCheckboxAndSearchProptypes))
      })
    ])
  )
};

export type MultiFilterPanelOptionsProps = {
  type: 'chip' | 'checkbox';
  options: FilterChipProps | FilterCheckboxAndSearchProps;
};

export type MultiFilterPanelProps = {
  title: string;
  onClearAll: () => void;
  options: MultiFilterPanelOptionsProps[];
};

export default propTypes;
