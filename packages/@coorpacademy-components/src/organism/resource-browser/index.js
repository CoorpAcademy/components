import React from 'react';
import find from 'lodash/fp/find';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ResourceMiniature from '../../atom/resource-miniature';
import VideoPlayer from '../../molecule/video-player';
import PDF from '../../molecule/pdf';
import style from './style.css';

const SelectedVideo = props => {
  const {videoId, autoplay = false} = props;
  return <VideoPlayer id={videoId} height="100%" width="100%" autoplay={autoplay} {...props} />;
};

const SELECTED_TYPES = {
  video: SelectedVideo,
  pdf: PDF
};

const hideResources = resources => !resources || resources.length < 2;

const Resources = ({resources, className}) => {
  if (hideResources(resources)) {
    return null;
  }

  return (
    <div className={style.resourcesList}>
      {resources.map(resource => <ResourceMiniature key={resource._id} {...resource} />)}
    </div>
  );
};

const ResourceBrowser = props => {
  const {resources, className} = props;
  const selectedResource = find(({selected}) => selected, resources);
  const SelectedResourceType = selectedResource && SELECTED_TYPES[selectedResource.type];

  return (
    <div data-name="resourceBrowser" className={classnames(style.default, className)}>
      <div className={style.playerWrapper}>
        {selectedResource ? <SelectedResourceType {...selectedResource} /> : null}
      </div>
      <Resources resources={resources} className={className} />
    </div>
  );
};

const resourcePropTypeBase = {
  _id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const videoPropType = PropTypes.shape({
  ...resourcePropTypeBase,
  ...VideoPlayer.propTypes
});

const pdfPropType = PropTypes.shape({
  ...resourcePropTypeBase,
  mediaUrl: PropTypes.string.isRequired,
  onPlay: PropTypes.func
});

ResourceBrowser.propTypes = {
  resources: PropTypes.arrayOf(PropTypes.oneOfType([videoPropType, pdfPropType]))
};

export default ResourceBrowser;
