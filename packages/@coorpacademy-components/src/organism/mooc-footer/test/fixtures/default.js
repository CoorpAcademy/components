export default {
  props: {
    headSection: {
      title: 'get the coorpacademy experience on your phone !',
      onAppStoreButtonClick: () => window.open('https://apps.apple.com/app/id1448348795'),
      appStoreButtonImageUrl: 'https://static.coorpacademy.com/content/Apple-Store.png',
      playStoreButtonImageUrl: 'https://static.coorpacademy.com/content/Google-Play-Store.png',
      onPlayStoreButtonClick: () =>
        window.open('https://play.google.com/store/apps/details?id=com.coorpacademy.app'),
      'mobile-logo-aria-label': 'Coorp mobile logo',
      'android-alt': 'Link to our android app',
      'ios-alt': 'Link to our ios app'
    },
    socialLinks: [
      {
        type: 'facebook',
        link: 'https://www.facebook.com/coorpacademy',
        'aria-label': 'Link to facebook page, will be opened in new tab'
      },
      {
        type: 'twitter',
        link: 'https://twitter.com/coorpacademy',
        'aria-label': 'Link to twitter page, will be opened in new tab'
      },
      {
        type: 'linkedin',
        link: 'https://www.linkedin.com/company/coorpacademy',
        'aria-label': 'Link to linkin page, will be opened in new tab'
      },
      {
        type: 'youtube',
        link: 'https://www.youtube.com/channel/UC9a5xUuAtAY-5IdIhZsy6yQ',
        'aria-label': 'Link to youtube page, will be opened in new tab'
      },
      {
        type: 'instagram',
        link: 'https://www.instagram.com/coorpacademy',
        'aria-label': 'Link to instagram page, will be opened in new tab'
      }
    ],
    siteMapSections: [
      {
        title: 'help',
        pages: [
          {
            title: 'FAQ',
            link: 'https://www.support.coorpacademy.com/faq-users-fr',
            target: '_self'
          },
          {
            title: 'Data privacy policy',
            onClick: () => console.log('click')
          },
          {
            title: 'Client support',
            link: 'https://www.support.coorpacademy.com/faq-users-fr',
            target: '_blank'
          }
        ]
      },
      {
        title: 'toolbox',
        pages: [
          {title: 'CMS', link: 'https://onboarding.coorpacademy.com/cms/pages'},
          {title: 'Analytics', link: 'https://onboarding.coorpacademy.com/analytics/dashboard'},
          {title: 'Admin', link: 'https://onboarding.coorpacademy.com/admin/import'},
          {title: 'Jobs', link: 'https://onboarding.coorpacademy.com/jobs/dashboard'}
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
    ],
    'logo-aria-label' : 'Coorpacademy Logo',
    'social-links-aria-label': 'List of links toour socials pages'
  }
};
