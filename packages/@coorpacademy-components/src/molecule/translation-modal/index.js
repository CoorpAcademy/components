import React, {useMemo, useCallback} from 'react';
import PropTypes from 'prop-types';
import BaseModal from '../base-modal';
import Provider from '../../atom/provider';
import {COLORS} from '../../variables/colors';
import InputText from '../../atom/input-text';
import TextArea from '../../atom/input-textarea';
import style from './style.css';

const renderInputGroup = ({title, inputProps, textAreaProps, readOnly, disabled}) => {
  
  return (
    <div className={style.inputGroup}>
      <div className={style.title}>{title}</div>
            <InputText {...inputProps} readOnly={readOnly} disabled={disabled} />
      <TextArea {...textAreaProps} readOnly={readOnly} disabled={disabled} />

    </div>
  );
};

const TranslationModal = (props, context) => {
  const {
    isOpen,
    onCancel,
    onConfirm,
    onClose,
    disabled = false,
    source: {inputText: sourceInputText, textArea: sourceTextArea, inputLanguage},
    target: {inputText: targetInputText, textArea: targetTextArea, language: outputLanguage},
    readOnly = false
  } = props;
  const {translate} = context;

  const detectScrollbar = true;

  const handleCancel = useCallback(() => {
    onCancel();
  }, [onCancel]);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const footer = useMemo(() => {
    const cancelButton = {
      onCancel: handleCancel,
      label: translate(readOnly ? 'close' : 'cancel')
    };
    return {
      cancelButton,
      confirmButton: {
        onConfirm: readOnly ? undefined : onConfirm,
        label: translate('confirm'),
        iconName: 'check',
        disabled: disabled || readOnly,
        color: COLORS.cm_primary_blue
      }
    };
  }, [handleCancel, onConfirm, translate, readOnly, disabled]);

  if (!isOpen) return null;

  return (
    <BaseModal
      title={translate('translation_title')}
      description={translate('translation_description')}
      isOpen={isOpen}
      onClose={handleClose}
      footer={footer}
      headerIcon={{
        name: 'language',
        backgroundColor: '#D6E6FF'
      }}
      detectScrollbar={detectScrollbar}
    >
      <div className={style.translationModal}>
        <div className={style.horizontalSection}>
          {renderInputGroup({
            title: inputLanguage,
            inputProps: sourceInputText,
            textAreaProps: sourceTextArea,
            readOnly: true,
          })}

          <div className={style.separator} />

          {renderInputGroup({
            title: outputLanguage,
            inputProps: targetInputText,
            textAreaProps: targetTextArea,
            readOnly: readOnly,
          })}
        </div>
      </div>
    </BaseModal>
  );
};

TranslationModal.contextTypes = {
  translate: Provider.childContextTypes.translate
};

TranslationModal.propTypes = {
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  onClose: PropTypes.func,
  disabled: PropTypes.bool,
  source: PropTypes.shape({
    inputText: PropTypes.shape({
      ...InputText.propTypes,
      theme: PropTypes.string
    }),
    textArea: PropTypes.shape({
      ...TextArea.propTypes,
      theme: PropTypes.string
    }),
    inputLanguage: PropTypes.string
  }),
  target: PropTypes.shape({
    inputText: PropTypes.shape({
      ...InputText.propTypes,
      theme: PropTypes.string
    }),
    textArea: PropTypes.shape({
      ...TextArea.propTypes,
      theme: PropTypes.string
    }),
    language: PropTypes.string
  }),
  readOnly: PropTypes.bool
};

export default TranslationModal;
