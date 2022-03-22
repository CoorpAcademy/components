import React from 'react';
import PropTypes from 'prop-types';
import {uniqueId, constant, isEmpty} from 'lodash/fp';
import {
  NovaLineStatusClose as Close,
  NovaSolidFilesBasicFileUpload2 as FileUploadIcon,
  NovaSolidFilesBasicFileBlock2 as FileUploadBlockedIcon
} from '@coorpacademy/nova-icons';
import Loader from '../loader';
import Button from '../button-link';
import getClassState from '../../util/get-class-state';
import style from './style.css';

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
    onReset: PropTypes.func,
    error: PropTypes.string
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
      onReset = null,
      error = ''
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
            <Loader theme="coorpmanager" />
          </div>
          <span className={style.loaderText}>Uploading</span>
        </div>
      );
    } else {
      previewView = <span>{previewLabel}</span>;
    }

    const resetContent =
      previewContent && previewContent.src ? (
        <div className={style.resetUploadWrapper}>
          <div className={style.resetSrcLabel}>{previewContent.src}</div>
          {onReset ? (
            <Close
              data-name="reset-content-icon"
              height={16}
              width={16}
              className={style.closeIcon}
              onClick={onReset}
            />
          ) : null}
        </div>
      ) : null;

    const buildButton = () => {
      const defaultButtonProps = {
        label: uploadLabel,
        'aria-label': 'aria button',
        'data-name': 'default-button',
        icon: {
          position: 'left',
          type: 'folders'
        }
      };
      if (dragging) {
        return null;
      } else if (error) {
        return <Button {...defaultButtonProps} label="Try again" icon={{}} />;
      } else {
        return <Button {...defaultButtonProps} />;
      }
    };

    const button = buildButton(dragging, error);

    const previewContainer = getClassState(
      style.previewContainer,
      style.modifiedPreviewContainer,
      null,
      modified,
      error
    );
    const inputWrapper = getClassState(
      style.inputWrapper,
      style.modifiedInputWrapper,
      style.errorInputWrapper,
      modified,
      error
    );

    return (
      <div className={style.wrapper} data-name="drag-and-drop-wrapper">
        {!isEmpty(previewContent) || loading ? (
          <div className={previewContainer}>{previewView}</div>
        ) : (
          <div className={dragging ? style.dragging : inputWrapper} id={idBox}>
            <div className={style.infosContainer}>
              {error ? (
                <FileUploadBlockedIcon className={style.iconError} />
              ) : (
                <FileUploadIcon className={style.icon} />
              )}
              {description ? <div className={style.description}>{description}</div> : null}
              {error ? null : <div className={style.title}>{title}</div>}
            </div>
            {button}
            <div>{children(this.handleDragStart, this.handleDragStop)}</div>
          </div>
        )}
        {error ? <span className={style.errorMessage}>{error}</span> : resetContent}
      </div>
    );
  }
}

export default DragAndDrop;
