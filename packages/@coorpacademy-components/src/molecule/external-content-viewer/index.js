import React from 'react';
import startsWith from 'lodash/fp/startsWith';
import includes from 'lodash/fp/includes';
import PropTypes from 'prop-types';
import style from './style.css';

const podcastWrapperStyle = {
  default: style.podcastWrapper,
  cockpit: style.podcastWrapperCockpit,
  mobile: style.podcastWrapper
};

const iframeStyle = {
  default: style.iframe,
  cockpit: style.iframeCockpit,
  mobile: style.iframe
};

function ExternalContentViewer(props) {
  const {url, backgroundImageUrl, contentType, mode = 'default'} = props;
  const isPdf = includes('.pdf', url);
  const googleViewer = `https://docs.google.com/viewerng/viewer?embedded=true&url=${url}`;

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
      src={isPdf && mode === 'mobile' ? googleViewer : url}
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
