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
  name,
  onHandleDragStart,
  onHandleDragStop
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
    <input
      type="file"
      name={name}
      accept="video/*"
      disabled={loading}
      className={style.input}
      onChange={onChange}
      onDragEnter={onHandleDragStart}
      onDrop={onHandleDragStop}
      onDragLeave={onHandleDragStop}
    />
  </DragAndDrop>
);

VideoUpload.propTypes = {
  ...DragAndDrop.propTypes,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onHandleDragStart: PropTypes.func,
  onHandleDragStop: PropTypes.func
};

export default VideoUpload;
