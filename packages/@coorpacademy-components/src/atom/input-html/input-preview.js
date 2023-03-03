import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from './input-preview.css';

const InputPreview = (props, context) => {
  const {title, text, placeholder, onChange, disabled, preview, className} = props;

  return !preview ? (
    <textarea
      data-testid="input-preview-textarea"
      className={className}
      name={title}
      value={text}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
    />
  ) : (
    <div
      data-testid="input-preview"
      className={classnames(style.preview, className)}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: text}}
    />
  );
};

InputPreview.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  preview: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  className: PropTypes.string
};
export default InputPreview;
