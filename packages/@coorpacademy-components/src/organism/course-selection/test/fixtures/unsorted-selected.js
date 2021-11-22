import UnSelectedCard from '../../../../molecule/card/test/fixtures/selectable-false';
import SelectedCard from '../../../../molecule/card/test/fixtures/selectable-true';
import Article from '../../../../molecule/card/test/fixtures/article';
import Scorm from '../../../../molecule/card/test/fixtures/scorm';
import ExternalContent from '../../../../molecule/card/test/fixtures/external-content';

export default {
  props: {
    search: {
      title: 'Search...',
      placeholder: 'Search...',
      value: '',
      description: 'Type to filter the courses',
      onChange: value => console.log(value)
    },
    'courses-selection-aria-label': 'Courses results',
    courses: [
      SelectedCard.props,
      UnSelectedCard.props,
      {...Article.props, isSelected: false},
      SelectedCard.props,
      {...Scorm.props, isSelected: true},
      {...UnSelectedCard.props, isSelected: false},
      {...ExternalContent.props, isSelected: false},
      {...Scorm.props, isSelected: false}
    ]
  }
};
