import type {Props} from '../../index.native';

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    media: {
      mimeType: 'application/kontiki',
      videoId: '1234',
      jwpOptions: {
        config: {
          license: 'xxx',
          enableLockScreenControls: false,
          pipEnabled: false,
          playlist: [
            {
              file: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              tracks: [{file: '', label: ''}]
            }
          ]
        }
      }
    }
  }
};

export default fixture;
