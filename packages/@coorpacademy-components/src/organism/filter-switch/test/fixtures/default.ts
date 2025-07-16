import {FilterSwitchProps} from '../../prop-types';

const filterSwitchProps: FilterSwitchProps = {
  title: 'Language',
  onClear: () => console.log('click language'),
  options: [
    {
      title: 'Show all languages',
      value: false, // checked
      theme: 'newMooc',
      type: 'iconswitch',
      onChange: (value: string) => console.log('toggle show language', value)
    }
  ]
};

export default {props: filterSwitchProps};
