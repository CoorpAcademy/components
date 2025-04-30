import React from 'react';
import IconPreview from '../../molecule/icon-preview';
import InputText from '../../atom/input-text';
import ButtonLink from '../../atom/button-link';
import Provider, {GetTranslateFromContext} from '../../atom/provider';
import type {WebContextValues} from '../../atom/provider/web-context';
import {COLORS} from '../../variables/colors';
import style from './style.css';
import propTypes, {IconEditorProps} from './types';

const IconEditor = (props: IconEditorProps, legacyContext: WebContextValues) => {
  const translate = GetTranslateFromContext(legacyContext);
  const {iconPreview, inputText, buttonLink} = props;
  const {title, icon} = iconPreview;

  const inputTextProps = {
    ...inputText,
    type: 'text',
    title: translate('icon_editor_color'),
    placeholder: COLORS.white,
    theme: 'coorpmanager',
    disabled: false,
    valid: false,
    inputColor: true
  };

  return (
    <>
      <IconPreview icon={{...icon}} title={title} />
      <div className={style.inputButtonContainer}>
        <InputText {...inputTextProps} />
        {buttonLink ? <ButtonLink {...buttonLink} /> : null}
      </div>
    </>
  );
};

IconEditor.contextTypes = {
  translate: Provider.childContextTypes.translate
};

IconEditor.propTypes = propTypes;

export default IconEditor;
