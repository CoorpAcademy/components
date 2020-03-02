import React from 'react';
import PropTypes from 'prop-types';
import {uniqueId, get} from 'lodash/fp';
import Dropzone from 'react-dropzone';
import Provider from '../../atom/provider';

import {Overlay} from './overlay';
import {UploadReport} from './upload-report';
import {PlaceHolder} from './placeholder';

import style from './style.css';

export const DragAndDrop = (props, context) => {
  const primaryColor = get('skin.common.primary', context);
  const idBox = uniqueId('drop-box-');
  const {
    title,
    buttonTitle,
    description,
    uploadLabel,
    previewLabel = '',
    previewContent,
    uploadSuccessMessage,
    uploadErrorMessage,
    errorMessage,
    accept,
    loading = false,
    onDrop
  } = props;

  const canDisplayPreview = previewContent && previewContent.src && previewContent.type;

  return (
    <Dropzone key={idBox} accept={accept} disabled={loading} onDrop={onDrop}>
      {({getRootProps, getInputProps, isDragActive}) => {
        const getView = () => {
          if (errorMessage || canDisplayPreview) {
            return (
              <UploadReport
                uploadErrorMessage={uploadErrorMessage}
                uploadSuccessMessage={uploadSuccessMessage}
                errorMessage={errorMessage}
                previewContent={previewContent}
                previewLabel={previewLabel}
              />
            );
          }

          return <PlaceHolder
            title={title}
            buttonTitle={buttonTitle}
            uploadLabel={uploadLabel}
            primaryColor={primaryColor}
          />;
        };

        return (
          <div className={style.wrapper} {...getRootProps()}>
            <input {...getInputProps()} />
            {getView()}
            {isDragActive || loading ? (
              <Overlay iconColor={primaryColor} description={description} isLoading={loading} />
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
  title: PropTypes.string,
  description: PropTypes.string,
  uploadLabel: PropTypes.string,
  previewLabel: PropTypes.string,
  accept: PropTypes.string,
  uploadErrorMessage: PropTypes.string,
  uploadSuccessMessage: PropTypes.string,
  previewContent: PropTypes.shape({
    type: PropTypes.string,
    src: PropTypes.string
  }),
  error: PropTypes.string,
  loading: PropTypes.bool
};

export default DragAndDrop;
