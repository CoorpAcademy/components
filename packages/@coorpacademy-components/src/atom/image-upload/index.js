import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {join, map, pipe} from 'lodash/fp';
import DragAndDrop from '../drag-and-drop';
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
  onChange,
  onReset = null,
  name,
  // See ImagePropType for accepted values
  imageTypes = ['*']
}) => {
  const handleReset = onReset
    ? useMemo(
        () => e => {
          e.preventDefault();
          return onReset(e);
        },
        [onReset]
      )
    : null;
  const acceptedImages = pipe(
    map(t => `image/${t}`),
    join(',')
  )(imageTypes);
  return (
    <DragAndDrop
      title={title}
      description={description}
      previewLabel={previewLabel}
      previewContent={previewContent}
      uploadLabel={uploadLabel}
      loading={loading}
      modified={modified}
      onReset={handleReset}
    >
      {(onDragStart, onDragStop) => (
        <div>
          <input
            type="file"
            name={name}
            accept={acceptedImages}
            disabled={loading}
            className={style.input}
            onChange={onChange}
            onDragEnter={onDragStart}
            onDrop={onDragStop}
            onDragLeave={onDragStop}
          />
        </div>
      )}
    </DragAndDrop>
  );
};

ImageUpload.propTypes = {
  ...DragAndDrop.propTypes,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onReset: PropTypes.func,
  imageTypes: PropTypes.arrayOf(ImagePropType)
};

export default ImageUpload;
