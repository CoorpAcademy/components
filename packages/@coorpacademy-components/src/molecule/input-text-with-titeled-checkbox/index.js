import React from 'react';
import PropTypes from 'prop-types';
import InputText from '../../atom/input-text';
import CheckboxWithTitle from '../../atom/checkbox-with-title';
import style from './style.css';

const InputTextWithTiteledCheckbox = props => {
  const {
    title,
    name,
    checked,
    checkBoxOnChange,
    checkBoxLabel,
    inputTextTitle,
    inputTextValue,
    inputTextPlaceholder,
    inputTextDescription,
    inputTextDisabled,
    inputTextModified,
    inputTextOnChange
  } = props;

  return (
    <div>
      <CheckboxWithTitle
        title={title}
        name={name}
        checked={checked}
        onChange={checkBoxOnChange}
        data-name="check-box"
        aria-label={checkBoxLabel}
      />
      <div className={style.inputText}>
        <InputText
          title={inputTextTitle}
          value={inputTextValue}
          placeholder={inputTextPlaceholder}
          theme="coorpmanager"
          description={inputTextDescription}
          disabled={inputTextDisabled}
          modified={inputTextModified}
          onChange={inputTextOnChange}
        />
      </div>
    </div>
  );
};

InputTextWithTiteledCheckbox.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  checkBoxOnChange: PropTypes.func,
  checkBoxLabel: PropTypes.string,
  inputTextTitle: PropTypes.string,
  inputTextValue: PropTypes.string,
  inputTextPlaceholder: PropTypes.string,
  inputTextDescription: PropTypes.string,
  inputTextDisabled: PropTypes.bool,
  inputTextModified: PropTypes.bool,
  inputTextOnChange: PropTypes.func
};
export default InputTextWithTiteledCheckbox;
