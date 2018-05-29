import dropdownsFilter from '../../../../atom/select/test/fixtures/filter';
import dropdownsSort from '../../../../atom/select/test/fixtures/sort';
import rangeslider from '../../../../atom/range/test/fixtures/multi';

const selectFilter = dropdownsFilter.props;
const selectSort = dropdownsSort.props;
const timer = rangeslider.props;

export default {
  props: {
    filterTabLabel: 'Filter',
    filterCTALabel: 'Filter',
    sortTabLabel: 'Sort by',
    sortCTALabel: 'Sort',
    courses: {
      ...selectFilter,
      title: 'Learning Paths2:',
      options: [
        {
          name: 'All categories',
          value: 'ALL',
          selected: false
        },
        {
          name: 'Innovations & Technologies',
          value: 'Innovations',
          selected: true
        },
        {
          name: 'Management',
          value: 'Management',
          selected: false
        },
        {
          name: 'Sustainable development',
          value: 'Sustainable',
          selected: false
        }
      ],
      onChange: value => console.log(value)
    },
    filters: [
      {
        type: 'select',
        fieldName: 'Thematic',
        ...selectFilter,
        title: 'Thematic:',
        options: [
          {
            name: 'digital',
            value: 'digital',
            selected: false
          },
          {
            name: 'Esprit du temps',
            value: 'Esprit du temps',
            selected: true
          },
          {
            name: 'La troisième révolution industrielle',
            value: 'La 3e révolution industrielle',
            selected: false
          }
        ],
        onChange: value => console.log(value)
      },
      {
        type: 'select',
        ...selectFilter,
        fieldName: 'Authors',
        title: 'Authors:',
        options: [
          {
            name: 'Coorpacademy',
            value: 'Coorpacademy',
            selected: false
          },
          {
            name:
              'World Health Organization - Mental Health Policy' +
              'and Service Development, Michelle Funk and Nathalie Drew',
            value: 'WHO',
            selected: true
          },
          {
            name: 'Elephant',
            value: 'Elephant',
            selected: false
          }
        ],
        onChange: value => console.log(value)
      },
      {
        type: 'select',
        ...selectFilter,
        fieldName: 'Courses',
        title: 'Learning Paths:',
        options: [
          {
            name: 'All categories',
            value: 'ALL',
            selected: false
          },
          {
            name: 'Innovations & Technologies',
            value: 'Innovations',
            selected: true
          },
          {
            name: 'Management',
            value: 'Management',
            selected: false
          },
          {
            name: 'Sustainable development',
            value: 'Sustainable',
            selected: false
          }
        ],
        onChange: value => console.log(value)
      },
      {
        type: 'range',
        ...timer,
        fieldName: 'Time',
        title: 'Time:',
        subtitle: '2 mins - 3 hours +'
      },
      {
        type: 'switch',
        fieldName: 'Favorite',
        title: 'Favorite:',
        display: {
          value: true,
          onChange: () => console.log('onFavorites')
        }
      }
    ],
    sorting: {
      ...selectSort,
      title: 'Sort by:',
      options: [
        {
          name: 'Position',
          value: 'Position',
          selected: true
        },
        {
          name: 'Most popular',
          value: 'Most popular',
          selected: false
        },
        {
          name: 'Newest',
          value: 'Newest',
          selected: false
        }
      ],
      onChange: value => console.log(value)
    },
    onSearch: () => console.log('onSearch')
  }
};
