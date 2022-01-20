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
    isLoading: false,
    contentTypeFilter: {
      type: 'selectMultiple',
      title: 'Content type',
      placeholder: 'Content type',
      description: 'This filters the courses',
      theme: 'coorpmanager',
      size: 'default',
      options: [
        {
          name: 'Course',
          value: 'course',
          selected: true
        },
        {
          name: "5' learning",
          value: 'chapter',
          selected: false
        },
        {
          name: 'Interactive slides',
          value: 'scorm',
          selected: false
        },
        {
          name: 'Video',
          value: 'video',
          selected: false
        }
      ],
      multiple: false
    },
    'courses-selection-aria-label': 'Courses results',
    courses: [
      {...SelectedCard.props, theme: 'coorpmanager'},
      {...UnSelectedCard.props, theme: 'coorpmanager'},
      {...Article.props, isSelected: false, theme: 'coorpmanager'},
      {...SelectedCard.props, theme: 'coorpmanager'},
      {...Scorm.props, isSelected: true, theme: 'coorpmanager'},
      {...UnSelectedCard.props, isSelected: false, title: 'Standard course', theme: 'coorpmanager'},
      {
        ...ExternalContent.props,
        isSelected: false,
        title: 'External course',
        theme: 'coorpmanager'
      },
      {...Scorm.props, isSelected: false, title: 'Scorm course', theme: 'coorpmanager'}
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
