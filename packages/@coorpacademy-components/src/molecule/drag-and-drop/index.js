import React from 'react';
import PropTypes from 'prop-types';
import {uniqueId} from 'lodash/fp';

import Dropzone from 'react-dropzone';
import {Overlay} from './overlay';
import {UploadReport} from './upload-report';
import {PlaceHolder} from './placeholder';

import style from './style.css';

export const DragAndDrop = props => {
  const idBox = uniqueId('drop-box-');
  const {
    title,
    description,
    uploadLabel,
    previewLabel = '',
    previewContent,
    uploadSuccessMessage,
    uploadErrorMessage,
    errorMessage,
    loading = false,
    onDrop
  } = props;

  const canDisplayPreview = previewContent && previewContent.src && previewContent.type;

  return (
    <section key={idBox}>
      <Dropzone disabled={loading} onDrop={onDrop}>
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

            return <PlaceHolder title={title} uploadLabel={uploadLabel} />;
          };

          return (
            <div className={style.wrapper} {...getRootProps()}>
              <input {...getInputProps()} />
              {getView()}
              {isDragActive || loading ? (
                <Overlay description={description} isLoading={loading} />
              ) : null}
            </div>
          );
        }}
      </Dropzone>
    </section>
  );
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
