type CheckboxItem = {
  label: string;
  value: string;
  selected: boolean;
  ref: string;
  count: number;
  onClick: () => void;
};

export type CheckboxAndSearchProps = {
  title: string;
  type: string;
  withSearch: boolean;
  options: CheckboxItem[];
};
