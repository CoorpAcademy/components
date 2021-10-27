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
      },
      {
        title: 'Courses',
        items: [
          {
            type: 'course',
            title: 'Markteting and online advertising',
            level: 'base',
            author: 'Coorpacademy'
          },
          {
            type: 'chapter',
            title: 'Faire une offre',
            author: 'Global Exam'
          },
          {
            type: 'content',
            title: 'Cluedo: Meurtre sur Skill Island',
            level: 'base',
            author: 'Coorpacademy'
          },
          {
            type: 'scorm',
            title: 'Suspects - épisode 1',
            author: 'Coorpacademy'
          },
          {
            type: 'video',
            title: 'Learn Everywhere #10 : Inclusion et Diversité',
            author: 'Coorpacademy, Faurecia University'
          },
          {
            type: 'chapter',
            title: 'Mesurer la satisfaction client',
            author: 'Dunod Formation'
          }
        ],
        counterText: '6 courses'
      }
    ],
    action: {
      icon: 'draft',
      text: 'Save in draft',
      onClick: () => console.log('save')
    }
  }
};
