import dropdownsFilter from '../../../../atom/select/test/fixtures/filter';
import selectCourses from '../../../../molecule/select-multiple/test/fixtures/checked';

const selectFilter = dropdownsFilter.props;
const selectMultiple = selectCourses.props;

export default {
  props: {
    titlepage: 'Catalog',
    ctalabelfilter: 'Filter',
    ctalabelsort: 'Sort by',
    thematic: {...selectFilter,
      title: 'Thematic',
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
          name: 'La 3e révolution industrielle',
          value: 'La 3e révolution industrielle',
          selected: false
        }
      ],
      onChange: value => console.log(value) // eslint-disable-line no-console
    },
    authors: {...selectFilter,
      title: 'Authors',
      options: [
        {
          name: 'Coorpacademy',
          value: 'Coorpacademy',
          selected: false
        },
        {
          name: 'Nexstage',
          value: 'Nexstage',
          selected: true
        },
        {
          name: 'Elephant',
          value: 'Elephant',
          selected: false
        }
      ],
      onChange: value => console.log(value) // eslint-disable-line no-console
    },
    courses: {...selectFilter,
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
      onChange: value => console.log(value) // eslint-disable-line no-console
    }
  }
};
