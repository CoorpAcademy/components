import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../atom/button';
import Input from '../../../atom/input-text';
import InputReadonly from '../../../atom/input-readonly';
import VideoUpload from '../../../atom/video-upload';
import style from './style.css';

const JwVideoUploader = ({
  onUpload,
  onInputTextChange,
  onInputFileChange,
  uploadedLink,
  inputTextValue,
  placeholder,
  previewContent
}) => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h1>Jw Video Upload</h1>
        <Input placeholder={placeholder} onChange={onInputTextChange} value={inputTextValue} />
        <VideoUpload
          title="Video Preview"
          onChange={onInputFileChange}
          uploadLabel="Choose or drag & drop a file"
          previewContent={previewContent}
        />
        <Button submitValue="Upload" onClick={onUpload}>
          Upload
        </Button>
        <InputReadonly title="Uploaded video link:" value={uploadedLink} />
      </div>
    </div>
  );
};

JwVideoUploader.propTypes = {
  ...VideoUpload.propTypes,
  onUpload: PropTypes.func,
  onInputTextChange: PropTypes.func,
  onInputFileChange: PropTypes.func,
  uploadedLink: PropTypes.string,
  inputTextValue: PropTypes.string,
  placeholder: PropTypes.string
};

export default JwVideoUploader;
