import React from 'react';
import PropTypes from 'prop-types';
import ReactJWPlayer from 'react-jw-player';
import {SrcPropType} from '../../util/proptypes';

const JWPlayer = ({jwpOptions}) => {
  return <ReactJWPlayer {...jwpOptions} />;
};

JWPlayer.propTypes = {
  jwpOptions: PropTypes.shape({
    file: PropTypes.string,
    aspectRatio: PropTypes.string,
    customProps: PropTypes.shape({
      skin: PropTypes.shape({
        name: PropTypes.string
      })
    }),
    licenseKey: PropTypes.string.isRequired,
    mediaUrl: SrcPropType.isRequired,
    playerScript: SrcPropType.isRequired
  })
};

export default JWPlayer;
