import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from './input-preview.css';

const InputPreview = (props, context) => {
  const {title, text, placeholder, handleChange, disabled, preview, className} = props;
  return !preview
    ? <textarea
        className={className}
        name={title}
        value={text}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={disabled}
      />
    : <div
        className={classnames(style.preview, className)}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: text
        }}
      />;
};

InputPreview.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  preview: PropTypes.bool.isRequired,
  handleChange: PropTypes.func,
  className: PropTypes.string
};
export default InputPreview;
