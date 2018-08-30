import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../atom/button';
import Input from '../../../atom/input-text';
import InputReadonly from '../../../atom/input-readonly';
import ImageUpload from '../../../atom/image-upload';
import Title from '../../../atom/title';
import style from './style.css';

const JwVideoUploader = ({
  onUpload,
  onInputTextChange,
  onInputFileChange,
  uploadedLink,
  inputTextValue,
  placeholder,
  previewImage
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
        <ImageUpload
          onChange={e => onInputFileChange(e)}
          uploadLabel="Choose or drag & drop a file"
          previewImage={
            previewImage ||
            'https://static.coorpacademy.com/content/up/raw/logo_coorp-1491560495763.svg'
          }
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
  placeholder: PropTypes.string,
  previewImage: PropTypes.string
};

export default JwVideoUploader;
