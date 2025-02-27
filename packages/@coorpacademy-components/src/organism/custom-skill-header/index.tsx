import React from 'react';
import ButtonLink from '../../atom/button-link';
import ButtonLinkIcon from '../../atom/button-link-icon';
import BulletPointMenuButton from '../../molecule/bullet-point-menu-button';
import Tag from '../../atom/tag';
import {ButtonLinkProps} from '../../atom/button-link/types';
import {ActionButtonProps, CustomSkillHeaderProps} from './types';
import style from './style.css';

const commonButtonStyles = {
  fontWeight: '600',
  borderRadius: '12px'
};

const createButtonLinkProps = (
  buttonProps: ActionButtonProps,
  type: 'save' | 'publish'
): ButtonLinkProps => ({
  ...buttonProps,
  'data-name': `custom-skill-header-${type}-button`,
  'aria-label': `aria ${type} button`,
  type: type === 'save' ? 'secondary' : 'primary',
  icon: {
    position: 'left',
    faIcon: {
      name: type === 'save' ? 'floppy-disk' : buttonProps.faIconName ?? 'circle-check',
      color: type === 'save' ? '#1D1D2B' : '#FFFFFF',
      size: 14
    }
  },
  customStyle: commonButtonStyles,
  isCustomSkillMenu: true
});

const CustomSkillHeader = (props: CustomSkillHeaderProps) => {
  const {onQuitClick, title, tag, saveStatus, bulletPointMenuButton, saveButton, publishButton} =
    props;

  const saveButtonProps = createButtonLinkProps(saveButton, 'save');
  const publishButtonProps = createButtonLinkProps(publishButton, 'publish');

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

  return (
    <div className={style.headerWrapper} data-name="header-wrapper">
      <div className={style.titleAndButtonWrapper} data-name="title-and-button-wrapper">
        <ButtonLinkIcon {...closeButtonProps} className={style.button} />
        <div className={style.titleWrapper}>
          <div className={style.statusWrapper}>
            <Tag {...tag} />
            {saveStatus.display ? <p className={style.saveStatus}>{saveStatus.label}</p> : null}
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
