import React from 'react';
import PropTypes from 'prop-types';

const Sketchfab = ({modelId}) => {
  return (
    <iframe
      width="100%"
      height="100%"
      src={`https://sketchfab.com/models/${modelId}/embed?autostart=1`}
      allow="autoplay; fullscreen; vr"
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
    />
  );
};

Sketchfab.propTypes = {
  modelId: PropTypes.string.isRequired
};
export default Sketchfab;
