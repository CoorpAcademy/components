import {MultiFilterPanelProps} from '../../prop-types';
import filterCheckboxSelected from '../../../../organism/filter-checkbox-and-search/test/fixtures/filters-selected';
import FilterSwitchProps from '../../../../organism/filter-switch/test/fixtures/default';

export const multiFilterPanelProps: MultiFilterPanelProps = {
  title: 'Filters selected',
  onClearAll: () => console.log('click on clear all filters'),
  showSelectedFilters: true,
  options: [
    {
      type: 'switch',
      options: {
        title: 'Language',
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
      options: {
        title: 'Duration',
        onClear: () => console.log('clear filters'),
        options: [
          {
            label: 'Short (>5mins)',
            type: 'short-duration',
            selected: false,
            icon: 'fa-book-open',
            onClick: () => console.log('click on Courses filter')
          },
          {
            label: 'Medium (5-15mins)',
            type: 'medium-duration',
            selected: false,
            icon: 'fa-stopwatch',
            onClick: () => console.log('click on 5 filter')
          },
          {
            label: 'Long (15mins+)',
            type: 'long-duration',
            selected: false,
            icon: 'fa-stopwatch',
            onClick: () => console.log('click on 5 filter')
          }
        ]
      }
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
