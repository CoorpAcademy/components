import {COLORS} from '../../../../variables/colors';
import {FilterChipProps} from '../../prop-types';

const noIconsChipsProps: FilterChipProps = {
  title: 'Duration',
  onClear: () => console.log('click on clear button'),
  options: [
    {
      label: 'Short (>5mins)',
      type: 'short-duration',
      textColor: COLORS.neutral_500,
      selected: false,
      onClick: () => console.log('click on short-duration'),
      customIcon: 'none'
    },
    {
      label: 'Medium (5-15mins)',
      type: 'medium-duration',
      textColor: COLORS.neutral_500,
      selected: true,
      onClick: () => console.log('click on medium-duration'),
      customIcon: 'none'
    },
    {
      label: 'Long (+15mins)',
      type: 'long-duration',
      textColor: COLORS.neutral_500,
      selected: false,
      onClick: () => console.log('click on long-duration'),
      customIcon: 'none'
    }
  ]
};

export default {props: noIconsChipsProps};
