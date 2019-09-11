import {JWPLAYER_SCRIPT_URL} from '../../../../util/constants';

export default {
  props: {
    mimeType: 'video/mp4',
    jwpOptions: {
      playerId: '12345',
      file: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      playerScript: JWPLAYER_SCRIPT_URL,
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
    onPlay: () => console.log('onPlay jwp'),
    onResume: () => console.log('onResume jwp'),
    onPause: () => console.log('onPause jwp'),
    onEnded: () => console.log('onEnded jwp')
  }
};
