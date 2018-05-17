import React from 'react';
import find from 'lodash/fp/find';
import omit from 'lodash/fp/omit';
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
        <ResourceMiniature key={resource._id} {...omit('ref', resource)} />
      ))}
    </div>
  );
};

const ResourceBrowser = props => {
  const {resources, className, overlay} = props;
  const selectedResource = find(({selected}) => selected, resources);

  return (
    <div data-name="resourceBrowser" className={classnames(style.default, className)}>
      {selectedResource && (
        <ResourcePlayer
          overlay={overlay}
          className={style.resourcePlayer}
          resource={selectedResource}
        />
      )}
      <Resources resources={resources} className={className} />
    </div>
  );
};

ResourceBrowser.propTypes = {
  className: PropTypes.string,
  resources: PropTypes.arrayOf(ResourcePlayer.propTypes.resource),
  overlay: ResourcePlayer.propTypes.overlay
};

export default ResourceBrowser;
