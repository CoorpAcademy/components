import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import ResourcePlayer, {TYPE_IMAGE, TYPE_VIDEO, TYPE_PDF} from '../resource-player';
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
        <div className={style.title} data-name="title">
          {title}
        </div>
        <div className={style.descWrapper}>
          <div
            className={style.description}
            data-name="description"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: description}}
          />
          {resource && (
            <div>
              <ResourcePlayer className={style.resourcePlayer} resource={resource} />
              <div data-name="mediaDescription" className={style.mediaDescription}>
                {mediaDescription}
              </div>
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
  description: PropTypes.string,
  media: PropTypes.shape({
    type: PropTypes.oneOf([TYPE_IMAGE, TYPE_PDF, TYPE_VIDEO]),
    src: PropTypes.array
  }),
  mediaDescription: PropTypes.string
};

export default Feedback;
