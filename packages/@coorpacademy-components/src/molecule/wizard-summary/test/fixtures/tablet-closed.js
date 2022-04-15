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
            type: 'content',
            title: 'Learn Everywhere #10 : Inclusion, Diversité, et autre élements importants',
            badgeList: [{category: 'video', label: 'Video'}],
            author: 'Coorpacademy, Faurecia University'
          },
          {
            type: 'content',
            title: 'Markteting and online advertising',
            badgeList: [{category: 'base', label: 'Base'}],
            author: 'Coorpacademy'
          },
          {
            type: 'content',
            title: 'Faire une offre',
            badgeList: [{category: 'chapter', label: "5' learning"}],
            author: 'Global Exam'
          },
          {
            type: 'content',
            title: 'Cluedo: Meurtre sur Skill Island',
            badgeList: [
              {category: 'base', label: 'Base'},
              {category: 'advanced', label: 'Advenced'}
            ],
            author: 'Coorpacademy'
          },
          {
            type: 'content',
            title:
              'Learn <b>Everywhere #10</b> : <u>Inclusion, Diversité</u>, et autre élements importants',
            badgeList: [{category: 'video', label: 'Video'}],
            author: 'Coorpacademy, Faurecia University'
          },
          {
            type: 'content',
            title: 'Mesurer la satisfaction client',
            badgeList: [
              {category: 'base', label: 'Base'},
              {category: 'advanced', label: 'Advenced'},
              {category: 'coach', label: 'Coach'}
            ],
            author: 'Dunod Formation'
          },
          {
            type: 'content',
            title: 'Cluedo: Meurtre sur Skill Island',
            badgeList: [
              {category: 'base', label: 'Base'},
              {category: 'advanced', label: 'Advenced'}
            ],
            author: 'Coorpacademy'
          },
          {
            type: 'content',
            title: 'Suspects - épisode 1',
            badgeList: [{category: 'scorm', label: 'Interactive slides'}],
            author: 'Coorpacademy'
          },
          {
            type: 'content',
            title: '<p align="right"> وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه</p>',
            badgeList: [
              {category: 'base', label: 'Base'},
              {category: 'advanced', label: 'Advenced'},
              {category: 'coach', label: 'Coach'}
            ],
            author: 'Dunod Formation'
          },
          {
            type: 'content',
            title: 'Cluedo: Meurtre sur Skill Island',
            badgeList: [
              {category: 'base', label: 'Base'},
              {category: 'advanced', label: 'Advenced'}
            ],
            author: 'Coorpacademy'
          },
          {
            type: 'content',
            title: 'Suspects - épisode 1',
            badgeList: [{category: 'scorm', label: 'Interactive slides'}],
            author: 'Coorpacademy'
          },
          {
            type: 'content',
            title: 'Mesurer la satisfaction client',
            badgeList: [
              {category: 'base', label: 'Base'},
              {category: 'advanced', label: 'Advenced'},
              {category: 'coach', label: 'Coach'}
            ],
            author: 'Dunod Formation'
          }
        ],
        counterText: '12 courses'
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
