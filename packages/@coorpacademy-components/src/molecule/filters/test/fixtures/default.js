import dropdownsFilter from '../../../../atom/select/test/fixtures/filter';
import groupOptions from '../../../../atom/select/test/fixtures/group-options';
import dropdownsSort from '../../../../atom/select/test/fixtures/sort';

const selectFilter = dropdownsFilter.props;
const selectSort = dropdownsSort.props;
const selectOptionsGroup = groupOptions.props;

export default {
  props: {
    filterTabLabel: 'Filter',
    filterCTALabel: 'Filter',
    sortTabLabel: 'Sort by',
    sortCTALabel: 'Sort',
    moreSortAriaLabel: 'show or hide sortBy options',
    moreFilterAriaLabel: 'show or hide sortBy options',
    filterGroupAriaLabel: 'Apply filtering options to refine search results',
    sortAriaLabel: 'show sort options',
    filters: [
      {
        ...selectFilter,
        type: 'select',
        fieldName: 'skills',
        title: 'Compétences:',
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
        theme: 'filter',
        fieldName: 'them',
        title: 'Playlists transverses:',
        options: [
          {
            name: 'All',
            value: 'ref_all',
            selected: true
          },
          {name: 'Apprendre en continu', value: 'ref_1234', selected: false},
          {name: 'Domptez vos neurones !', value: 'ref_5678', selected: false},
          {name: 'Future of sales', value: 'ref_5679', selected: false}
        ],
        onChange: value => console.log(value)
      },
      {
        type: 'select',
        theme: 'filter',
        fieldName: 'cp_them',
        title: 'Faurecia University playlists:',
        options: [
          {
            name: 'All',
            value: 'ref_all',
            selected: true
          },
          {
            name: '8 Quality Basics in Production',
            value: 'ref_9123',
            selected: false
          },
          {
            name: 'Bienvenue à Faurecia Clarion Electronics (FCE)',
            value: 'ref_4567',
            selected: false
          },
          {
            name: 'CR Digital Manufacturing Platform Management',
            value: 'ref_4569',
            selected: false
          },
          {name: 'CR HR Site Manager', value: 'ref_4567', selected: false}
        ],
        onChange: value => console.log(value)
      },
      {
        type: 'select',
        theme: 'filter',
        fieldName: 'contentType',
        title: 'Type:',
        options: [
          {
            name: 'All',
            value: 'ALL',
            selected: false
          },
          {
            name: "5' learning",
            value: 'microlearning',
            selected: true
          },
          {
            name: 'Cours',
            value: 'learner',
            selected: false
          },
          {
            name: 'Scorm',
            value: 'scorm',
            selected: false
          }
        ],
        onChange: value => console.log(value)
      },
      {
        ...selectFilter,
        type: 'select',
        fieldName: 'Courses',
        title: 'Certifications:',
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
