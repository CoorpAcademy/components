import React from 'react';
import ButtonLinkIcon from '../../atom/button-link-icon';
import Tag from '../../atom/tag';
import BulletPointMenuButton from '../../molecule/bullet-point-menu-button';
import style from './style.css';

import {CustomSkillHeaderProps} from './types';

const CustomSkillHeader = (props: CustomSkillHeaderProps) => {
  const {onQuitClick, title, tag, bulletPointMenuButton} = props;

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
    isHeaderCustomSkill: true
  };

  return (
    <div className={style.headerWrapper} data-name="header-wrapper">
      <div className={style.titleAndButtonWrapper} data-name="title-and-button-wrapper">
        <ButtonLinkIcon {...closeButtonProps} className={style.button} />
        <div className={style.titleWrapper}>
          <Tag {...tag} customStyle={{marginBottom: '4px'}} />
          <h3 className={style.title} aria-label={title} data-name="header-title">
            {title}
          </h3>
        </div>
      </div>
      <BulletPointMenuButton {...bulletPointMenuButtonProps} />
    </div>
  );
};

export default CustomSkillHeader;
