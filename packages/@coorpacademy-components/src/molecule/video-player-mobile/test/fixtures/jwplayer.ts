import type {Props} from '../../index.native';

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    media: {
      mimeType: 'application/jwplayer',
      jwpOptions: {
        config: {
          license: 'QDh3Fb2afiIAFI+XwlncwQDhNEwkXetm1y8tzWn3km8=',
          playlist: [
            {
              file: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
            }
          ],
          enableLockScreenControls: false,
          pipEnabled: false
        }
      }
    }
  }
};

export default fixture;
