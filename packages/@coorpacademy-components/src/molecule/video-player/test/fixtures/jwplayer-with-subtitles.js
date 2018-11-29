export default {
  props: {
    mimeType: 'video/mp4',
    jwpOptions: {
      playerId: '12345',
      file: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      playerScript: 'https://up-staging.coorpacademy.com/libs/jwplayer/7.10.7/jwplayer.js',
      licenseKey: 'yI8rSuuJ+fs7VdJzWjY4zGZU48UcOn+Gjg+FXZag16o=',
      customProps: {
        tracks: {
          file: 'https://assets-jpcust.jwpsrv.com/tracks/I5yJ1bwE.vtt',
          label: 'English',
          kind: 'captions',
          default: true
        },
        autostart: false,
        width: '100%',
        height: '100%'
      }
    },
    onPlay: () => console.log('onPlay jwp'),
    onResume: () => console.log('onResume jwp'),
    onPause: () => console.log('onPause jwp'),
    onEnded: () => console.log('onEnded jwp')
  }
};
