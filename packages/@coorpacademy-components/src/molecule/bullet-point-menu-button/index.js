import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import ButtonLink from '../../atom/button-link';
import ButtonMenu from '../../atom/button-menu';
import style from './style.css';

const BulletPointMenuButton = props => {
  const {disabled = false, buttonAriaLabel, menuAriaLabel, onClick, buttons} = props;
  const handleOnClick = useCallback(() => onClick(), [onClick]);

  const menuProps = {
    'data-name': 'button-menu',
    buttons
  };

  const menu = (
    <div className={style.bulletPointMenu} data-name="menu-wrapper" aria-label={menuAriaLabel}>
      <ButtonMenu {...menuProps} />
    </div>
  );
  const bulletPointButtonProps = {
    type: 'secondary',
    'aria-label': buttonAriaLabel,
    'data-name': 'bullet-point-button',
    icon: {
      position: 'center',
      type: 'bullet-point'
    },
    onClick: handleOnClick,
    disabled
  };

  return (
    <div className={style.bulletPointWrapper} data-name="bullet-point-wrapper">
      <ButtonLink {...bulletPointButtonProps} className={style.bulletPointButton} />
      {menu}
    </div>
  );
};

BulletPointMenuButton.propTypes = {
  disabled: PropTypes.bool,
  buttonAriaLabel: PropTypes.string,
  menuAriaLabel: PropTypes.string,
  buttons: ButtonMenu.propTypes.buttons,
  onClick: PropTypes.func
};

export default BulletPointMenuButton;
