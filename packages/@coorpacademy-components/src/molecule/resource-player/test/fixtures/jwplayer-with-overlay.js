export default {
  props: {
    resource: {
      type: 'video',
      mimeType: 'video/mp4',
      description: 'De l’éco-conception à l’innovation responsable',
      jwpOptions: {
        playerId: '12345',
        file: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        playerScript:
          'https://s3-eu-west-1.amazonaws.com/static.coorpacademy.com/JwPlayer/8.6.3/jwplayer.js',
        licenseKey: 'QDh3Fb2afiIAFI+XwlncwQDhNEwkXetm1y8tzWn3km8=',
        customProps: {
          autostart: false,
          width: '100%',
          height: '100%',
          skin: {
            name: 'bekle'
          }
        }
      },
      onPlay: () => console.log('play'),
      onPause: () => console.log('pause'),
      onResume: () => console.log('resume'),
      onEnded: () => console.log('end')
    },
    overlay: {
      title: 'Bonus !',
      text: 'Récupérez une vie en regardant la leçon !',
      lifeAmount: 1
    }
  }
};
