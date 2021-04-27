import React from 'react';
import {startsWith} from 'lodash/fp';
import PropTypes from 'prop-types';
import style from './style.css';

const podcastWrapperStyle = {
  default: style.podcastWrapper,
  cockpit: style.podcastWrapperCockpit
};

const iframeStyle = {
  default: style.iframe,
  cockpit: style.iframeCockpit
};

function ExternalContentViewer(props) {
  const {url, backgroundImageUrl, contentType, mode = 'default'} = props;

  return startsWith('audio', contentType) ? (
    <div className={podcastWrapperStyle[mode]}>
      <div
        className={style.bgPodcast}
        style={{backgroundImage: backgroundImageUrl && `url(${backgroundImageUrl})`}}
      />
      <audio
        className={style.podcast}
        controls
        controlsList="nodownload"
        autoPlay=""
        name="media"
        data-name="external-content-podcast"
        preload="auto"
      >
        <source src={url} type={contentType} />
      </audio>
    </div>
  ) : (
    <iframe
      src={url}
      frameBorder={0}
      className={iframeStyle[mode]}
      allowFullScreen
      data-name="external-content-iframe"
    />
  );
}

ExternalContentViewer.propTypes = {
  url: PropTypes.string.isRequired,
  backgroundImageUrl: PropTypes.string,
  contentType: PropTypes.string,
  mode: PropTypes.string
};

export default ExternalContentViewer;
