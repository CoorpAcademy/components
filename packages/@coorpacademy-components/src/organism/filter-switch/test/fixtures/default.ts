import {FilterSwitchProps} from '../../prop-types';

const filterSwitchProps: FilterSwitchProps = {
  headerTitle: 'Options',
  onClear: () => console.log('clear options'),
  options: [
    {
      title: 'Only show new content',
      value: true,
      onChange: (value: string) => console.log('toggle show content', value),
      ariaLabel: 'toggle show new content',
      theme: 'newMooc'
    },
    {
      title: 'Hide completed',
      value: false,
      theme: 'newMooc',
      onChange: (value: string) => console.log('toggle hide completed', value),
      ariaLabel: 'hide completed content aria label'
    }
  ]
};

export default {props: filterSwitchProps};
