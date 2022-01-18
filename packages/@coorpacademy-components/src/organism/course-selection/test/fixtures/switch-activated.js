import SelectedCard from '../../../../molecule/card/test/fixtures/selectable-true';

export default {
  props: {
    search: {
      title: 'Search...',
      placeholder: 'Search...',
      value: 'from mass maket to one',
      description: 'Type to filter the courses',
      onChange: value => console.log(value)
    },
    'courses-selection-aria-label': 'Courses results',
    courses: [SelectedCard.props, SelectedCard.props],
    switchButton: {
      type: 'switch',
      title: 'Show selected courses only',
      value: true,
      onChange: value => console.log(value),
      titlePosition: 'right',
      theme: 'coorpmanager'
    }
  }
};
