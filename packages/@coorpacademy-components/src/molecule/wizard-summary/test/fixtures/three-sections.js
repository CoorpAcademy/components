export default {
  props: {
    title: 'Certification summary',
    sections: [
      {
        items: [
          {
            type: 'mainElement',
            title: 'Language',
            value: '🇬🇧 English'
          },
          {
            type: 'mainElement',
            title: 'Name',
            value: 'Marketing expert'
          }
        ]
      },
      {
        title: 'Translation',
        items: [
          {
            type: 'text',
            text: '🇫🇷 French'
          },
          {
            type: 'text',
            text: '🇪🇸 Spanish'
          },
          {
            type: 'text',
            text: '🇮🇹 Italian'
          }
        ]
      },
      {
        title: 'Populations',
        items: [
          {
            type: 'text',
            text: 'Population 2'
          }
        ],
        counterText: '1 population'
      }
    ],
    action: {
      icon: 'save',
      text: 'Save in drafts',
      onClick: () => console.log('save')
    }
  }
};
