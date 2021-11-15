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
      }
    ],
    action: {
      icon: 'save',
      text: 'Save in drafts',
      'aria-label': 'Save in drafts',
      onClick: () => console.log('save')
    }
  }
};
