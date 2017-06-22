import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/fp/uniqueId';
import get from 'lodash/fp/get';
import UploadIcon from '@coorpacademy/nova-icons/solid/data-transfer/data-upload-1';
import Provider from '../provider';
import Loader from './../loader';
import style from './style.css';

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dragging: false
    };

    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragStop = this.handleDragStop.bind(this);
  }

  handleDragStart() {
    this.setState(prevState => ({
      dragging: true
    }));
  }

  handleDragStop() {
    this.setState(prevState => ({
      dragging: false
    }));
  }

  render() {
    const {skin} = this.context;
    const brandColor = get('common.brand', skin);
    const idBox = uniqueId('drop-box-');
    const {
      title,
      onChange,
      uploadLabel,
      previewLabel = '',
      previewImage,
      loading = false,
      modified = false
    } = this.props;

    let previewView = '';
    if (previewImage) {
      previewView = (
        <div className={style.image}>
          <img src={previewImage} />
        </div>
      );
    } else if (loading) {
      previewView = (
        <div className={style.loading}>
          <Loader />
        </div>
      );
    } else {
      previewView = (
        <span>
          {previewLabel}
        </span>
      );
    }

    return (
      <div className={style.wrapper}>
        <div className={style.title}>{title}</div>
        <div className={modified ? style.modified : style.previewWrapper}>
          {previewView}
        </div>
        <div className={this.state.dragging ? style.dragging : style.inputWrapper} id={idBox}>
          <UploadIcon className={style.arrow} color={brandColor} />
          <div className={style.uploadLabel}>
            {uploadLabel}
          </div>
          <input
            type="file"
            accept="image/*"
            disabled={loading}
            className={style.input}
            onChange={onChange}
            onDragEnter={this.handleDragStart}
            onDrop={this.handleDragStop}
            onDragLeave={this.handleDragStop}
          />
        </div>
      </div>
    );
  }
}

ImageUpload.contextTypes = {
  skin: Provider.childContextTypes.skin
};

ImageUpload.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func,
  uploadLabel: PropTypes.string,
  previewLabel: PropTypes.string,
  previewImage: PropTypes.string,
  loading: PropTypes.bool,
  modified: PropTypes.bool
};

export default ImageUpload;
