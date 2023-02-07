import {VideoMedia} from '@coorpacademy/review-services';
import {VideoPropsForPlayer} from '../src/types/common';

export const appendVideoOptions = (media: VideoMedia): Promise<VideoPropsForPlayer> => {
  const videoSrc = media.src[0];
  const {videoId, mediaRef} = videoSrc;
  return Promise.resolve({
    type: 'video',
    src: [
      {
        mimeType: 'application/jwplayer',
        videoId,
        mediaRef,
        type: 'video',
        jwpOptions: {
          playerId: '7IMa4DCK',
          playerScript: 'https://static.coorpacademy.com/JwPlayer/8.6.3/jwplayer.js',
          licenseKey: 'QDh3Fb2afiIAFI+XwlncwQDhNEwkXetm1y8tzWn3km8=',
          playlist: [
            {
              file: `https://content.jwplatform.com/manifests/${videoId}.m3u8`,
              tracks: [
                {
                  file: `https://content.jwplatform.com/strips/${videoId}-120.vtt`,
                  kind: 'thumbnails'
                }
              ]
            }
          ],
          customProps: {
            playbackRateControls: true,
            playbackRates: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
            preload: 'auto',
            autostart: 'true',
            width: '100%',
            height: '343px',
            visualplaylist: false,
            nextUpDisplay: false
          }
        }
      }
    ]
  });
};
