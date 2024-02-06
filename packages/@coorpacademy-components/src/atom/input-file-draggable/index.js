import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {isNil} from 'lodash/fp';
import {
  NovaSolidFilesBasicFileLines as FileLinesIcon,
  NovaCompositionCoorpacademyEye as EyeIcon
} from '@coorpacademy/nova-icons';
import DragAndDrop from '../drag-and-drop';
import Link from '../button-link';
import {FilesPropType} from '../../util/proptypes';
import style from './style.css';

const InputFileDraggable = ({
  title,
  description,
  previewLabel,
  previewContent,
  uploadLabel,
  loading,
  modified,
  disabled = false,
  disableHoverTooltip = false,
  onChange,
  onReset = null,
  name,
  labelLink,
  labelButtonLink,
  hrefLink,
  filesTypes = '',
  error = '',
  buttonAriaLabel,
  errorButtonLabel,
  pdfButtonLabel,
  pdfButtonAriaLabel,
  filesNumber = 0,
  multiple = false,
  required = false,
  onClick
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

  const onClick_ = useCallback(
    e => {
      e.preventDefault();
      return onClick(e);
    },
    [onClick]
  );

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
        disableHoverTooltip={disableHoverTooltip}
        buttonAriaLabel={buttonAriaLabel}
        errorButtonLabel={errorButtonLabel}
        pdfButtonLabel={pdfButtonLabel}
        pdfButtonAriaLabel={pdfButtonAriaLabel}
        multiple={multiple}
      >
        {(onDragStart, onDragStop) => (
          <input
            {...(disableHoverTooltip ? {title: ''} : {})}
            type="file"
            name={name}
            accept={filesTypes}
            disabled={loading || disabled}
            className={style.input}
            onChange={onChange}
            onDragEnter={onDragStart}
            onDrop={onDragStop}
            onDragLeave={onDragStop}
            multiple={multiple}
            required={required}
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
      {multiple && filesNumber > 0 ? (
        <div className={style.multipleFilesContainer}>
          <div className={style.filesNumber}>
            <FileLinesIcon className={style.icon} />
            <div>{filesNumber} files</div>
          </div>
          <div className={style.seeDetailsButton} onClick={onClick_}>
            <EyeIcon className={style.seeIcon} />
            <div>See details</div>
          </div>
        </div>
      ) : null}
    </>
  );
};

InputFileDraggable.propTypes = {
  ...DragAndDrop.propTypes,
  disableHoverTooltip: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onReset: PropTypes.func,
  filesTypes: FilesPropType,
  error: PropTypes.string,
  buttonAriaLabel: PropTypes.string,
  errorButtonLabel: PropTypes.string,
  labelLink: PropTypes.string,
  hrefLink: PropTypes.string
};

export default InputFileDraggable;
