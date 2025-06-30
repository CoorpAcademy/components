import {ButtonLinkProps} from '../../atom/button-link/types';

export type QuickFiltersProps = {
  // all content props
  primaryOption: {
    defaultLabel: string;
    defaultIconName: string;
    defaultSelected: boolean;
    onDefaultClick: () => void;
  };
  filterOptions: FilterOption[];
  filterButton?: ButtonLinkProps;
};

type FilterOption = {
  iconName: string;
  label: string;
  onClick: () => void;
  selected: boolean;
};
