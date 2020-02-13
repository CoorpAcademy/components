import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import Provider from '../../atom/provider';

export const Preview = ({type, src}, context) => {
  const translate = get('translate', context);
  switch (type) {
    case 'image':
      return <img src={src} />;

    case 'video':
      return <video controls width="100%" src={src} type="video/*" />;

    case 'scorm':
      return <p>{translate('scorm')}</p>;
    default:
      return <p>{translate('no_preview_available')}</p>;
  }
};

export default Preview;

Preview.propTypes = {
  type: PropTypes.oneOf(['video', 'image', 'scorm']),
  src: PropTypes.string
};
Preview.contextTypes = {
  translate: Provider.childContextTypes.translate
};
