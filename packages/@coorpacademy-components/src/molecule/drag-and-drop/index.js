import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import includes from 'lodash/fp/includes';
import Dropzone from 'react-dropzone';
import {NovaCompositionNavigationArrowLeft as ArrowLeft} from '@coorpacademy/nova-icons';
import Provider from '../../atom/provider';
import InputText from '../../atom/input-text';
import {Overlay} from './overlay';
import {UploadReport} from './upload-report';
import {PlaceHolder} from './placeholder';
import style from './style.css';

export const DragAndDrop = (props, context) => {
  const {skin} = context;
  const primaryColor = getOr('#00B0FF', 'common.primary', skin);

  const {
    state,
    title,
    message,
    warningMessage,
    mode,
    dragAndDropMessage,
    buttonTitle,
    backLabel,
    orLabel,
    accept,
    type: contentType = 'scorm',
    fields,
    onDrop,
    onDelete,
    onBack
  } = props;

  const handleBack = useCallback(
    e => {
      e.stopPropagation();
      e.preventDefault();
      onBack && onBack(e);
    },
    [onBack]
  );

  const loading = state === 'loading';
  return (
    <div>
      <span onClick={handleBack} className={style.back}>
        <ArrowLeft width={12} height={12} className={style.arrow} />
        {backLabel}
      </span>
      <Dropzone accept={accept} disabled={loading} onDrop={onDrop}>
        {({getRootProps, getInputProps, isDragActive}) => {
          const getView = () => {
            if (contentType !== 'scorm' || includes(state, ['success', 'error', 'ready'])) {
              return (
                <UploadReport
                  state={state}
                  message={message}
                  warningMessage={warningMessage}
                  fields={fields}
                  type={contentType}
                  onDelete={onDelete}
                  mode={mode}
                  orLabel={orLabel}
                  onClick={onDrop}
                  buttonTitle={buttonTitle}
                  primaryColor={primaryColor}
                />
              );
            }
            return (
              <PlaceHolder
                title={title}
                buttonTitle={buttonTitle}
                uploadLabel={message}
                primaryColor={primaryColor}
                onClick={onDrop}
              />
            );
          };

          const disableFileInput = state === 'success';

          return (
            <div {...getRootProps()} className={style.wrapper}>
              <input {...getInputProps()} disabled={disableFileInput} />
              {getView()}
              {isDragActive || loading ? (
                <Overlay
                  iconColor={primaryColor}
                  description={dragAndDropMessage}
                  isLoading={loading}
                />
              ) : null}
            </div>
          );
        }}
      </Dropzone>
    </div>
  );
};

DragAndDrop.contextTypes = {
  skin: Provider.childContextTypes.skin
};

DragAndDrop.propTypes = {
  state: PropTypes.oneOf(['default', 'ready', 'loading', 'success', 'error']).isRequired,
  mode: PropTypes.oneOf(['edit', 'upload']),
  title: PropTypes.string,
  type: PropTypes.string,
  message: PropTypes.string,
  warningMessage: PropTypes.string,
  dragAndDropMessage: PropTypes.string,
  buttonTitle: PropTypes.string,
  backLabel: PropTypes.string,
  orLabel: PropTypes.string,
  onBack: PropTypes.func,
  accept: PropTypes.string,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      ...InputText.propTypes,
      type: PropTypes.oneOf(['text'])
    })
  ),
  onDrop: PropTypes.func,
  onDelete: PropTypes.func,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['edit', 'upload', 'delete']),
      label: PropTypes.string,
      onClick: PropTypes.func
    })
  )
};

export default DragAndDrop;
