import dropdowns from '../../../../atom/select/test/fixtures/filter';
import selectThematique from '../../../../molecule/select-multiple/test/fixtures/checked';

const select = dropdowns.props;
const selectMultiple = selectThematique.props;

export default {
  props: {
    thematic: {...select,
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
    sorting: {...select,
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
      onChange: value => console.log(value) // eslint-disable-line no-console
    },
    select,
    selectMultiple
  }
};
