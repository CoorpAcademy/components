import React from 'react';
import {startsWith} from 'lodash/fp';
import PropTypes from 'prop-types';
import style from './style.css';

function ExternalContentViewer(props) {
  const {url, backgroundImageUrl, contentType} = props;

  return startsWith('audio', contentType) ? (
    <div className={style.podcastWrapper}>
      <div
        className={style.bgPodcast}
        style={{backgroundImage: backgroundImageUrl && `url(${backgroundImageUrl})`}}
      />
      <audio
        className={style.podcast}
        controls
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
      className={style.iframe}
      allowFullScreen
      data-name="external-content-iframe"
    />
  );
}

ExternalContentViewer.propTypes = {
  url: PropTypes.string.isRequired,
  backgroundImageUrl: PropTypes.string,
  contentType: PropTypes.string
};

export default ExternalContentViewer;
