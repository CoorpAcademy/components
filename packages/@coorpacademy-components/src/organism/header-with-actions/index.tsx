import React from 'react';
import isEmpty from 'lodash/fp/isEmpty';
import map from 'lodash/fp/map';
import ButtonLink from '../../atom/button-link';
import ButtonLinkIcon from '../../atom/button-link-icon';
import Tag from '../../atom/tag';
import AssignmentStatusTag from '../../molecule/assignment-status-tag';
import Breadcrumbs from '../../molecule/breadcrumbs';
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
  const {
    closeButton,
    title,
    tag,
    tags,
    subtitle,
    breadcrumbs,
    saveStatus,
    bulletPointMenuButton,
    actionButtons,
    isFetching = false
  } = props;
  const hasSubtitle = Boolean(subtitle?.trim());
  const hasBreadcrumbs = !isEmpty(breadcrumbs);
  const hasAdditionalContent = tags !== undefined || hasSubtitle || hasBreadcrumbs;

  return !isFetching ? (
    <div className={style.headerWrapper} data-name={getDataName('wrapper')}>
      <div
        className={
          hasAdditionalContent ? style.extendedTitleAndButtonWrapper : style.titleAndButtonWrapper
        }
        data-name={getDataName('title-and-button-wrapper')}
      >
        <ButtonLinkIcon
          {...buildCloseButton({
            onClick: closeButton.onClick,
            ariaLabel: closeButton['aria-label']
          })}
          className={style.button}
        />
        <div className={hasAdditionalContent ? style.extendedTitleWrapper : style.titleWrapper}>
          {hasBreadcrumbs ? (
            <div data-name={getDataName('breadcrumbs')}>
              <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>
          ) : null}
          <div className={style.statusWrapper}>
            {tags === undefined && tag ? <Tag {...tag} /> : null}
            {saveStatus?.display && saveStatus.label ? (
              <p className={style.saveStatus}>{saveStatus.label}</p>
            ) : null}
          </div>
          {tags !== undefined ? (
            <div className={style.assignmentTitleRow}>
              <h3 className={style.assignmentTitle} data-name={getDataName('title')}>
                {title}
              </h3>
              <div className={style.assignmentTags} data-name={getDataName('tags')}>
                {tags.map((assignmentTag, index) => (
                  <AssignmentStatusTag
                    {...assignmentTag}
                    key={`${assignmentTag.status}-${assignmentTag.label}-${index}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <h3 className={style.title} data-name={getDataName('title')}>
              {title}
            </h3>
          )}
          {hasSubtitle ? (
            <p className={style.subtitle} data-name={getDataName('subtitle')}>
              {subtitle}
            </p>
          ) : null}
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
