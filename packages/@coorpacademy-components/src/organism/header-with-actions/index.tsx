import React from 'react';
import isEmpty from 'lodash/fp/isEmpty';
import map from 'lodash/fp/map';
import size from 'lodash/fp/size';
import ButtonLink from '../../atom/button-link';
import ButtonLinkIcon from '../../atom/button-link-icon';
import BulletPointMenuButton from '../../molecule/bullet-point-menu-button';
import Tag from '../../atom/tag';
import {ButtonLinkProps} from '../../atom/button-link/types';
import {COLORS} from '../../variables/colors';
import {BulletPointMenuButtonProps} from '../../molecule/bullet-point-menu-button/types';
import headerWithActionsPropTypes, {ActionButtonProps, HeaderWithActionsProps} from './types';
import style from './style.css';

const BUTTON_TYPES = ['save'];

const COMMON_BUTTON_STYLES = {
  fontWeight: '600',
  borderRadius: '12px',
  padding: '12px 16px'
};

const ICON_SIZE = 14;

const ICON_NAME: Record<string, string> = {
  save: 'floppy-disk',
  archive: 'folder-open',
  publish: 'circle-check',
  republish: 'cloud-arrow-up'
};

const getDataName = (suffix: string) => `header-with-actions-${suffix}`;

const createButtonLinkProps = (
  buttonProps: ActionButtonProps,
  type: string,
  isSingle: boolean
): ButtonLinkProps => {
  const buttonType = isSingle || BUTTON_TYPES.includes(type) ? 'secondary' : 'primary';
  const iconName = ICON_NAME[type];
  const iconColor = isSingle || BUTTON_TYPES.includes(type) ? COLORS.cm_grey_700 : COLORS.white;
  const customStyle = {
    ...COMMON_BUTTON_STYLES,
    paddingLeft: iconName ? '8px' : '16px'
  };

  const buttonLinkProps: ButtonLinkProps = {
    ...buttonProps,
    'data-name': getDataName(`${type}-button`),
    type: buttonType,
    customStyle
  };

  if (iconName) {
    buttonLinkProps.icon = {
      position: 'left',
      faIcon: {
        name: iconName,
        color: iconColor,
        size: ICON_SIZE
      }
    };
  }

  return buttonLinkProps;
};

const HeaderWithActions = (props: HeaderWithActionsProps) => {
  const {onClose, title, tag, saveStatus, bulletPointMenuButton, actionButtons} = props;

  const closeButtonProps = {
    size: 'default',
    icon: 'close',
    'data-name': getDataName('close-button'),
    'aria-label': 'Close',
    onClick: onClose
  };

  const bulletPointMenuButtonProps = {
    ...(bulletPointMenuButton as BulletPointMenuButtonProps),
    buttonAriaLabel: 'More actions'
  };

  return (
    <div className={style.headerWrapper} data-name={getDataName('wrapper')}>
      <div
        className={style.titleAndButtonWrapper}
        data-name={getDataName('title-and-button-wrapper')}
      >
        <ButtonLinkIcon {...closeButtonProps} className={style.button} />
        <div className={style.titleWrapper}>
          <div className={style.statusWrapper}>
            <Tag {...tag} />
            {saveStatus.display && saveStatus.label ? (
              <p className={style.saveStatus}>{saveStatus.label}</p>
            ) : null}
          </div>
          <h3 className={style.title} aria-label={title} data-name={getDataName('title')}>
            {title}
          </h3>
        </div>
      </div>
      <div className={style.buttonsWrapper} data-name={getDataName('buttons-wrapper')}>
        {bulletPointMenuButton && !isEmpty(bulletPointMenuButton.buttons) ? (
          <BulletPointMenuButton {...bulletPointMenuButtonProps} />
        ) : null}
        {size(actionButtons) === 1 ? (
          <ButtonLink
            {...createButtonLinkProps(actionButtons[0], actionButtons[0].type || '', true)}
          />
        ) : (
          <>
            {map((action: ActionButtonProps) => (
              <ButtonLink
                {...createButtonLinkProps(action, action.type || '', false)}
                key={action.type}
              />
            ))(actionButtons)}
          </>
        )}
      </div>
    </div>
  );
};

HeaderWithActions.propTypes = headerWithActionsPropTypes;

export default HeaderWithActions;
