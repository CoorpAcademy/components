import PropTypes from 'prop-types';
import Title from '../../atom/title';

const propTypes = {
  title: Title.propTypes,
  type: PropTypes.string,
  onClearFilters: PropTypes.func,
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

type CheckboxItem = {
  label: string;
  value: string;
  selected: boolean;
  skillRef: string;
  count: number;
  onClick: () => void;
};

export type FilterCheckboxAndSearchProps = {
  title: React.ComponentProps<typeof Title>;
  type: string;
  onClearFilters: () => void;
  withSearch: boolean;
  options: CheckboxItem[];
};

export default propTypes;
