export default {
  props: {
    editable: false,
    columns: [
      '',
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
          'icon-validated',
          'icon-validated',
          'icon-validated',
          'icon-draft',
          'icon-validated',
          'icon-validated'
        ]
      },
      {
        fields: [
          '[CC] Cours avec la vidéo des fleurs',
          'icon-draft',
          'icon-validated',
          'icon-draft',
          'icon-draft',
          'icon-draft',
          'icon-draft'
        ]
      },
      {
        fields: [
          'Level1',
          'icon-validated',
          'icon-validated',
          'icon-validated',
          'icon-draft',
          'icon-validated',
          'icon-validated'
        ],
        highlighted: true
      },
      {
        fields: [
          'Chapter: Chapitre 1',
          'icon-validated',
          'icon-validated',
          'icon-validated',
          'icon-draft',
          'icon-validated',
          'icon-validated'
        ]
      },
      {
        fields: [
          '[CC] Subtitles: Leçon 1',
          'icon-validated',
          'icon-validated',
          'icon-draft',
          'icon-draft',
          'icon-validated',
          'icon-validated'
        ]
      },
      {
        fields: [
          '[CC] Subtitles: leçon 2',
          'icon-validated',
          'icon-validated',
          'icon-draft',
          'icon-draft',
          'icon-validated',
          'icon-draft'
        ]
      }
    ],
    theme: 'cockpit'
  }
};
