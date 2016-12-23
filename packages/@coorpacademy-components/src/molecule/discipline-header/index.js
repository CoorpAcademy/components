import React, {PropTypes} from 'react';
import get from 'lodash/fp/get';
import * as CustomPropTypes from '../../util/proptypes';
import VideoIframe from '../video-iframe';
import style from './style.css';

function DisciplineHeader(props) {
  const {image, title, description, video} = props;

  const type = get('type', video);
  const id = get('id', video);
  const descView = (
    <div className={style.desc}>
      <div dangerouslySetInnerHTML={{__html: description}}/>
    </div>
  );


  return (
    <div className={style.wrapper}>
      <div className={style.imgWrapper}>
        <VideoIframe
          image={image}
          type={type}
          id={id}
          width="380px"
          height="250px"
        />
      </div>
      <div className={style.courseWrapper}>
          <div className={style.title}>
            {title}
          </div>
          {descView}
      </div>
    </div>
  );
}

DisciplineHeader.propTypes = {
  image: PropTypes.shape({
    '1x': CustomPropTypes.url,
    '2x': CustomPropTypes.url
  }),
  title: PropTypes.string,
  description: PropTypes.string,
  video: PropTypes.shape({
    type: PropTypes.oneOf(['vimeo', 'youtube']),
    id: PropTypes.string
  })
};

export default DisciplineHeader;
