import React from 'react';
import PropTypes from 'prop-types';
import {pipe, get, extend} from 'lodash/fp';
import classnames from 'classnames';
import ResourcePlayer, {TYPE_IMAGE, TYPE_VIDEO, TYPE_PDF, TYPE_AUDIO} from '../resource-player';
import style from './style.css';

const Feedback = (props, context) => {
  const {media, mediaDescription, title, description, mode} = props;
  const resource = media &&
    media.type && {
      ...media,
      ...pipe(get('src.0'), extend({description: mediaDescription}))(media)
    };

  return (
    (resource || title || description ? (
      <div className={mode === 'scorm' && style.feedbackContainerScorm}>
        <div className={style.feedback} data-name="feedback" id="feedback">
          <div
            className={classnames(style.title, style.innerHTML)}
            data-name="title"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: title}}
          />
          <div className={style.descWrapper}>
            <div
              className={classnames(style.description, style.innerHTML)}
              data-name="description"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{__html: description}}
            />
            {resource ? (
              <div>
                <ResourcePlayer className={style.resourcePlayer} resource={resource} />
                <div
                  data-name="mediaDescription"
                  className={classnames(style.mediaDescription, style.innerHTML)}
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{__html: mediaDescription}}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    ) : null) || ''
  );
};

Feedback.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  media: PropTypes.shape({
    type: PropTypes.oneOf([TYPE_IMAGE, TYPE_PDF, TYPE_VIDEO, TYPE_AUDIO]),
    src: PropTypes.array
  }),
  mediaDescription: PropTypes.string
};

export default Feedback;
