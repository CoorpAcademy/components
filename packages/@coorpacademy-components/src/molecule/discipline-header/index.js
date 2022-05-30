import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import classnames from 'classnames';
import VideoPlayer from '../video-player';
import Picture from '../../atom/picture';
import style from './style.css';

const Preview = ({image, video}) => {
  const mimeType = get('mimeType', video);
  const id = get('id', video);
  const jwpOptions = get('jwpOptions', video);
  if (id) {
    return <VideoPlayer mimeType={mimeType} id={id} width="380px" height="250px" />;
  } else if (jwpOptions) {
    return <VideoPlayer {...video} />;
  } else {
    return <Picture className={style.image} src={image} />;
  }
};

Preview.propTypes = {
  image: Picture.propTypes.src,
  video: PropTypes.shape(VideoPlayer.propTypes)
};

class DisciplineHeader extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: Preview.propTypes.image,
    video: Preview.propTypes.video
  };

  static contextTypes = {
    translate: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      fullDisplay: false,
      offsetHeightShowMore: 0
    };
    this.handleToggleDisplay = this.handleToggleDisplay.bind(this);
    this.setHandle = this.setHandle.bind(this);
  }

  handleToggleDisplay() {
    this.setState(prevState => ({
      fullDisplay: !prevState.fullDisplay
    }));
  }

  setHandle(el) {
    this.setState({offsetHeightShowMore: getOr(0, 'offsetHeight', el)});
  }

  render() {
    const {image, title, description, video} = this.props;
    const {fullDisplay, offsetHeightShowMore} = this.state;
    const {translate} = this.context;
    const maxHeightDescription = 219;

    const toggleLabel = fullDisplay ? translate('See less') : translate('Show more');
    const descritpionViewStyle =
      offsetHeightShowMore <= maxHeightDescription ? style.showMoreHidden : style.showMore;

    return (
      <div data-name="disciplineHeader" className={style.wrapper}>
        {image || video ? (
          <div className={style.imgWrapper}>
            <Preview image={image} video={video} />
          </div>
        ) : null}
        <div className={style.courseWrapper}>
          <div
            data-name="title"
            className={classnames(style.title, style.innerHTML)}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: title}}
          />
          <div className={fullDisplay ? style.desc : style.shortDesc}>
            <div
              className={style.innerHTML}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{__html: description}}
              ref={this.setHandle}
            />
          </div>
          <div className={descritpionViewStyle} onClick={this.handleToggleDisplay}>
            {toggleLabel}
          </div>
        </div>
      </div>
    );
  }
}

export default DisciplineHeader;
