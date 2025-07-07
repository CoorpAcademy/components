import React from 'react';
import isEmpty from 'lodash/fp/isEmpty';
import map from 'lodash/fp/map';
import ButtonLink from '../../atom/button-link';
import ButtonLinkIcon from '../../atom/button-link-icon';
import Tag from '../../atom/tag';
import BulletPointMenuButton from '../../molecule/bullet-point-menu-button';
import HeaderWithActionsPropTypes, {
  HeaderWithActionsProps,
  ButtonMenuProps,
  ButtonActionProps
} from './types';
import style from './style.css';

const getDataName = (suffix: string) => `header-with-actions-${suffix}`;
// @ts-expect-error (need to get the index)
const uncappedMap = map.convert({cap: false});

const buildCloseButton = ({onClick, ariaLabel}: {onClick: () => void; ariaLabel: string}) => {
  return {
    size: 'default',
    icon: 'close',
    'data-name': 'close-button',
    'aria-label': ariaLabel,
    onClick
  };
};

const buildButtonMenu = ({dataName, label, iconName, iconColor, onClick}: ButtonMenuProps) => {
  return {
    'data-name': dataName,
    label,
    buttonLinkType: 'tertiary',
    icon: {
      position: 'left' as const,
      faIcon: {
        name: iconName,
        color: iconColor,
        size: 14
      }
    },
    onClick,
    type: iconName === 'trash' ? 'dangerousLeft' : 'defaultLeft'
  };
};

const buildActionButton = ({
  type,
  label,
  onClick,
  disabled,
  iconName,
  iconColor
}: ButtonActionProps) => {
  const base = {
    type,
    label,
    onClick,
    disabled,
    customStyle: {
      fontWeight: '600',
      borderRadius: '12px'
    }
  };

  if (iconName && iconColor) {
    return {
      ...base,
      icon: {
        position: 'left' as const,
        faIcon: {
          name: iconName,
          color: iconColor,
          size: 14
        }
      }
    };
  }

  return base;
};

const HeaderWithActions = (props: HeaderWithActionsProps) => {
  const {closeButton, title, tag, saveStatus, bulletPointMenuButton, actionButtons, isFetching} =
    props;

  return !isFetching ? (
    <div className={style.headerWrapper} data-name={getDataName('wrapper')}>
      <div
        className={style.titleAndButtonWrapper}
        data-name={getDataName('title-and-button-wrapper')}
      >
        <ButtonLinkIcon
          {...buildCloseButton({
            onClick: closeButton.onClick,
            ariaLabel: closeButton['aria-label']
          })}
          className={style.button}
        />
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
          <BulletPointMenuButton
            {...bulletPointMenuButton}
            buttons={uncappedMap(buildButtonMenu, bulletPointMenuButton.buttons)}
            data-name={getDataName('bullet-point-menu-button')}
          />
        ) : null}
        {uncappedMap((action: ButtonActionProps, key: string) => {
          return <ButtonLink {...buildActionButton(action)} key={key} />;
        }, actionButtons)}
      </div>
    </div>
  ) : null;
};

HeaderWithActions.propTypes = HeaderWithActionsPropTypes;

export default HeaderWithActions;
