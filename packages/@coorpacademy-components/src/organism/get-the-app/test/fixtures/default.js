export default {
  props: {
    onAppStoreButtonClick: () => window.open('https://www.apple.com/fr/ios/app-store/'),
    appStoreButtonImageUrl:
      'https://user-images.githubusercontent.com/23306911/56896744-e915da80-6a8c-11e9-98ca-c50e7c4358db.png',
    playStoreButtonImageUrl:
      'https://user-images.githubusercontent.com/23306911/56896745-e9ae7100-6a8c-11e9-9c3c-4a13d8e7c096.png',
    onPlayStoreButtonClick: () => window.open('https://play.google.com/store/apps?hl=fr'),
    step1Title: 'Step 1: Download the app!',
    step1SubTitle: 'Get The Coorpacademy experience on your phone!',
    step2Title: "Step 2: Once you've downloaded it, connect to it",
    qrCodeTitle: 'By scanning your personal QR Code',
    qrCodeSubTitle: 'directly from the app',
    magicLinkTitle: 'By clicking on your personal magic link',
    magicLinkSubTitle: ' (only works directly from your smartphone)',
    diviserWord: 'or',
    disabled: false,
    showMobileAppAccess: false,
    qrCodeImageUrl: 'https://www.qrcode-monkey.com/img/default-preview-qr.svg',
    magicLinkUrl: 'https://play.google.com/store/apps/details?id=com.frogmind.rumblestars&hl=fr',
    submitValue: 'magic link',
    onMagicLinkButtonClick: () => window.open('https://www.coorpacademy.com'),
    preMessage:
      "Cette fonctionnalité n'est pas encore activée sur votre plateform. Si vous souhaitez l'activer, contactez votre resposable RH ou ",
    linkMessage: 'cliquez ici ',
    endMessage: 'et nous passerons le message'
  }
};
