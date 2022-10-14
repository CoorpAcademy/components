import {JWPLAYER_SCRIPT_URL} from '../../../../util/constants';

export default {
  props: {
    mimeType: 'application/jwplayer',
    jwpOptions: {
      playerId: '12345',
      file: 'https://content.jwplatform.com/videos/nTXhramY-720.mp4',
      playerScript: JWPLAYER_SCRIPT_URL,
      licenseKey: 'QDh3Fb2afiIAFI+XwlncwQDhNEwkXetm1y8tzWn3km8=',
      customProps: {
        tracks: [
          {
            file: 'https://content.jwplatform.com/tracks/XGZ5baM8.srt',
            label: 'English',
            kind: 'captions',
            default: true
          }
        ],
        autostart: 'viewable',
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
