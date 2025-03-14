import React from 'react';
import PropTypes from 'prop-types';
import IconPreview from '../../molecule/icon-preview';
import InputText from '../../atom/input-text';
import ButtonLink from '../../atom/button-link';
import Provider from '../../atom/provider';
import style from './style.css';

const IconEditor = (props, context) => {
  const {iconName, title, iconColor, buttonLink, handleChange} = props;
  const {translate} = context;

  return (
    <>
      <IconPreview iconName={iconName} title={title} iconColor={iconColor} />
      <div className={style.inputButtonContainer}>
        <InputText
          type="text"
          title={translate('icon_editor_color')}
          placeholder="#FFFF"
          theme="coorpmanager"
          description={translate('icon_editor_color')}
          value={iconColor}
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
  handleChange: PropTypes.func,
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
