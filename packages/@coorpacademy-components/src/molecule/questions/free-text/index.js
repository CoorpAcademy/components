import React, {useCallback, useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import {noop, getOr} from 'lodash/fp';
import {convert} from 'css-color-function';
import Provider from '../../../atom/provider';
import {useWebContext} from '../../../atom/web-context';
import style from './style.css';

const FreeText = (props, legacyContext) => {
  const context = useWebContext();
  const skin = getOr(legacyContext.skin, 'skin', context);
  const {placeholder = '', value = '', onChange = noop, 'aria-label': ariaLabel} = props;
  const [hovered, setHovered] = useState(false);

  const handleChange = useCallback(e => onChange(e.target.value), [onChange]);
  const primarySkinColor = getOr('#00B0FF', 'common.primary', skin);

  const handleMouseOver = useCallback(() => setHovered(true), [setHovered]);

  const handleMouseLeave = useCallback(() => setHovered(false), [setHovered]);

  const shadowBoxPrimaryColor = useMemo(() => convert(`color(${primarySkinColor} a(12%))`), [
    primarySkinColor
  ]);

  return (
    <div
      data-name="freeText"
      className={style.wrapper}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      style={{
        ...(value && {
          boxShadow: hovered ? 'none' : `0 4px 16px ${shadowBoxPrimaryColor}`
        })
      }}
    >
      <input
        data-name="free-text-input"
        type="text"
        aria-label={ariaLabel || value || placeholder}
        className={style.freeText}
        placeholder={placeholder}
        value={value}
        onInput={handleChange}
        onChange={noop}
        style={{
          boxShadow: `0 4px 16px ${shadowBoxPrimaryColor}`,
          ...(value && {
            boxShadow: `0 4px 16px ${
              hovered ? convert(`color(${primarySkinColor} a(20%))`) : shadowBoxPrimaryColor
            }`
          }),
          color: primarySkinColor
        }}
      />
    </div>
  );
};

FreeText.contextTypes = {
  skin: Provider.childContextTypes.skin
};

FreeText.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  'aria-label': PropTypes.string
};

export default FreeText;
