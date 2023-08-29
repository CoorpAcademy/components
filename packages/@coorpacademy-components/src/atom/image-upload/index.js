import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {isNil} from 'lodash/fp';
import DragAndDrop from '../drag-and-drop';
import Link from '../button-link';
import {ImagePropType} from '../../util/proptypes';
import style from './style.css';

const ImageUpload = ({
  title,
  description,
  previewLabel,
  previewContent,
  uploadLabel,
  loading,
  modified,
  disabled = false,
  onChange,
  onReset = null,
  name,
  labelLink,
  labelButtonLink,
  hrefLink,
  imageTypes = 'image/*',
  error = '',
  buttonAriaLabel,
  errorButtonLabel,
  pdfButtonLabel,
  pdfButtonAriaLabel
}) => {
  const handleReset = useCallback(
    e => {
      if (isNil(onReset)) return;
      e.preventDefault();
      return onReset(e);
    },
    [onReset]
  );

  const linkCustomStyle = {
    width: '40px',
    color: '#FF541F'
  };

  return (
    <>
      <DragAndDrop
        title={title}
        description={description}
        previewLabel={previewLabel}
        previewContent={previewContent}
        uploadLabel={uploadLabel}
        loading={loading}
        modified={modified}
        onReset={handleReset}
        error={error}
        disabled={disabled}
        buttonAriaLabel={buttonAriaLabel}
        errorButtonLabel={errorButtonLabel}
        pdfButtonLabel={pdfButtonLabel}
        pdfButtonAriaLabel={pdfButtonAriaLabel}
      >
        {(onDragStart, onDragStop) => (
          <input
            type="file"
            name={name}
            accept={imageTypes}
            disabled={loading || disabled}
            className={style.input}
            onChange={onChange}
            onDragEnter={onDragStart}
            onDrop={onDragStop}
            onDragLeave={onDragStop}
          />
        )}
      </DragAndDrop>
      {labelLink && hrefLink ? (
        <div className={style.templateLink}>
          {labelLink}
          <Link
            type="text"
            customStyle={linkCustomStyle}
            link={{href: hrefLink, download: true}}
            label={labelButtonLink}
          />
        </div>
      ) : null}
    </>
  );
};

ImageUpload.propTypes = {
  ...DragAndDrop.propTypes,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onReset: PropTypes.func,
  imageTypes: ImagePropType,
  error: PropTypes.string,
  buttonAriaLabel: PropTypes.string,
  errorButtonLabel: PropTypes.string,
  labelLink: PropTypes.string,
  hrefLink: PropTypes.string
};

export default ImageUpload;
