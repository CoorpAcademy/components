import PropTypes from 'prop-types';
import {ButtonLinkProps} from '../../atom/button-link/types';
import ButtonLink from '../../atom/button-link';

export type QuickFiltersProps = {
  primaryOption: {
    defaultLabel: string;
    defaultValue: string;
    defaultIconName: string;
    defaultSelected: boolean;
    onDefaultClick: () => void;
  };
  filterOptions: FilterOption[];
  filterButton?: ButtonLinkProps;
};

export type ScrollByOptions = {
  left: number;
  behavior: string;
};

type FilterOption = {
  iconName: string;
  label: string;
  value: string;
  onClick: () => void;
  selected: boolean;
};

export const propTypes = {
  primaryOption: PropTypes.shape({
    defaultLabel: PropTypes.string,
    defaultValue: PropTypes.string,
    defaultIconName: PropTypes.string,
    defaultSelected: PropTypes.bool,
    onDefaultClick: PropTypes.func
  }).isRequired,
  filterOptions: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.string,
      onClick: PropTypes.func,
      selected: PropTypes.bool
    })
  ),
  filterButton: PropTypes.shape(ButtonLink.propTypes)
};
