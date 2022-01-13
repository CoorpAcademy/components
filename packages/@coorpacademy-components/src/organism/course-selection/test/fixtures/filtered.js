import UnSelectedCard from '../../../../molecule/card/test/fixtures/selectable-false';
import SelectedCard from '../../../../molecule/card/test/fixtures/selectable-true';
import Article from '../../../../molecule/card/test/fixtures/article';
import Scorm from '../../../../molecule/card/test/fixtures/scorm';

export default {
  props: {
    search: {
      title: 'Search...',
      placeholder: 'Search...',
      value: 'from',
      description: 'Type to filter the courses',
      onChange: value => console.log(value)
    },
    'courses-selection-aria-label': 'Courses results',
    courses: [
      SelectedCard.props,
      {...Scorm.props, isSelected: true},
      SelectedCard.props,
      UnSelectedCard.props,
      {...Article.props, isSelected: false}
    ],
    switchButton: {
      type: 'switch',
      title: 'Show selected courses only',
      value: false,
      onChange: value => console.log(value),
      titlePosition: 'right',
      theme: 'coorpmanager'
    }
  }
};
