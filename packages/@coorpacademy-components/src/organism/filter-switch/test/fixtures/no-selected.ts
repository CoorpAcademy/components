import {FilterSwitchProps} from '../../prop-types';

const filterSwitchProps: FilterSwitchProps = {
  title: 'Options',
  onClear: () => console.log('clear options'),
  options: [
    {
      label: 'Show all languages',
      value: false,
      onChange: (value: string) => console.log('toggle show all languages', value),
      ariaLabel: 'toggle show all languages',
      theme: 'newMooc'
    }
  ]
};

export default {props: filterSwitchProps};
