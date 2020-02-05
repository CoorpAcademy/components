import React from 'react';
import PropTypes from 'prop-types';

export const Preview = ({type, src}) => {
  switch (type) {
    case 'image':
      return <img src={src} />;

    case 'video':
      return <video controls width="100%" src={src} type="video/*" />;

    case 'scorm':
      return <p>Scorm</p>;
    default:
      <p>No Preview Available</p>;
  }
};

export default Preview;

Preview.propTypes = {
  type: PropTypes.oneOf(['video', 'image', 'scorm']),
  src: PropTypes.string
};
