import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../atom/button';
import Input from '../../../atom/input-text';
import InputReadonly from '../../../atom/input-readonly';
import Title from '../../../atom/title';
import style from './style.css';

const LinkUpload = ({onUploadLink, onChange, onInputChange, uploadedLink}) => (
  <div className={style.link_upload}>
    <Title>Upload via link</Title>
    <Input placeholder="Enter the video link here" onChange={e => onInputChange(e)} />
    <Button submitValue="Upload" onClick={onUploadLink}>
      Upload
    </Button>
    <InputReadonly
      title="Uploaded video link:"
      value={uploadedLink || 'will appear here'}
      type="readonly"
    />
  </div>
);

const DragAndDrop = ({onUploadFile, onInputChange, uploadedLink}) => (
  <div className={style.drag_drop}>
    <Title>Upload a file</Title>
    <input type="file" onChange={e => onInputChange(e)} />
    <Button submitValue="Upload" onClick={onUploadFile}>
      Upload
    </Button>
    <InputReadonly
      title="Uploaded video link:"
      value={uploadedLink || 'will appear here'}
      type="readonly"
    />
  </div>
);

const JwVideoUploader = ({onUploadLink, onChange, onUploadFile, onInputChange, uploadedLink}) => {
  return (
    <div className={style.container}>
      <LinkUpload
        onUploadLink={onUploadLink}
        onInputChange={onInputChange}
        uploadedLink={uploadedLink}
      />
      <hr />
      <DragAndDrop
        onUploadFile={onUploadFile}
        onInputChange={onInputChange}
        uploadedLink={uploadedLink}
      />
    </div>
  );
};

JwVideoUploader.propTypes = {
  onUploadFile: PropTypes.func,
  onUploadLink: PropTypes.func,
  onInputChange: PropTypes.func,
  uploadedLink: PropTypes.string
};

export default JwVideoUploader;
