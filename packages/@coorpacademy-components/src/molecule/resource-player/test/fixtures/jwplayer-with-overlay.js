export default {
  props: {
    resource: {
      type: 'video',
      mimeType: 'video/mp4',
      jwpOptions: {
        playerId: '12345',
        file: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        playerScript: 'https://up-staging.coorpacademy.com/libs/jwplayer/7.10.7/jwplayer.js',
        licenseKey: 'yI8rSuuJ+fs7VdJzWjY4zGZU48UcOn+Gjg+FXZag16o=',
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
