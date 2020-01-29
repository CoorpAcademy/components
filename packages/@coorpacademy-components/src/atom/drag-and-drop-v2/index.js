import React from 'react';
import PropTypes from 'prop-types';
import {uniqueId, get} from 'lodash/fp';
import {
  NovaSolidDataTransferDataUpload1 as UploadIcon,
  NovaSolidVoteRewardsVoteHeart as HeartIcon,
  NovaCompositionCoorpacademyBrokenHeart as HeartBrokenIcon,
  NovaCompositionCoorpacademyVoteHeartOutline as HeartIconOutline
} from '@coorpacademy/nova-icons';
import Provider from '../provider';
import Loader from '../loader';
import style from './style.css';

class DragAndDrop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dragging: false
    };
  }

  handleDragLeave = e => {
    e.stopPropagation();
    this.setState({
      dragging: false
    });
  };

  handleDragEnter = e => {
    e.stopPropagation();
    this.setState({
      dragging: true
    });
  };

  handleDragStart = () => {};

  handleDragStop = () => {};

  render() {
    const {skin} = this.context;
    const {dragging} = this.state;
    const brandColor = get('common.brand', skin);
    const idBox = uniqueId('drop-box-');
    const {
      children = () => null,
      title,
      description,
      uploadLabel,
      previewLabel = '',
      previewContent,
      errors = [],
      loading = false,
      modified = false
    } = this.props;

    let previewView = null;

    if (previewContent && previewContent.type === 'image') {
      previewView = (
        <div className={style.previewView}>
          <img src={previewContent.src} />
        </div>
      );
    } else if (previewContent && previewContent.type === 'video') {
      previewView = (
        <div className={{...style.previewView, width: '300px'}}>
          <video width="100%" controls src={previewContent.src} type="video/*" />
        </div>
      );
    } else if (loading) {
      previewView = (
        <div className={style.loading}>
          <Loader />
        </div>
      );
    } else {
      previewView = <span>{previewLabel}</span>;
    }

    const displayReporting = errors.length > 0;

    const dropZonePlaceHolder = (
      <div className={style.dropZonePlaceHolder}>
        <div className={style.title}>{title}</div>
        <div className={style.inputWrapper}>
          <p className={style.uploadLabel}>{uploadLabel}</p>
          {/* {dragging ? children(this.handleDragStart, this.handleDragStop) : null} */}
        </div>
      </div>
    );

    const dropOverlay = (
      <div className={style.overlay}>
        <div className={style.arrow}>
          <UploadIcon color="#00b0ff" />
        </div>
        <p>{description}</p>
      </div>
    );

    const loadingOverlay = (
      <div className={style.overlay}>
        <Loader />
      </div>
    );

    const reporting = (
      <div className={style.reportingContainer}>
        <div className={style.preview}>
          <HeartBrokenIcon className={style.icon} />
        </div>

        <div className={style.reporting}>
          <ol>
            {errors.map((error, index) => (
              <li key={index}> {error}</li>
            ))}
          </ol>
        </div>
      </div>
    );

    // <div className={modified ? style.modified : style.previewWrapper}>{previewView}</div>

    return (
      <div
        onDragEnter={this.handleDragEnter}
        onDragLeave={this.handleDragLeave}
        className={style.wrapper}
      >
        {displayReporting ? reporting : dropZonePlaceHolder}
        {dragging ? dropOverlay : null}
        {loading ? loadingOverlay : null}
      </div>
    );
  }
}

DragAndDrop.contextTypes = {
  skin: Provider.childContextTypes.skin
};

DragAndDrop.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  uploadLabel: PropTypes.string,
  previewLabel: PropTypes.string,
  previewContent: PropTypes.shape({
    type: PropTypes.string,
    src: PropTypes.string
  }),
  errors: PropTypes.arrayOf(PropTypes.string),
  loading: PropTypes.bool,
  modified: PropTypes.bool
};

export default DragAndDrop;
