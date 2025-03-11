import PropTypes from 'prop-types';
import FilterChip from '../../organism/filter-chip';
import FilterCkeckboxAndSearch from '../../organism/filter-checkbox-and-search';
import {FilterChipProps} from '../../organism/filter-chip/prop-types';
import {FilterCheckboxAndSearchProps} from '../../organism/filter-checkbox-and-search/props-types';

const propTypes = {
  title: PropTypes.string,
  onClearAll: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        type: PropTypes.oneOf(['chip']),
        options: PropTypes.shape(FilterChip.propTypes)
      }),
      PropTypes.shape({
        type: PropTypes.oneOf(['checkbox']),
        options: PropTypes.arrayOf(PropTypes.shape(FilterCkeckboxAndSearch.propTypes))
      })
    ])
  )
};
export type MultiFilterPanelOptionsChipProps = {
  type: 'chip';
  options: FilterChipProps;
};

export type MultiFilterPanelOptionsCheckboxProps = {
  type: 'checkbox';
  options: FilterCheckboxAndSearchProps;
};

export type MultiFilterPanelOptionsProps =
  | MultiFilterPanelOptionsChipProps
  | MultiFilterPanelOptionsCheckboxProps;

export type MultiFilterPanelProps = {
  title: string;
  onClearAll: () => void;
  options: MultiFilterPanelOptionsProps[];
};

export default propTypes;
