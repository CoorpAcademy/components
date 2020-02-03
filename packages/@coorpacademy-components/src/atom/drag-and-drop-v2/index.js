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
      dragging: true
    };
  }

  handleDragEnter = e => {
    e.stopPropagation();
    this.setState({
      dragging: true
    });
  };

  handleDragLeave = e => {
    e.stopPropagation();
    this.setState({
      dragging: false
    });
  };

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
      onChange
    } = this.props;

    const canDisplayPreview = previewContent && previewContent.src && previewContent.type;

    const dropZonePlaceHolder = (
      <div className={style.dropZonePlaceHolder}>
        <div className={style.title}>{title}</div>
        <div className={style.inputWrapper}>
          <p className={style.uploadLabel}>{uploadLabel}</p>
        </div>
      </div>
    );

    const dropOverlay = (
      <div className={style.overlay}>
        <div className={style.arrow}>
          <UploadIcon color="#00b0ff" />
        </div>
        <p>{description}</p>
        <input
          type="file"
          name={name}
          accept="image/*"
          disabled={loading}
          className={style.input}
          onChange={onChange}
        />
      </div>
    );

    const loadingOverlay = (
      <div className={style.overlay}>
        <Loader />
      </div>
    );

    const errorRepport = (
      <div className={style.reportingContainer}>
        <div className={style.repport}>
          <span> 🥺 </span>
          <div>
            <p className={style.successLabel}>{'Upload Failed !'}</p>
            <p className={style.reportError}>{errors[1]}</p>
          </div>
          <Validated className={style.reportIcon} />
        </div>
        <div className={style.previewContainer}>
          <p>{'Oh snap'}</p>
        </div>
      </div>
    );

    const getPreview = () => {
      if (!canDisplayPreview) return <span>{previewLabel}</span>;
      if (previewContent.type === 'image') {
        return <img src={previewContent.src} />;
      }

      if (previewContent.type === 'video') {
        return <video controls width="100%" src={previewContent.src} type="video/*" />;
      }
    };

    const successReport = (
      <div className={style.reportingContainer}>
        <div className={style.repport}>
          <span>🎉</span>
          <div>
            <p className={style.successLabel}>{'Upload Suceeded !'}</p>
            <p className={style.fileName}>
              {canDisplayPreview && getFileNameFromUrl(previewContent.src)}
            </p>
          </div>
          <Validated className={style.reportIcon} />
        </div>
        <div className={style.previewContainer}>{getPreview()}</div>
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

    return (
      <div
        onDragEnter={this.handleDragEnter}
        onDragLeave={this.handleDragLeave}
        className={style.wrapper}
      >
        {getView()}
        {loading ? loadingOverlay : null}
        {dragging ? dropOverlay : null}
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
  loading: PropTypes.bool
};

export default DragAndDrop;
