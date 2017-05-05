import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/fp/uniqueId';
import shallowCompare from '../../util/shallow-compare';
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

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return shallowCompare(this, nextProps, nextState, nextContext);
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
          <i className={style.arrow} />
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
