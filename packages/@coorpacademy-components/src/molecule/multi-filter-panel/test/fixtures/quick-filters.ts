import {MultiFilterPanelProps} from '../../prop-types';
import filterCheckboxSelected from '../../../../organism/filter-checkbox-and-search/test/fixtures/filters-selected';
import FilterSwitchProps from '../../../../organism/filter-switch/test/fixtures/default';
import noIconChipsProps from '../../../../organism/filter-chip/test/fixtures/no-icons';

export const multiFilterPanelProps: MultiFilterPanelProps = {
  title: 'Filters selected',
  onClearAll: () => console.log('click on clear all filters'),
  onRemoveSelectedFilter: () => console.log('click on remove filter'),
  showSelectedFilters: true,
  options: [
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
