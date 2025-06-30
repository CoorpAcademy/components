export type QuickFiltersProps = {
  // all content props
  primaryOption: {
    defaultLabel: string;
    defaultIconName: string;
    defaultSelected: boolean;
    onDefaultClick: () => void;
  };
  filterOptions: FilterOption[];
  filterButton?: string; // to do next : filter button with onClick handler‡
};

type FilterOption = {
  iconName: string;
  label: string;
  onClick: () => void;
  selected: boolean;
};
