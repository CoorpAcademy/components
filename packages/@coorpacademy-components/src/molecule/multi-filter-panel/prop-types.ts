import PropTypes from 'prop-types';
import filterChipProptypes, {FilterChipProps} from '../../organism/filter-chip/prop-types';

const propTypes = {
  title: PropTypes.string,
  onClearAll: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['chip']),
      options: PropTypes.shape(filterChipProptypes)
    })
  )
};

export type MultiFilterPanelOptionsProps = {
  type: 'chip';
  options: FilterChipProps;
};

export type MultiFilterPanelProps = {
  title: string;
  onClearAll: () => void;
  options: MultiFilterPanelOptionsProps[];
};

export default propTypes;
