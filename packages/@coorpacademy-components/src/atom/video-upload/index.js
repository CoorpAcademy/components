import React from 'react';
import PropTypes from 'prop-types';
import DragAndDrop from '../drag-and-drop';
import style from './style.css';

const VideoUpload = ({
  title,
  description,
  previewLabel,
  uploadLabel,
  previewContent,
  loading,
  modified,
  onChange,
  name
}) => (
  <DragAndDrop
    title={title}
    description={description}
    previewLabel={previewLabel}
    uploadLabel={uploadLabel}
    previewContent={previewContent}
    loading={loading}
    modified={modified}
  >
    {(onDragStart, onDragStop) => (
      <input
        type="file"
        name={name}
        accept="video/*"
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

VideoUpload.propTypes = {
  ...DragAndDrop.propTypes,
  name: PropTypes.string,
  onChange: PropTypes.func
};

export default VideoUpload;
