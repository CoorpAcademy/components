import FilterChipProps from '../../../../organism/filter-chip/test/fixtures/all-selected';

export default {
  props: {
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
              label: 'Courses',
              type: 'course',
              selected: false,
              icon: 'fa-book-open',
              onClick: () => console.log('click on Courses filter')
            },
            {
              label: "5'learning",
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
              label: 'Courses',
              type: 'course',
              selected: true,
              icon: 'fa-book-open',
              onClick: () => console.log('click on Courses filter')
            },
            {
              label: "5'learning",
              type: 'chapter',
              selected: false,
              icon: 'fa-stopwatch',
              onClick: () => console.log('click on 5 filter')
            }
          ]
        }
      }
      // {
      //   type: 'checkbox',
      //   options: [
      //     {
      //       label: 'active listening',
      //       type: 'skills',
      //       count: 104,
      //       onClick: () => console.log('click on active listening skill')
      //     }
      //   ]
      // }
    ]
  }
};
