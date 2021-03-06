export default {
  props: {
    socialLinks: [
      {
        type: 'facebook',
        link: 'https://www.facebook.com/coorpacademy'
      },
      {
        type: 'twitter',
        link: 'https://twitter.com/coorpacademy'
      },
      {
        type: 'linkedin',
        link: 'https://www.linkedin.com/company/coorpacademy'
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/channel/UC9a5xUuAtAY-5IdIhZsy6yQ'
      },
      {
        type: 'instagram',
        link: 'https://www.instagram.com/coorpacademy'
      }
    ],
    siteMapSections: [
      {
        title: 'help',
        pages: [
          {title: 'FAQ', link: 'https://www.support.coorpacademy.com/faq-users-fr'},
          {
            title: 'Data privacy policy',
            // title: 'Data privacy policy 1234567890',
            link: 'https://www.support.coorpacademy.com/faq-users-fr'
          },
          {title: 'Client support', link: 'https://www.support.coorpacademy.com/faq-users-fr'}
        ]
      },
      {
        title: 'ressources',
        pages: [
          {title: 'Terms & conditions', link: 'https://www.privacy.coorpacademy.com/fr'},
          {
            title: 'How to use',
            link: 'https://fab404.com/wp-content/uploads/2013/05/androiddev101404.jpg'
          },
          {
            title: 'Over 30 character csm page link',
            link: 'https://fab404.com/wp-content/uploads/2013/05/androiddev101404.jpg'
          }
        ]
      }
    ]
  }
};
