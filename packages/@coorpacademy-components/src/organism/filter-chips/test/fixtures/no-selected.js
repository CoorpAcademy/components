import {FilterChipProps} from '../../prop-types';

const props: FilterChipProps = {
  props: {
    title: 'Type',
    onClear: () => console.log('clear filters'),
    options: [
      {
        label: 'Courses',
        type: 'course',
        selected: false,
        icon: 'fa-book-open',
        onClick: () => console.log('click on Courses filter')
      },
      {
        label: "5'learning",
        type: 'chapter',
        selected: false,
        icon: 'fa-stopwatch',
        onClick: () => console.log('click on 5 filter')
      },
      {
        label: 'Animated ressources',
        type: 'scorm',
        selected: false,
        icon: 'fa-rectangle-history',
        onClick: () => console.log('click on Animated ressources filter')
      },
      {
        label: 'Videos',
        type: 'video',
        selected: false,
        icon: 'fa-video',
        onClick: () => console.log('click on Videos filter')
      },
      {
        label: 'Podcasts',
        type: 'podcast',
        selected: false,
        icon: 'fa-microphone-lines',
        onClick: () => console.log('click on Podcasts filter')
      },
      {
        label: 'Documents',
        type: 'article',
        selected: false,
        icon: 'fa-file-lines',
        onClick: () => console.log('click on Documents filter')
      }
    ]
  }
};

export default props;
