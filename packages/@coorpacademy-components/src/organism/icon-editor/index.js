import React from 'react';
import PropTypes from 'prop-types';
import IconPreview from '../../molecule/icon-preview';
import InputText from '../../atom/input-text';
import ButtonLink from '../../atom/button-link';
import Provider from '../../atom/provider';
import {validateColor} from '../../util/validate-color';
import style from './style.css';

const IconEditor = (props, context) => {
  const {iconName, title, iconColor, buttonLink, handleChange} = props;
  const {translate} = context;

  const isValidColor = validateColor(iconColor);
  return (
    <>
      <IconPreview
        iconName={iconName}
        title={title}
        iconColor={isValidColor ? iconColor : '#FFFFFF'}
      />
      <div className={style.inputButtonContainer}>
        <InputText
          type="text"
          title={translate('icon_editor_color')}
          placeholder="#FFFFFF"
          theme="coorpmanager"
          description={translate('icon_editor_color')}
          value={iconColor}
          error={iconColor && !isValidColor && translate('invalid_color')}
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

IconEditor.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  title: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  buttonLink: PropTypes.shape({
    type: PropTypes.string,
    label: PropTypes.string,
    ariaLabel: PropTypes.string,
    dataName: PropTypes.string,
    icon: PropTypes.shape({
      position: PropTypes.string,
      type: PropTypes.string
    }),
    onClick: PropTypes.func
  })
};

export default IconEditor;
