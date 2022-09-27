import PropTypes from 'prop-types';
import {SrcPropType} from '../../util/proptypes';

export default {
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
