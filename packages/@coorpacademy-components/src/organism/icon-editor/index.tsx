import React from 'react';
import IconPreview from '../../molecule/icon-preview';
import InputText from '../../atom/input-text';
import ButtonLink from '../../atom/button-link';
import Provider, {GetTranslateFromContext} from '../../atom/provider';
import {validateColor} from '../../util/validate-color';
import type {WebContextValues} from '../../atom/provider/web-context';
import {COLORS} from '../../variables/colors';
import style from './style.css';
import propTypes, {IconEditorProps} from './types';

const IconEditor = (props: IconEditorProps, legacyContext: WebContextValues) => {
  const translate = GetTranslateFromContext(legacyContext);
  const {iconPreview, inputText, buttonLink} = props;
  const {title, icon} = iconPreview;
  const {value, description, handleChange} = inputText;

  const isValidColor = validateColor(inputText.value);
  const previewColor = isValidColor ? value : COLORS.white;
  const inputError = value && (!isValidColor ? translate('invalid_color') : undefined);

  return (
    <>
      <IconPreview icon={{...icon, color: previewColor}} title={title} />
      <div className={style.inputButtonContainer}>
        <InputText
          type="text"
          title={translate('icon_editor_color')}
          placeholder={COLORS.white}
          theme="coorpmanager"
          description={description}
          value={value}
          error={inputError}
          disabled={false}
          valid={false}
          onChange={handleChange}
          inputColor
        />
        <ButtonLink {...buttonLink} />
      </div>
    </>
  );
};

IconEditor.contextTypes = {
  translate: Provider.childContextTypes.translate
};

IconEditor.propTypes = propTypes;

export default IconEditor;
