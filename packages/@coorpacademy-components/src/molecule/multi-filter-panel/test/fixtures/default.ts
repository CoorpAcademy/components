import FilterChipProps from '../../../../organism/filter-chip/test/fixtures/all-selected';
import {MultiFilterPanelProps} from '../../prop-types';
import filterCheckboxSelected from '../../../../organism/filter-checkbox-and-search/test/fixtures/filters-selected';

export const multiFilterPanelProps: MultiFilterPanelProps = {
  title: 'Filters',
  onClearAll: () => console.log('click on clear all filters'),
  options: [
    {
      type: 'chip',
      options: FilterChipProps.props
    },
    {
      type: 'chip',
      options: {
        title: 'Type 2',
        onClear: () => console.log('clear filters'),
        options: [
          {
            label: 'Courses 2',
            type: 'course',
            selected: false,
            icon: 'fa-book-open',
            onClick: () => console.log('click on Courses filter')
          },
          {
            label: "5'learning 2",
            type: 'chapter',
            selected: false,
            icon: 'fa-stopwatch',
            onClick: () => console.log('click on 5 filter')
          }
        ]
      }
    },
    {
      type: 'chip',
      options: {
        title: 'Type 3',
        onClear: () => console.log('clear filters'),
        options: [
          {
            label: 'Courses 3',
            type: 'course',
            selected: true,
            icon: 'fa-book-open',
            onClick: () => console.log('click on Courses filter')
          },
          {
            label: "5'learning 3",
            type: 'chapter',
            selected: false,
            icon: 'fa-stopwatch',
            onClick: () => console.log('click on 5 filter')
          }
        ]
      }
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
