import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import VideoPlayer from '../video-player';
import Picture from '../../atom/picture';
import style from './style.css';

const Preview = ({image, video}) => {
  const mimeType = get('mimeType', video);
  const id = get('id', video);

  if (id) {
    return <VideoPlayer mimeType={mimeType} id={id} width="380px" height="250px" />;
  } else {
    return <Picture className={style.image} src={image} />;
  }
};

Preview.propTypes = {
  image: Picture.propTypes.src,
  video: PropTypes.shape(VideoPlayer.propTypes)
};

class DisciplineHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullDisplay: false
    };
    this.handleToggleDisplay = this.handleToggleDisplay.bind(this);
  }

  handleToggleDisplay() {
    this.setState(prevState => ({
      fullDisplay: !prevState.fullDisplay
    }));
  }

  render() {
    const {image, title, description, video} = this.props;
    const {translate} = this.context;

    const toggleLabel = this.state.fullDisplay ? translate('See less') : translate('Show more');

    return (
      <div data-name="disciplineHeader" className={style.wrapper}>
        <div className={style.imgWrapper}>
          <Preview image={image} video={video} />
        </div>
        <div className={style.courseWrapper}>
          <div data-name="title" className={style.title}>
            {title}
          </div>
          <div className={this.state.fullDisplay ? style.desc : style.shortDesc}>
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: description
              }}
            />
          </div>
          <div className={style.toggle} onClick={this.handleToggleDisplay}>
            {toggleLabel}
          </div>
        </div>
      </div>
    );
  }
}

DisciplineHeader.contextTypes = {
  translate: PropTypes.func
};

DisciplineHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: Preview.propTypes.image,
  video: Preview.propTypes.video
};

export default DisciplineHeader;
