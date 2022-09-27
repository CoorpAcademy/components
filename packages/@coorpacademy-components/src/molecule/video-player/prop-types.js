import PropTypes from 'prop-types';
import {SrcPropType} from '../../util/proptypes';

export const JWPlayerPropTypes = {
  mimeType: PropTypes.string,
  scriptErrorMessage: PropTypes.string,
  disableAutostart: PropTypes.bool,
  // https://developer.jwplayer.com/jwplayer/docs/jw8-player-configuration-reference
  jwpOptions: PropTypes.shape({
    file: SrcPropType,
    customProps: PropTypes.shape({
      aspectratio: PropTypes.string,
      tracks: PropTypes.arrayOf(
        PropTypes.shape({
          file: SrcPropType,
          label: PropTypes.string,
          kind: PropTypes.string,
          default: PropTypes.bool
        })
      ),
      autostart: PropTypes.oneOf(['true', 'viewable', 'false']),
      width: PropTypes.string,
      skin: PropTypes.shape({
        name: PropTypes.string
      })
    }),
    licenseKey: PropTypes.string.isRequired,
    playerScript: SrcPropType.isRequired,
    playerId: PropTypes.string.isRequired
  }),
  onPlay: PropTypes.func,
  onResume: PropTypes.func,
  onPause: PropTypes.func,
  onEnded: PropTypes.func,
  onError: PropTypes.func,
  onPlayAttemptFailed: PropTypes.func,
  onAutostartNotAllowed: PropTypes.func,
  onSetupError: PropTypes.func,
  onWarning: PropTypes.func
};

export default {
  id: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  url: SrcPropType,
  onPlay: PropTypes.func,
  onResume: PropTypes.func,
  onPause: PropTypes.func,
  onEnded: PropTypes.func,
  onError: PropTypes.func,
  autoplay: PropTypes.bool,
  disableAutostart: PropTypes.bool,
  jwpOptions: JWPlayerPropTypes.jwpOptions,
  mimeType: PropTypes.oneOf([
    'application/kontiki',
    'application/uptale',
    'application/vimeo',
    'application/youtube',
    'application/jwplayer',
    'application/omniPlayer',
    'application/h5p',
    'video/mp4'
  ]).isRequired
};
