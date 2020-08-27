export default {
  props: {
    headSection: {
      title: 'get the coorpacademy experience on your phone !',
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
    ]
  }
};
