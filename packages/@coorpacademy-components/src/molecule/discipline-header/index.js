import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import classnames from 'classnames';
import {NovaSolidSynchronizeSynchronize3 as SyncIcon} from '@coorpacademy/nova-icons';
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
    video: Preview.propTypes.video,
    lastUpdated: PropTypes.string,
    invertedLanguage: PropTypes.bool
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
    const {image, title, description, video, lastUpdated, invertedLanguage} = this.props;
    const {fullDisplay, offsetHeightShowMore} = this.state;
    const {translate} = this.context;
    const maxHeightCourseInfos = 209;
    const hasMediaContent = image || video;
    const toggleLabel = fullDisplay ? translate('See less') : translate('Show more');
    const shortCourseText = offsetHeightShowMore <= maxHeightCourseInfos;
    const courseSeeMoreButtonStyle = shortCourseText ? style.showMoreHidden : style.showMore;

    return (
      <div data-name="disciplineHeader" className={style.wrapper}>
        {hasMediaContent ? (
          <div className={style.imgWrapper}>
            <Preview image={image} video={video} />
          </div>
        ) : null}
        <div className={style.courseWrapper}>
          <div className={fullDisplay ? style.courseTextWrapperFull : style.courseTextWrapperShort}>
            <div
              data-name="title"
              className={classnames(style.title, style.innerHTML)}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{__html: title}}
            />
            <div
              className={style.innerHTML}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{__html: description}}
              ref={this.setHandle}
            />
          </div>
          <div className={invertedLanguage ? style.invertedLanguage : null}>
            <div className={courseSeeMoreButtonStyle} onClick={this.handleToggleDisplay}>
              {toggleLabel}
            </div>
            {lastUpdated ? (
              <div
                className={classnames(
                  style.lastUpdatedWrapper,
                  shortCourseText ? style.lastUpdatedWrapperShort : null
                )}
              >
                <SyncIcon className={style.syncIcon} />
                <div
                  className={classnames(style.lastUpdatedText, style.innerHTML)}
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{__html: lastUpdated}}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default DisciplineHeader;
