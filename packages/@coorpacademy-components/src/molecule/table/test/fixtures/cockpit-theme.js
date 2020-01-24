export default {
  props: {
    editable: false,
    headerTitle: 'Course Edition Status',
    columns: [
      {
        title: '',
        info: ''
      },
      {
        title: '🇫🇷',
        info: 'French'
      },
      {
        title: '🇬🇧',
        info: 'English'
      },
      {
        title: '🇪🇸',
        info: 'Spanish'
      },
      {
        title: '🇹🇭',
        info: 'Thai'
      },
      {
        title: '🇩🇪',
        info: 'German'
      },
      {
        title: '🇨🇿',
        info: 'Czech'
      }
    ],
    rows: [
      {
        fields: [
          'Course: Cours avec la vidéo des fleurs',
          undefined,
          {icon: 'nostatus'},
          {icon: 'validate'},
          {icon: 'draft'},
          {icon: 'validate'},
          {icon: 'validate'}
        ]
      },
      {
        fields: [
          {icon: 'videosubtitle', title: 'Course: Cours avec la vidéo des fleurs'},
          {icon: 'draft'},
          {icon: 'validate'},
          {icon: 'nostatus'},
          undefined,
          {icon: 'draft'},
          {icon: 'draft'}
        ]
      },
      {
        fields: [
          'Level1',
          {icon: 'validate'},
          {icon: 'validate'},
          {icon: 'validate'},
          '',
          {icon: 'validate'},
          {icon: 'validate'}
        ],
        highlighted: true
      },
      {
        fields: [
          'Chapter: Chapitre 1',
          {icon: 'nostatus'},
          {icon: 'validate'},
          '',
          {icon: 'draft'},
          {icon: 'validate'},
          {icon: 'validate'}
        ]
      },
      {
        fields: [
          {icon: 'videosubtitle', title: 'Subtitles: Leçon 1'},
          {icon: 'validate'},
          {icon: 'validate'},
          {icon: 'draft'},
          {icon: 'draft'},
          {icon: 'validate'},
          {icon: 'nostatus'}
        ]
      },
      {
        fields: [
          {icon: 'videosubtitle', title: 'Subtitles: leçon 2'},
          {icon: 'validate'},
          {icon: 'validate'},
          {icon: 'draft'},
          {icon: 'draft'},
          {icon: 'validate'},
          {icon: 'nostatus'}
        ]
      }
    ],
    theme: 'cockpit'
  }
};
