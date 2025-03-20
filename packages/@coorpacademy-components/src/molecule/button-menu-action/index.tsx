import React, {useCallback, useEffect, useState} from 'react';
import classnames from 'classnames';
import {noop} from 'lodash/fp';
import ButtonLink from '../../atom/button-link';
import ButtonMenu from '../../atom/button-menu';
import propTypes, {ButtonMenuActionProps} from './types';
import style from './style.css';

const ButtonMenuAction = (props: ButtonMenuActionProps) => {
  const {button, menu, menuWrapper} = props;
  const {onClick = noop} = button;
  const [visible, setVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    onClick();
    setVisible(prevState => !prevState);
  }, [onClick]);

  useEffect(() => {
    const handleMouseDown = () => setVisible(false);
    document.addEventListener('mousedown', handleMouseDown);
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  const _menu = (
    <div
      className={classnames(style.menuWrapper, visible && style.visible)}
      data-name="menu-wrapper"
      aria-label={menuWrapper?.ariaLabel}
      style={menuWrapper?.customStyle}
    >
      <ButtonMenu {...menu} />
    </div>
  );

  return (
    <div className={style.container} data-name="button-menu-action-wrapper">
      <ButtonLink {...button} onClick={toggleVisibility} />
      {_menu}
    </div>
  );
};

ButtonMenuAction.propTypes = propTypes;

export default ButtonMenuAction;
