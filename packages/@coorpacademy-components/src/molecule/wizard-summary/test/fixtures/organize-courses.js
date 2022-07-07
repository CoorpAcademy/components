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
            title:
              'Marketing and online advertising Marketing and online advertising Marketing and online advertising Marketing and online advertising',
            author: 'Author',
            badgeList: [{category: 'course', label: 'Course'}]
          },
          {
            type: 'content',
            title: 'Social networks',
            author: 'Author',
            badgeList: [{category: 'chapter', label: "5' learning"}]
          },
          {
            type: 'content',
            title: 'Other title',
            author: 'Author 2',
            badgeList: [
              {category: 'course', label: 'Course'},
              {category: 'hidden', label: 'Hidden'}
            ]
          },
          {
            type: 'content',
            title: 'Social others',
            author: 'Author XXX',
            badgeList: [{category: 'chapter', label: "5' learning"}]
          },
          {
            type: 'content',
            title: 'Social others others',
            author: 'Author XXX',
            badgeList: [{category: 'chapter', label: "5' learning"}]
          },
          {
            type: 'content',
            title: 'Something about empowerment',
            author: 'Author XXX',
            eList: [{category: 'course', label: 'Course'}]
          },
          {
            type: 'content',
            title: 'Be a better human being',
            author: 'Author XXX',
            badgeList: [{category: 'chapter', label: "5' learning"}]
          },
          {
            type: 'content',
            title: 'Stronger faster better',
            author: 'Author XXX',
            eList: [{category: 'course', label: 'Course'}]
          },
          {
            type: 'content',
            title: 'Relativity beyond time',
            author: 'Author XXX',
            eList: [{category: 'course', label: 'Course'}]
          },
          {
            type: 'content',
            title: 'Are you awake?',
            author: 'Author XXX',
            badgeList: [{category: 'chapter', label: "5' learning"}]
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
