import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/fp/uniqueId';
import get from 'lodash/fp/get';
import UploadIcon from '@coorpacademy/nova-icons/lib/nova-solid/data-transfer/data-upload-1.web';
import Provider from '../provider';
import Loader from '../loader';
import style from './style.css';

class DragAndDrop extends React.Component {
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
      children = () => null,
      title,
      description,
      uploadLabel,
      previewLabel = '',
      previewContent,
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

    return (
      <div className={style.wrapper}>
        <div className={style.title}>{title}</div>
        <div className={modified ? style.modified : style.previewWrapper}>{previewView}</div>
        <div className={this.state.dragging ? style.dragging : style.inputWrapper} id={idBox}>
          <UploadIcon className={style.arrow} color={brandColor} />
          <div className={style.uploadLabel}>{uploadLabel}</div>
          {children(this.handleDragStart, this.handleDragStop)}
        </div>
        {description && <div className={style.description}>{description}</div>}
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
  loading: PropTypes.bool,
  modified: PropTypes.bool
};

export default DragAndDrop;
