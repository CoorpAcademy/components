import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../atom/button';
import Input from '../../../atom/input-text';
import InputReadonly from '../../../atom/input-readonly';
import VideoUpload from '../../../atom/video-upload';
import Title from '../../../atom/title';
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
        <Title>Jw Video Upload</Title>
        <Input
          placeholder={placeholder}
          onChange={e => onInputTextChange(e)}
          value={inputTextValue}
        />
        <VideoUpload
          title="Video Preview"
          onChange={e => onInputFileChange(e)}
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
  onUpload: PropTypes.func,
  onInputTextChange: PropTypes.func,
  onInputFileChange: PropTypes.func,
  uploadedLink: PropTypes.string,
  inputTextValue: PropTypes.string,
  previewContent: PropTypes.shape(VideoUpload.propTypes.previewContent),
  placeholder: PropTypes.string
};

export default JwVideoUploader;
