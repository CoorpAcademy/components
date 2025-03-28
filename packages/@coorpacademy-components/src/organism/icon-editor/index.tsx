import React from 'react';
import IconPreview from '../../molecule/icon-preview';
import InputText from '../../atom/input-text';
import ButtonLink from '../../atom/button-link';
import Provider from '../../atom/provider';
import {validateColor} from '../../util/validate-color';
import type {WebContextValues} from '../../atom/provider/web-context';
import style from './style.css';
import propTypes, {IconEditorProps} from './types';

const IconEditor = (props: IconEditorProps, context: WebContextValues) => {
  const {translate} = context;
  const {iconPreview, inputText, buttonLink} = props;
  const {title, icon} = iconPreview;

  const isValidColor = validateColor(icon.color);
  return (
    <>
      <IconPreview icon={{...icon, color: isValidColor ? icon.color : '#FFFFFF'}} title={title} />
      <div className={style.inputButtonContainer}>
        <InputText
          type="text"
          title={translate?.('icon_editor_color')}
          placeholder="#FFFFFF"
          theme="coorpmanager"
          description={translate?.('icon_editor_color')}
          value={icon.color}
          error={icon.color && !isValidColor ? translate?.('invalid_color') : undefined}
          disabled={false}
          valid={false}
          onChange={inputText.handleChange}
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
