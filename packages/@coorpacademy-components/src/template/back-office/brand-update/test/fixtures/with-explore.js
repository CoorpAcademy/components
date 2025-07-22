import Header from '../../../../../organism/setup-header/test/fixtures/default';

export const items = [
  {
    title: 'My Dashboard',
    key: 'dashboard',
    href: '#brand/samsung/dashboard',
    open: undefined,
    selected: false,
    type: 'simpleTab'
  },
  {
    title: 'Administration',
    key: 'administration',
    href: '#brand/samsung/administration',
    open: false,
    selected: false,
    type: 'collapsibleTab'
  },
  {
    title: 'Editorialization',
    key: 'editorialization',
    href: '#brand/samsung/editorialization',
    type: 'collapsibleTab',
    open: true,
    selected: true,
    tabs: [
      {
        title: 'Dashboard',
        href: '#brand/samsung/editorialization/dashboard',
        selected: false,
        type: 'simpleTab'
      },
      {
        title: 'Content',
        href: '#brand/samsung/editorialization/content',
        selected: false,
        type: 'simpleTab'
      },
      {
        title: 'Look & feel',
        href: '#brand/samsung/editorialization/look-and-feel',
        selected: false,
        type: 'simpleTab'
      },
      {
        title: 'Explore',
        href: '#brand/samsung/editorialization/explore',
        selected: true,
        type: 'simpleTab'
      }
    ]
  },
  {
    title: 'Content Creation',
    key: 'contentCreation',
    href: '#brand/samsung/content-creation',
    open: false,
    selected: false,
    type: 'iconLink'
  },
  {
    title: 'Animation',
    key: 'animation',
    href: '#brand/samsung/content-creation',
    selected: false,
    isOpen: true,
    type: 'collapsibleTab'
  },
  {
    title: 'Analytics',
    key: 'analytics',
    href: '#brand/samsung/analytics',
    open: false,
    selected: false,
    type: 'collapsibleTab',
    tabs: [
      {title: 'SSO', href: '#/sso', selected: false, type: 'iconLink'},
      {title: 'Look and Feel', href: '#/look-and-feel', selected: false},
      {title: 'Settings', href: '#/settings', selected: false},
      {title: 'Any', href: '#/any', selected: false},
      {title: 'Many', href: '#/many', selected: false}
    ]
  }
];

export default {
  props: {
    header: Header.props,
    notifications: [],
    items,
    logo: '',
    content: {
      type: 'form',
      key: 'explore',
      groups: [
        {
          title: 'Explore Sections Configuration',
          description: 'Configure which content sections are displayed in the explore page',
          fields: [
            {
              type: 'switch',
              name: 'exploreSections.freshContent.display',
              title: 'Fresh Content',
              description: 'Display fresh and new content section',
              value: true,
              onChange: () => console.log('Fresh Content toggle')
            },
            {
              type: 'number',
              name: 'exploreSections.freshContent.order',
              title: 'Fresh Content Order',
              description: 'Display order for fresh content section',
              value: 0,
              onChange: () => console.log('Fresh Content order change'),
              min: 0,
              max: 10
            },
            {
              type: 'switch',
              name: 'exploreSections.certifications.display',
              title: 'Certifications',
              description: 'Display certifications section',
              value: true,
              onChange: () => console.log('Certifications toggle')
            },
            {
              type: 'number',
              name: 'exploreSections.certifications.order',
              title: 'Certifications Order',
              description: 'Display order for certifications section',
              value: 1,
              onChange: () => console.log('Certifications order change'),
              min: 0,
              max: 10
            },
            {
              type: 'switch',
              name: 'exploreSections.skills.display',
              title: 'Skills',
              description: 'Display skills section',
              value: true,
              onChange: () => console.log('Skills toggle')
            },
            {
              type: 'number',
              name: 'exploreSections.skills.order',
              title: 'Skills Order',
              description: 'Display order for skills section',
              value: 2,
              onChange: () => console.log('Skills order change'),
              min: 0,
              max: 10
            },
            {
              type: 'switch',
              name: 'exploreSections.playlists.display',
              title: 'Playlists',
              description: 'Display playlists section',
              value: true,
              onChange: () => console.log('Playlists toggle')
            },
            {
              type: 'number',
              name: 'exploreSections.playlists.order',
              title: 'Playlists Order',
              description: 'Display order for playlists section',
              value: 3,
              onChange: () => console.log('Playlists order change'),
              min: 0,
              max: 10
            }
          ]
        }
      ]
    }
  }
};