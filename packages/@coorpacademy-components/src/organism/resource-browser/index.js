import React from 'react';
import {find, omit} from 'lodash/fp';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ResourceMiniature from '../../atom/resource-miniature';
import ResourcePlayer from '../../molecule/resource-player';
import style from './style.css';

const hideResources = resources => !resources || resources.length < 2;

const Resources = ({resources, className}) => {
  if (hideResources(resources)) {
    return null;
  }

  return (
    <div className={style.resourcesList}>
      {resources.map(resource => (
        <ResourceMiniature {...omit('ref', resource)} key={resource._id} />
      ))}
    </div>
  );
};

Resources.propTypes = {
  resources: PropTypes.arrayOf(PropTypes.shape(omit('ref', ResourceMiniature.propTypes))),
  className: PropTypes.string
};

const ResourceBrowser = props => {
  const {resources, className, overlay} = props;
  const selectedResource = find(({selected}) => selected, resources);
  return (
    <div data-name="resourceBrowser" className={classnames(style.default, className)}>
      <div className={style.resourcePlayerWrapper}>
        {selectedResource ? (
          <ResourcePlayer
            overlay={overlay}
            className={style.resourcePlayer}
            resource={selectedResource}
          />
        ) : null}
      </div>
      <Resources resources={resources} className={className} />
    </div>
  );
};

ResourceBrowser.propTypes = {
  className: PropTypes.string,
  resources: Resources.propTypes.resources,
  overlay: ResourcePlayer.propTypes.overlay
};

export default ResourceBrowser;
