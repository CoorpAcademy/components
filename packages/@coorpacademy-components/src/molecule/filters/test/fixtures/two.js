import dropdownsFilter from '../../../../atom/select/test/fixtures/filter';
import dropdownsSort from '../../../../atom/select/test/fixtures/sort';

const selectFilter = dropdownsFilter.props;
const selectSort = dropdownsSort.props;

export default {
  props: {
    filterTabLabel: 'Filter',
    filterCTALabel: 'Filter',
    sortTabLabel: 'Sort by',
    sortCTALabel: 'Sort',
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
      }
    ],
    sorting: {
      ...selectSort,
      title: 'Sort by',
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
    }
  }
};
