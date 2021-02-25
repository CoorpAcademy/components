import Qcm from '../../../questions/qcm/test/fixtures/short-answers';

const answerProps = Qcm.props;

export default {
  props: {
    model: {
      ...answerProps,
      type: 'qcm'
    },
    media: {
      type: 'video',
      mimeType: 'application/jwplayer',
      jwpOptions: {
        playerId: '7IMa4DCK',
        playerScript: 'https://static.coorpacademy.com/JwPlayer/8.6.3/jwplayer.js',
        licenseKey: 'QDh3Fb2afiIAFI+XwlncwQDhNEwkXetm1y8tzWn3km8=',
        playlist: [
          {
            file: 'https://content.jwplatform.com/manifests/2gqZAJW4.m3u8',
            tracks: [
              {
                file: 'https://content.jwplatform.com/tracks/I0gZX8Rt.srt',
                kind: 'captions',
                label: 'Français',
                default: true
              },
              {
                file: 'https://content.jwplatform.com/strips/2gqZAJW4-120.vtt',
                kind: 'thumbnails'
              }
            ]
          }
        ],
        customProps: {
          playbackRateControls: true,
          preload: 'auto',
          autostart: 'viewable',
          width: '100%',
          height: '40px',
          visualplaylist: false,
          nextUpDisplay: false
        }
      },
      description: 'De l’éco-conception à l’innovation responsable',
      poster:
        '//static.coorpacademy.com/content/CoorpAcademy/content-partnerships-svp/cockpit-partner-svp/poster/poster-1480426784168.jpg',
      _id: '590b9be24f7b862e0046e577',
      subtitles: [],
      posters: [],
      src: [],
      onClick: () => {},
      onPlay: () => console.log('play'),
      onPause: () => console.log('pause'),
      onResume: () => console.log('resume'),
      onEnded: () => console.log('end')
    }
  }
};
