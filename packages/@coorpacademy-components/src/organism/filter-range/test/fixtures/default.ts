import {FilterRangeProps} from '../../prop-types';

export const filterRangeProps: FilterRangeProps = {
  title: 'Duration',
  titleAriaLabel: 'Duration filter',
  onClear: () => console.log('clear duration filter'),
  options: {
    label: 'Duration: 20-80 min',
    min: 0,
    max: 120,
    step: 1,
    value: [20, 80],
    minLabel: 'Min',
    maxLabel: 'Max',
    maxValueLabel: '120+',
    minValueLabel: '0-',
    onChange: (value: number[]) => console.log('duration changed', value),
    theme: 'mooc',
    selected: true
  }
};

export default {
  props: filterRangeProps
};
