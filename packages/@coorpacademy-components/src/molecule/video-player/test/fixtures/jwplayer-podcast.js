import {JWPLAYER_SCRIPT_URL} from '../../../../util/constants';

export default {
  props: {
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
    poster:
      'https://api-staging.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/CoorpAcademy/content-catalogue/cockpit-tutorial-course/default/capture-decran-2018-04-25-a-123739-1524652711605.png&h=250&w=250&q=90&m=contain',
    scriptErrorMessage:
      'An error occurred while loading the video. Please make sure you have authorized this platform on your adblocker or deactivate your adblocker.',
    onError: e => console.log('onError', e),
    onPlay: () => console.log('onPlay jwp'),
    onResume: () => console.log('onResume jwp'),
    onPause: () => console.log('onPause jwp'),
    onEnded: () => console.log('onEnded jwp')
  }
};
