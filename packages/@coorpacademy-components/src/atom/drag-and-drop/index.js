import React from 'react';
import PropTypes from 'prop-types';
import {uniqueId, get, constant} from 'lodash/fp';
import {
  NovaLineStatusClose as Close,
  NovaSolidFilesBasicFileUpload2 as FileUploadIcon
} from '@coorpacademy/nova-icons';
import Provider from '../provider';
import Loader from '../loader';
import style from './style.css';
import Button from '../button-link';

const constantNull = constant(null);

class DragAndDrop extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    uploadLabel: PropTypes.string,
    previewLabel: PropTypes.string,
    previewContent: PropTypes.shape({
      type: PropTypes.string,
      src: PropTypes.string
    }),
    loading: PropTypes.bool,
    modified: PropTypes.bool,
    children: PropTypes.func,
    onReset: PropTypes.func
  };

  static contextTypes = {
    skin: Provider.childContextTypes.skin
  };

  constructor(props) {
    super(props);

    this.state = {
      dragging: false
    };

    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragStop = this.handleDragStop.bind(this);
  }

  handleDragStart() {
    this.setState({
      dragging: true
    });
  }

  handleDragStop() {
    this.setState({
      dragging: false
    });
  }

  render() {
    const idBox = uniqueId('drop-box-');
    const {
      children = constantNull,
      title,
      description,
      uploadLabel,
      previewLabel = '',
      previewContent,
      loading = false,
      modified = false,
      onReset = null
    } = this.props;
    const {dragging} = this.state;

    let previewView = null;

    if (previewContent && previewContent.type === 'image') {
      previewView = (
        <div className={style.preview}>
          <img src={previewContent.src} />
        </div>
      );
    } else if (previewContent && previewContent.type === 'video') {
      previewView = (
        <div className={style.preview}>
          <video controls src={previewContent.src} type="video/*" />
        </div>
      );
    } else if (loading) {
      previewView = (
        <div className={style.loaderWrapper}>
          <div className={style.loadingCancel}>
            <Close
              data-name="reset-content-icon"
              height={16}
              width={16}
              className={style.closeIcon}
              onClick={onReset}
            />
          </div>
          <div className={style.loader}>
            <Loader theme='coorpmanager'/>
          </div>
          <span className={style.loaderText}>Uploading</span>
        </div>
      );
    } else {
      previewView = <span>{previewLabel}</span>;
    }

    const resetContent =
      previewContent && previewContent.src && onReset ? (
        <div className={style.resetUploadWrapper}>
          <div className={style.resetSrcLabel}>{previewContent.src}</div>
          <Close
            data-name="reset-content-icon"
            height={16}
            width={16}
            className={style.closeIcon}
            onClick={onReset}
          />
        </div>
      ) : null;

      const buttonProps = {
          label: uploadLabel,
          'aria-label': 'aria button',
          'data-name': 'default-button',
          icon: {
            position: 'left',
            type: 'folders'
          },
      }

    return (
      <div className={style.wrapper} data-name="drag-and-drop-wrapper">
        {modified || loading ? 
          <div className={style.modificationsContainer}>{previewView}</div> 
          : 
          <div className={dragging ? style.dragging : style.inputWrapper} id={idBox}>
            <FileUploadIcon className={style.icon} />
            {description ? (
            <div className={style.description}>{description}</div>
            ) : null}
            <div className={style.title}>{title}</div>
            {dragging ? null : <Button {...buttonProps} />}
            {children(this.handleDragStart, this.handleDragStop)}
          </div>
        }
        {resetContent}
      </div>
    );
  }
}

export default DragAndDrop;
