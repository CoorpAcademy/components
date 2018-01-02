import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import ResourcePlayer from '../resource-player';
import style from './style.css';

const Feedback = (props, context) => {
  const {media, mediaDescription, title, description} = props;
  const resource = media &&
    media.type && {
      ...media,
      ...getOr({}, 'src.0', media)
    };

  return (
    ((resource || title || description) && (
      <div className={style.feedback} data-name="feedback">
        <div className={style.title}>{title}</div>
        <div className={style.descWrapper}>
          <div
            className={style.description}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: description}}
          />
          {resource && (
            <div>
              <ResourcePlayer className={style.resourcePlayer} resource={resource} />
              <div className={style.mediaDescription}>{mediaDescription}</div>
            </div>
          )}
        </div>
      </div>
    )) ||
    ''
  );
};

Feedback.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default Feedback;
