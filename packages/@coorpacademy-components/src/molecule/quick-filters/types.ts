export type QuickFiltersProps = {
  optionsList: FilterOption[];
  filterButton?: string; // to do next : filter button with onClick handler
};

type FilterOption = {
  iconName: string;
  label: string;
  onClick: () => void;
  selected: boolean;
};
