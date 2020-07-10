import dropdownsFilter from '../../../../atom/select/test/fixtures/filter';

const selectFilter = dropdownsFilter.props;

export default {
  props: {
    filterTabLabel: 'Filter',
    filterCTALabel: 'Filter',
    sortTabLabel: 'Sort by',
    sortCTALabel: 'Sort',
    filters: [
      {
        ...selectFilter,
        type: 'select',
        fieldName: 'Thematic',
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
        ...selectFilter,
        type: 'select',
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
        ...selectFilter,
        type: 'select',
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
      }
    ]
  }
};
