import React from 'react';
import PropTypes from 'prop-types';
import {uniqueId, getOr} from 'lodash/fp';
import Dropzone from 'react-dropzone';
import Provider from '../../atom/provider';

import {Overlay} from './overlay';
import {UploadReport} from './upload-report';
import {PlaceHolder} from './placeholder';

import style from './style.css';

export const DragAndDrop = (props, context) => {
  const {skin} = context;
  const primaryColor = getOr('#00B0FF', 'common.primary', skin);

  const idBox = uniqueId('drop-box-');
  const {
    type,
    title,
    message,
    dragAndDropMessage,
    buttonTitle,
    accept,
    content,
    onDrop,
    onDelete
  } = props;

  const loading = type === 'loading';

  return (
    <Dropzone key={idBox} accept={accept} disabled={loading} onDrop={onDrop}>
      {({getRootProps, getInputProps, isDragActive}) => {
        const getView = () => {
          if (type === 'success' || type === 'error' || type === 'ready') {
            return (
              <UploadReport
                type={type}
                message={message}
                content={content}
                onClick={onDrop}
                onDelete={onDelete}
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

        return (
          <div className={style.wrapper} {...getRootProps()}>
            <input {...getInputProps()} />
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
  );
};
DragAndDrop.contextTypes = {
  skin: Provider.childContextTypes.skin
};

DragAndDrop.propTypes = {
  type: PropTypes.oneOf(['default', 'ready', 'loading', 'success', 'error']).isRequired,
  title: PropTypes.string,
  message: PropTypes.string,
  dragAndDropMessage: PropTypes.string,
  buttonTitle: PropTypes.string,
  accept: PropTypes.string,
  content: PropTypes.shape({
    type: PropTypes.string,
    src: PropTypes.string
  }),
  onDrop: PropTypes.func,
  onDelete: PropTypes.func
};

export default DragAndDrop;
