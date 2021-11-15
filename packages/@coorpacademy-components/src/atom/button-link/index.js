import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {getOr} from 'lodash/fp';
import classnames from 'classnames';
import {
  NovaCompositionNavigationArrowLeft as ChevronLeftIcon,
  NovaCompositionNavigationArrowRight as ChevronRightIcon,
  NovaCompositionCoorpacademyEye as EyeIcon,
  NovaCompositionCoorpacademyAnalytics as AnalyticsIcon,
  NovaCompositionCoorpacademyNext as CloseIcon
} from '@coorpacademy/nova-icons';
import Link from '../link';
import style from './style.css';

const ICONS = {
  'chevron-left': ChevronLeftIcon,
  'chevron-right': ChevronRightIcon,
  see: EyeIcon,
  analytics: AnalyticsIcon,
  close: CloseIcon
};

const getButtonContent = (icon, label) => {
  const {type, position} = icon;
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
        <Icon className={style.icon} />
      </div>
    );
  }

  return (
    <div className={style.buttonContent}>
      {position === 'left' ? <Icon className={style.icon} /> : null}
      <span className={style.label}>{label}</span>
      {position === 'right' ? <Icon className={style.icon} /> : null}
    </div>
  );
};

const ButtonLink = (props, context) => {
  const {
    type,
    label,
    disabled,
    icon = {},
    'data-name': dataName,
    'aria-title': ariaTitle,
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
    disabled && style.disabled
  );

  if (link) {
    return (
      <Link {...link} className={styleButton} data-name={dataName} title={ariaTitle || label}>
        {contentView}
      </Link>
    );
  }

  const handleOnClick = useMemo(() => () => onClick(), [onClick]);
  return (
    <button
      type="button"
      title={ariaTitle || label}
      className={styleButton}
      onClick={handleOnClick}
    >
      {contentView}
    </button>
  );
};

ButtonLink.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'text']),
  label: PropTypes.string,
  'aria-title': PropTypes.string,
  'data-name': PropTypes.string,
  icon: PropTypes.shape({
    position: PropTypes.oneOf(['right', 'left', 'center']),
    type: PropTypes.string
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
