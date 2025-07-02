import {ButtonLinkProps} from '../../atom/button-link/types';

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

type FilterOption = {
  iconName: string;
  label: string;
  value: string;
  onClick: () => void;
  selected: boolean;
};
