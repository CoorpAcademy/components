import React from 'react';
import ButtonLink from '../../atom/button-link';
import ButtonLinkIcon from '../../atom/button-link-icon';
import BulletPointMenuButton from '../../molecule/bullet-point-menu-button';
import Tag from '../../atom/tag';
import {ButtonLinkProps} from '../../atom/button-link/types';
import style from './style.css';

import {CustomSkillHeaderProps} from './types';

const CustomSkillHeader = (props: CustomSkillHeaderProps) => {
  const {onQuitClick, title, tag, saveStatus, bulletPointMenuButton, saveButton, publishButton} =
    props;

  const commonButtonStyles = {
    fontWeight: '600',
    borderRadius: '12px'
  };

  const closeButtonProps = {
    size: 'default',
    icon: 'close',
    'data-name': 'custom-skill-header-close-button',
    'aria-label': 'close-button-aria-label',
    onClick: onQuitClick
  };

  const bulletPointMenuButtonProps = {
    ...bulletPointMenuButton,
    buttonAriaLabel: 'aria button bullet point menu',
    menuAriaLabel: 'aria button bullet point menu',
    isCustomSkillMenu: true
  };

  const saveButtonProps: ButtonLinkProps = {
    ...saveButton,
    'data-name': 'custom-skill-header-save-button',
    'aria-label': 'aria save button',
    type: 'secondary',
    icon: {
      position: 'left',
      faIcon: {name: 'floppy-disk', color: '#1D1D2B', size: 14}
    },
    customStyle: commonButtonStyles,
    isCustomSkillMenu: true
  };

  const publishButtonProps: ButtonLinkProps = {
    ...publishButton,
    'data-name': 'custom-skill-header-save-button',
    'aria-label': 'aria save button',
    type: 'primary',
    icon: {
      position: 'left',
      faIcon: {name: 'circle-check', color: '#FFFFFF', size: 14}
    },
    customStyle: commonButtonStyles,
    isCustomSkillMenu: true
  };

  return (
    <div className={style.headerWrapper} data-name="header-wrapper">
      <div className={style.titleAndButtonWrapper} data-name="title-and-button-wrapper">
        <ButtonLinkIcon {...closeButtonProps} className={style.button} />
        <div className={style.titleWrapper}>
          <div className={style.statusWrapper}>
            <Tag {...tag} />
            <p className={style.saveStatus}>{saveStatus}</p>
          </div>
          <h3 className={style.title} aria-label={title} data-name="header-title">
            {title}
          </h3>
        </div>
      </div>
      <div className={style.buttonsWrapper} data-name="button-wrapper">
        <BulletPointMenuButton {...bulletPointMenuButtonProps} />
        <ButtonLink {...saveButtonProps} />
        <ButtonLink {...publishButtonProps} />
      </div>
    </div>
  );
};

export default CustomSkillHeader;
