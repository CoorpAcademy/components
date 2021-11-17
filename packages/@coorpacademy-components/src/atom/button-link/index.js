import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {getOr} from 'lodash/fp';
import classnames from 'classnames';
import {
  NovaSolidRemoveAddAddCircle1 as AddIcon,
  NovaCompositionNavigationArrowLeft as ChevronLeftIcon,
  NovaCompositionNavigationArrowRight as ChevronRightIcon,
  NovaCompositionCoorpacademyEye as EyeIcon,
  NovaCompositionCoorpacademyAnalytics as AnalyticsIcon,
  NovaCompositionCoorpacademyNext as CloseIcon,
  NovaSolidComputersSdCard as SaveIcon,
  NovaSolidContentEditionPencilWrite as EditIcon,
  NovaCompositionCoorpacademyBulletPoint as BulletPointIcon
} from '@coorpacademy/nova-icons';
import Link from '../link';
import style from './style.css';

const ICONS = {
  add: AddIcon,
  analytics: AnalyticsIcon,
  'bullet-point': BulletPointIcon,
  'chevron-left': ChevronLeftIcon,
  'chevron-right': ChevronRightIcon,
  close: CloseIcon,
  edit: EditIcon,
  save: SaveIcon,
  see: EyeIcon
};

const getButtonContent = (icon, label) => {
  const {type, position, size = 12} = icon;
  const Icon = getOr(null, type, ICONS);

  if (!Icon) {
    return (
      <div className={style.buttonContent}>
        <span className={style.label}>{label}</span>
      </div>
    );
  }

  if (position === 'center' && Icon) {
    return (
      <div className={style.buttonContent}>
        <Icon height={size} width={size} />
      </div>
    );
  }

  return (
    <div className={style.buttonContent}>
      {position === 'left' ? <Icon height={size} width={size} /> : null}
      <span className={style.label}>{label}</span>
      {position === 'right' ? <Icon height={size} width={size} /> : null}
    </div>
  );
};

const ButtonLink = props => {
  const {
    type,
    label,
    disabled,
    icon = {},
    'data-name': dataName,
    'aria-label': ariaLabel,
    link,
    onClick
  } = props;
  const contentView = getButtonContent(icon, label);
  const styleButton = classnames(
    style.button,
    type === 'primary' && style.primary,
    type === 'secondary' && style.secondary,
    type === 'tertiary' && style.tertiary,
    type === 'text' && style.text,
    type === 'dangerous' && style.dangerous,
    link && style.link,
    disabled && style.disabled
  );

  if (link) {
    return (
      <Link
        {...link}
        className={styleButton}
        data-name={dataName}
        aria-label={ariaLabel || label}
        title={ariaLabel || label}
      >
        {contentView}
      </Link>
    );
  }

  const handleOnClick = useCallback(() => onClick(), [onClick]);
  return (
    <button
      type="button"
      aria-label={ariaLabel || label}
      title={ariaLabel || label}
      data-name={dataName}
      className={styleButton}
      onClick={handleOnClick}
    >
      {contentView}
    </button>
  );
};

ButtonLink.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'text', 'dangerous']),
  label: PropTypes.string,
  'aria-label': PropTypes.string,
  'data-name': PropTypes.string,
  icon: PropTypes.shape({
    position: PropTypes.oneOf(['right', 'left', 'center']),
    type: PropTypes.oneOf([
      'add',
      'analytics',
      'bullet-point',
      'chevron-left',
      'chevron-right',
      'close',
      'edit',
      'save',
      'see'
    ]),
    size: PropTypes.number
  }),
  onClick: PropTypes.func,
  link: PropTypes.shape({
    href: PropTypes.string,
    download: PropTypes.bool,
    target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top'])
  }),
  disabled: PropTypes.bool
};

export default ButtonLink;
