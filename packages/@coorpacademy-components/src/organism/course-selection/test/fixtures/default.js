import UnSelectedCard from '../../../../molecule/card/test/fixtures/selectable-false';
import SelectedCard from '../../../../molecule/card/test/fixtures/selectable-true';
import SelectedHiddenCard from '../../../../molecule/card/test/fixtures/selectable-true-hidden-true';
import Article from '../../../../molecule/card/test/fixtures/article';
import Scorm from '../../../../molecule/card/test/fixtures/scorm';
import ExternalContent from '../../../../molecule/card/test/fixtures/external-content';
import Chaptercard from '../../../../molecule/card/test/fixtures/freerun';

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
          selected: false
        },
        {
          name: "5' learning",
          value: 'chapter',
          selected: false
        },
        {
          name: 'Animated resources',
          value: 'scorm',
          selected: true
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
      {...SelectedCard.props, theme: 'coorpmanager', progress: undefined},
      {...SelectedHiddenCard.props, theme: 'coorpmanager', progress: undefined},
      {...UnSelectedCard.props, theme: 'coorpmanager', progress: undefined},
      {...Article.props, isSelected: false, theme: 'coorpmanager', progress: undefined},
      {
        ...Chaptercard.props,
        theme: 'coorpmanager',
        progress: undefined,
        isSelected: false,
        favorite: false
      },
      {...Scorm.props, isSelected: true, theme: 'coorpmanager', progress: undefined},
      {
        ...UnSelectedCard.props,
        isSelected: false,
        title: 'Standard course',
        theme: 'coorpmanager',
        progress: undefined
      },
      {
        ...ExternalContent.props,
        isSelected: false,
        title: 'External course',
        theme: 'coorpmanager',
        progress: undefined
      },
      {
        ...Scorm.props,
        isSelected: false,
        title: 'Scorm course',
        theme: 'coorpmanager',
        progress: undefined
      }
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
