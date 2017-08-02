import React from 'react';
import PropTypes from 'prop-types';
import ReactJWPlayer from 'react-jw-player';
import {SrcPropType} from '../../util/proptypes';

const JWPlayer = ({jwpOptions}) => {
  return <div><ReactJWPlayer {...jwpOptions} /></div>;
};

JWPlayer.propTypes = {
  jwpOptions: PropTypes.shape({
    file: SrcPropType,
    customProps: PropTypes.shape({
      aspectratio: PropTypes.string,
      width: PropTypes.string,
      skin: PropTypes.shape({
        name: PropTypes.string
      })
    }),
    licenseKey: PropTypes.string.isRequired,
    playerScript: SrcPropType.isRequired
  })
};

export default JWPlayer;
