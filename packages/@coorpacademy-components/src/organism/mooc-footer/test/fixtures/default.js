export default {
  props: {
    headSection: {
      title: 'GET THE COORPACADEMY EXPERIENCE ON YOUR PHONE !',
      onAppStoreButtonClick: () => window.open('https://apps.apple.com/app/id1448348795'),
      appStoreButtonImageUrl: 'https://static.coorpacademy.com/content/Apple-Store.png',
      playStoreButtonImageUrl: 'https://static.coorpacademy.com/content/Google-Play-Store.png',
      onPlayStoreButtonClick: () =>
        window.open('https://play.google.com/store/apps/details?id=com.coorpacademy.app')
    },
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
        title: 'HELP',
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
        title: 'TOOLBOX',
        pages: [
          {title: 'CMS', link: 'https://onboarding.coorpacademy.com/cms/pages'},
          {title: 'Analytics', link: 'https://onboarding.coorpacademy.com/analytics/dashboard'},
          {title: 'Admin', link: 'https://onboarding.coorpacademy.com/admin/import'},
          {title: 'Jobs', link: 'https://onboarding.coorpacademy.com/jobs/dashboard'}
        ]
      },
      {
        title: 'RESSOURCES',
        pages: [
          {title: 'Terms & conditions', link: 'https://www.privacy.coorpacademy.com/fr'},
          {
            title: 'How to use',
            link: 'https://fab404.com/wp-content/uploads/2013/05/androiddev101404.jpg'
          }
        ]
      }
    ]
  }
};
