import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {join, map, pipe, isNil} from 'lodash/fp';
import DragAndDrop from '../drag-and-drop';
import {ImagePropType} from '../../util/proptypes';
import Link from '../button-link'
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
  // See ImagePropType for accepted values
  labelLink = '',
  labelButtonLink = '',
  hrefLink = '',
  imageTypes = ['*'],
  error = '',
  buttonAriaLabel ='',
  errorButtonLabel= ''
}) => {
  const handleReset = useCallback(
    e => {
      if (isNil(onReset)) return;
      e.preventDefault();
      return onReset(e);
    },
    [onReset]
  );

  const acceptedImages = pipe(
    map(t => `image/${t}`),
    join(',')
  )(imageTypes);
  
  return (
    <div>
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
    >
      {(onDragStart, onDragStop) => (
          <input
            type="file"
            name={name}
            accept={acceptedImages}
            disabled={loading || disabled}
            className={style.input}
            onChange={onChange}
            onDragEnter={onDragStart}
            onDrop={onDragStop}
            onDragLeave={onDragStop}
          />
      )}
    </DragAndDrop>
    {labelLink && hrefLink ? <div className={style.templateLink}>
           {labelLink}
            <Link type="text" customStyle={{width: '40px', color: 'red'}} link={{href: hrefLink, download: true}} label={labelButtonLink}></Link>
          </div>: null}
    </div>

  );
};

ImageUpload.propTypes = {
  ...DragAndDrop.propTypes,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onReset: PropTypes.func,
  imageTypes: PropTypes.arrayOf(ImagePropType),
  error: PropTypes.string,
  buttonAriaLabel: PropTypes.string,
  errorButtonLabel: PropTypes.string,
  labelLink: PropTypes.string,
  hrefLink: PropTypes.string,
};

export default ImageUpload;
