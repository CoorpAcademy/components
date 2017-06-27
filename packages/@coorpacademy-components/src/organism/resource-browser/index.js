import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ResourceMiniature from '../../atom/resource-miniature';
import VideoPlayer from '../../molecule/video-iframe';
import style from './style.css';

const SelectedVideo = ({videoType, videoId}) => (
  <VideoPlayer type="vimeo" id={videoId} height="100%" width="auto" autoplay />
);

const ResourceBrowser = props => {
  const {resources, className} = props;
  const selectedResource = resources.find(({selected}) => selected);

  return (
    <div className={classnames(style.default, className)}>
      <div className={style.playerWrapper}>
        {selectedResource ? <SelectedVideo {...selectedResource} /> : null}
      </div>
      <div className={style.resourcesList}>
        {resources.map(resource => <ResourceMiniature key={resource.videoId} {...resource} />)}
      </div>
    </div>
  );
};

ResourceBrowser.propTypes = {
  resources: PropTypes.arrayOf(
    PropTypes.shape({
      videoId: PropTypes.string,
      description: PropTypes.string
    })
  )
};

export default ResourceBrowser;
