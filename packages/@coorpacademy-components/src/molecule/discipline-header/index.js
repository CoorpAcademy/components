import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import VideoIframe from '../video-iframe';
import style from './style.css';

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

    const type = get('type', video);
    const id = get('id', video);
    const toggleLabel = this.state.fullDisplay ? translate('See less') : translate('Show more');

    return (
      <div data-name="disciplineHeader" className={style.wrapper}>
        <div className={style.imgWrapper}>
          <VideoIframe image={image} type={type} id={id} width="380px" height="250px" />
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
  image: VideoIframe.propTypes.image,
  title: PropTypes.string,
  description: PropTypes.string,
  video: PropTypes.shape({
    type: PropTypes.oneOf(['vimeo', 'youtube']),
    id: PropTypes.string
  })
};

export default DisciplineHeader;
