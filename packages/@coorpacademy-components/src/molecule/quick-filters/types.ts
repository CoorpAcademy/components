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
    defaultAriaLabel: string;
  };
  filterOptionsAriaLabel: string;
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
  ariaLabel: string;
};

export const propTypes = {
  primaryOption: PropTypes.shape({
    defaultLabel: PropTypes.string,
    defaultValue: PropTypes.string,
    defaultIconName: PropTypes.string,
    defaultSelected: PropTypes.bool,
    defaultAriaLabel: PropTypes.string,
    onDefaultClick: PropTypes.func
  }),
  filterOptionsAriaLabel: PropTypes.string,
  filterOptions: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.string,
      onClick: PropTypes.func,
      selected: PropTypes.bool,
      ariaLabel: PropTypes.string
    })
  ),
  filterButton: PropTypes.shape(ButtonLink.propTypes)
};
