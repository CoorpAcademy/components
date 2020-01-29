import React from 'react';
import PropTypes from 'prop-types';
import {uniqueId, get, last} from 'lodash/fp';
import {
  NovaSolidDataTransferDataUpload1 as UploadIcon,
  NovaCompositionCoorpacademyBrokenHeart as HeartBrokenIcon,
  NovaCompositionCoorpacademyValidate as Validated
} from '@coorpacademy/nova-icons';
import Provider from '../provider';
import Loader from '../loader';
import {getFileNameFromUrl} from './helper';
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

    const canDisplayPreview = previewContent && previewContent.src && previewContent.type;

    const getPreview = () => {
      if (!canDisplayPreview) return <span>{previewLabel}</span>;
      if (previewContent.type === 'image') {
        return (
          <div className={style.previewView}>
            <img src={previewContent.src} />

            <p> {getFileNameFromUrl(previewContent.src)}</p>
            <div>
              <Validated className={style.previewIcon} />
            </div>
          </div>
        );
      }

      if (previewContent.type === 'video') {
        return (
          <div className={{...style.previewView, width: '300px'}}>
            <video width="100%" controls src={previewContent.src} type="video/*" />
          </div>
        );
      }

      return;
    };

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

    const errorRepport = (
      <div className={style.reportingContainer}>
        <div className={style.previewContainer}>
          <HeartBrokenIcon className={style.icon} />
        </div>

        <div className={style.errorReport}>
          <ol>
            {errors.map((error, index) => (
              <li key={`${index}`}> {error}</li>
            ))}
          </ol>
        </div>
      </div>
    );

    const successReport = (
      <div className={style.reportingContainer}>
        <div className={style.previewContainer}>{getPreview()}</div>
        <div className={style.repport}>
          <p>🎉</p>
        </div>
      </div>
    );

    const isErrored = errors.length > 0;

    const getView = () => {
      if (isErrored) {
        return errorRepport;
      }
      if (canDisplayPreview) {
        return successReport;
      }

      return dropZonePlaceHolder;
    };

    // <div className={modified ? style.modified : style.previewWrapper}>{previewView}</div>

    return (
      <div
        onDragEnter={this.handleDragEnter}
        onDragLeave={this.handleDragLeave}
        className={style.wrapper}
      >
        {getView()}
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
