import React, {useCallback, useEffect, useState, useRef} from 'react';
import classnames from 'classnames';
import {noop} from 'lodash/fp';
import map from 'lodash/fp/map';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ButtonLink from '../../atom/button-link';
import ButtonMenu from '../../atom/button-menu';
import propTypes, {ButtonMenuActionProps} from './types';
import style from './style.css';

const ButtonMenuAction = (props: ButtonMenuActionProps) => {
  const {
    button,
    menu,
    menuWrapper,
    type = 'button',
    primaryColor,
    containerCustom,
    closeOnClick = false,
    enableScroll = false,
    showFade = false
  } = props;
  const {onClick = noop} = button;
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleVisibility = useCallback(() => {
    onClick();
    setVisible(prevState => !prevState);
  }, [onClick]);

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      if (visible && containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setVisible(false);
      }
    };

    document.addEventListener('mousedown', handleMouseDown);
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [visible, containerRef]);

  const menuWithClose = closeOnClick
    ? {
        ...menu,
        buttons: map(
          btn => ({
            ...btn,
            onClick: () => setVisible(false)
          }),
          menu.buttons
        )
      }
    : menu;

  const menuWrapperClass = classnames(style.menuWrapper, {
    [style.visible]: visible,
    [style.showFade]: showFade
  });

  const _menu = (
    <div
      className={menuWrapperClass}
      data-name="menu-wrapper"
      aria-label={menuWrapper?.ariaLabel}
      style={menuWrapper?.customStyle}
    >
      <ButtonMenu {...menuWithClose} enableScroll={enableScroll} />
    </div>
  );

  return (
    <div
      className={style.container}
      data-name="button-menu-action-wrapper"
      style={containerCustom}
      ref={containerRef}
    >
      {type === 'link' ? (
        <div
          className={style.currentOption}
          data-name={button['data-name']}
          onClick={toggleVisibility}
          aria-expanded={visible}
          aria-haspopup="true"
        >
          <span style={{color: visible ? primaryColor : undefined}}>{button.label}</span>
          <FontAwesomeIcon
            icon={visible ? 'chevron-up' : 'chevron-down'}
            className={style.caret}
            style={{color: visible ? primaryColor : undefined}}
            aria-label={button['aria-label']}
          />
        </div>
      ) : (
        <ButtonLink {...button} onClick={toggleVisibility} />
      )}
      {_menu}
    </div>
  );
};

ButtonMenuAction.propTypes = propTypes;

export default ButtonMenuAction;
