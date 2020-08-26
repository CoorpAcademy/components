export default {
  props: {
    headSection: {
      title: 'get the coorpacademy experience on your phone !',
      onAppStoreButtonClick: () => window.open('https://apps.apple.com/app/id1448348795'),
      appStoreButtonImageUrl: 'https://static.coorpacademy.com/content/Apple-Store.png',
      playStoreButtonImageUrl: 'https://static.coorpacademy.com/content/Google-Play-Store.png',
      onPlayStoreButtonClick: () =>
        window.open('https://play.google.com/store/apps/details?id=com.coorpacademy.app')
    }
  }
};
