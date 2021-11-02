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
      icon: 'draft',
      text: 'Save in drafts',
      onClick: () => console.log('save')
    }
  }
};
