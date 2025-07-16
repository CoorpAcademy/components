import InputSwitch from '../../atom/input-switch';

export type FilterSwitchProps = {
  title: string;
  onClear: () => void;
  options: React.ComponentProps<typeof InputSwitch>[];
};
