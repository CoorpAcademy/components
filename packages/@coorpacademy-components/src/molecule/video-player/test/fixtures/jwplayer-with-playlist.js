import {JWPLAYER_SCRIPT_URL} from '../../../../util/constants';

export default {
  props: {
    mimeType: 'application/jwplayer',
    jwpOptions: {
      playerId: '12345',
      playlist: [
        {
          file: 'https://content.jwplatform.com/manifests/MtGilk2n.m3u8',
          tracks: [
            {
              file: 'https://content.jwplatform.com/tracks/nlhH6AjI.srt',
              kind: 'captions',
              label: 'English',
              default: true
            },
            {
              file: 'https://content.jwplatform.com/tracks/r7yeGWQ4.srt',
              kind: 'captions',
              label: 'Deutsch'
            },
            {
              file: 'https://content.jwplatform.com/tracks/wSHV2u5L.srt',
              kind: 'captions',
              label: 'ภาษาไทย'
            },
            {
              file: 'https://content.jwplatform.com/strips/MtGilk2n-120.vtt',
              kind: 'thumbnails'
            }
          ]
        }
      ],
      playerScript: JWPLAYER_SCRIPT_URL,
      licenseKey: 'QDh3Fb2afiIAFI+XwlncwQDhNEwkXetm1y8tzWn3km8=',
      customProps: {
        autostart: 'viewable',
        width: '100%',
        height: '100%'
      }
    },
    scriptErrorMessage:
      'An error occurred while loading the video. Please make sure you have authorized this platform on your adblocker or deactivate your adblocker.',
    onError: e => console.log('onError', e),
    onPlay: () => console.log('onPlay jwp'),
    onResume: () => console.log('onResume jwp'),
    onPause: () => console.log('onPause jwp'),
    onEnded: () => console.log('onEnded jwp')
  }
};
