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
            category: 'course',
            label: 'Course'
          },
          {
            type: 'content',
            title: 'Social networks',
            author: 'Author',
            category: 'chapter',
            label: "5' learning"
          },
          {
            type: 'content',
            title: 'Other title',
            author: 'Author 2',
            category: 'course',
            label: 'Course'
          },
          {
            type: 'content',
            title: 'Social others',
            author: 'Author XXX',
            category: 'chapter',
            label: "5' learning"
          },
          {
            type: 'content',
            title: 'Social others others',
            author: 'Author XXX',
            label: "5' learning",
            category: 'chapter'
          },
          {
            type: 'content',
            title: 'Something about empowerment',
            author: 'Author XXX',
            label: 'course',
            category: 'course'
          },
          {
            type: 'content',
            title: 'Be a better human being',
            author: 'Author XXX',
            label: "5' learning",
            category: 'chapter'
          },
          {
            type: 'content',
            title: 'Stronger faster better',
            author: 'Author XXX',
            label: 'course',
            category: 'course'
          },
          {
            type: 'content',
            title: 'Relativity beyond time',
            author: 'Author XXX',
            label: 'course',
            category: 'course'
          },
          {
            type: 'content',
            title: 'Are you awake?',
            author: 'Author XXX',
            label: "5' learning",
            category: 'chapter'
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
