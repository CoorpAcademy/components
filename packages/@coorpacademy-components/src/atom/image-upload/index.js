import React from 'react';
import PropTypes from 'prop-types';
import DragAndDrop from '../drag-and-drop';
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
  name
}) => (
  <DragAndDrop
    title={title}
    description={description}
    previewLabel={previewLabel}
    previewContent={previewContent}
    uploadLabel={uploadLabel}
    loading={loading}
    modified={modified}
  >
    {(onDragStart, onDragStop) => (
      <input
        type="file"
        name={name}
        accept="image/*"
        disabled={loading}
        className={style.input}
        onChange={onChange}
        onDragEnter={onDragStart}
        onDrop={onDragStop}
        onDragLeave={onDragStop}
      />
    )}
  </DragAndDrop>
);

ImageUpload.propTypes = {
  ...DragAndDrop.propTypes,
  name: PropTypes.string,
  onChange: PropTypes.func
};

export default ImageUpload;
