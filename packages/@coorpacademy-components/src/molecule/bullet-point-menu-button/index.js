import React, {useMemo}  from 'react';
import PropTypes from 'prop-types';
import ButtonLink from '../../atom/button-link';
import ButtonMenu from '../../atom/button-menu';
import style from './style.css';

const BulletPointMenuButton = props => {
  const {key, disabled = false, buttonAriaLabel, menuAriaLabel, onClick, buttons} = props;
  const handleOnClick = useMemo(() => () => onClick(), [onClick]);

  const menu = (
    <div key={`${key}-bullet-point-menu`} className={style.bulletPointMenu} aria-label={menuAriaLabel}>
      <ButtonMenu buttons={buttons} data-name="button-menu" key={`${key}-button-menu`} />
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
    <div className={style.bulletPointWrapper} data-name="bullet-point-wrapper" key={key}>
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
  onClick: PropTypes.func,
  // provide a key for rendering performance
  key: PropTypes.string
};

export default BulletPointMenuButton;
