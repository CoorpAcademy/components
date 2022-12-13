export default {
  props: {
    onAppStoreButtonClick: () => window.open('https://www.apple.com/fr/ios/app-store/'),
    appStoreButtonImageUrl:
      'https://user-images.githubusercontent.com/23306911/56896744-e915da80-6a8c-11e9-98ca-c50e7c4358db.png',
    playStoreButtonImageUrl:
      'https://user-images.githubusercontent.com/23306911/56896745-e9ae7100-6a8c-11e9-9c3c-4a13d8e7c096.png',
    onPlayStoreButtonClick: () => window.open('https://play.google.com/store/apps?hl=fr'),
    storeStep: {
      step: 'Step 1:',
      header: 'Download the app!',
      subHeader: 'Get The Coorpacademy experience on your phone!'
    },
    connectionStep: {
      step: 'Step 2:',
      header: "Once you've downloaded it, connect to it"
    },
    qrCodeStep: {
      header: 'By scanning your personal QR Code',
      subHeader: 'directly from the app'
    },
    magicLinkStep: {
      header: 'By clicking on your personal magic link',
      subHeader: '(only works directly from your smartphone)'
    },
    diviserWord: 'or',
    disabled: false,
    showMobileAppAccess: false,
    qrCodeImageUrl: 'https://www.qrcode-monkey.com/img/default-preview-qr.svg',
    magicLinkUrl: 'https://play.google.com/store/apps/details?id=com.frogmind.rumblestars&hl=fr',
    submitValue: 'magic link',
    preMessage:
      "Cette fonctionnalité n'est pas encore activée sur votre plateform. Si vous souhaitez l'activer, contactez votre resposable RH ou",
    linkMessage: 'cliquez ici',
    endMessage: 'et nous passerons le message',
    'android-alt': 'Link to the Coorpacademy android app',
    'ios-alt': 'Link to the Coorpacademy ios app'
  }
};
