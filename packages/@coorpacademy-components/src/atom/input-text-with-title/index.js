import React from 'react';
import PropTypes from 'prop-types';
import InputText from '../input-text';
import style from './style.css';

const InputTextWithTitle = props => {
  const {inputText, title, 'data-name': dataName, 'aria-label': ariaLabel} = props;
  const inputTextClass = inputText.size === 'small' ? style.smallInputText : style.defaultInputText;

  return (
    <div className={style.container} data-name={dataName} aria-label={ariaLabel}>
      {title ? <span className={style.title}>{title}</span> : null}
      <div className={inputTextClass}>
        <InputText {...inputText} />
      </div>
    </div>
  );
};

InputTextWithTitle.propTypes = {
  inputText: PropTypes.shape({
    ...InputText.propTypes,
    theme: PropTypes.string,
    size: PropTypes.string
  }),
  title: PropTypes.string,
  'aria-label': PropTypes.string,
  'data-name': PropTypes.string
};
export default InputTextWithTitle;
