import {MultiFilterPanelProps} from '../../prop-types';
import filterCheckboxSelected from '../../../../organism/filter-checkbox-and-search/test/fixtures/filters-selected';
import FilterSwitchProps from '../../../../organism/filter-switch/test/fixtures/default';
import noIconChipsProps from '../../../../organism/filter-chip/test/fixtures/no-icons';

export const multiFilterPanelProps: MultiFilterPanelProps = {
  title: 'Filters',
  onClearAll: () => console.log('click on clear all filters'),
  options: [
    {
      type: 'range',
      options: {
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
      }
    },
    {
      type: 'switch',
      options: {
        title: 'Language',
        titleAriaLabel: 'Display the language filter',
        onClear: () => console.log('clear language filters'),
        options: [
          {
            label: 'Show all languages',
            value: true,
            onChange: (value: string) => console.log('toggle show all language', value),
            ariaLabel: 'toggle show all languages',
            theme: 'newMooc'
          }
        ]
      }
    },
    {
      type: 'chip',
      options: noIconChipsProps.props
    },
    {
      type: 'switch',
      options: FilterSwitchProps.props
    },
    {
      type: 'checkbox',
      options: filterCheckboxSelected.props
    }
  ]
};

export default {
  props: multiFilterPanelProps
};
