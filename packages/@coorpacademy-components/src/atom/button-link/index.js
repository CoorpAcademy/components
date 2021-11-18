import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {getOr} from 'lodash/fp';
import classnames from 'classnames';
import {
  NovaCompositionNavigationArrowLeft as ChevronLeftIcon,
  NovaCompositionNavigationArrowRight as ChevronRightIcon,
  NovaCompositionCoorpacademyEye as EyeIcon,
  NovaCompositionCoorpacademyAnalytics as AnalyticsIcon,
  NovaCompositionCoorpacademyNext as CloseIcon,
  NovaSolidComputersSdCard as SaveIcon,
  NovaSolidContentEditionPencilWrite as EditIcon,
  NovaSolidRemoveAddAddCircle1 as AddIcon,
  NovaSolidContentEditionBin as BinIcon
} from '@coorpacademy/nova-icons';
import Link from '../link';
import style from './style.css';

const ICONS = {
  add: AddIcon,
  analytics: AnalyticsIcon,
  bin: BinIcon,
  'chevron-left': ChevronLeftIcon,
  'chevron-right': ChevronRightIcon,
  close: CloseIcon,
  edit: EditIcon,
  save: SaveIcon,
  see: EyeIcon
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

  const handleOnClick = useMemo(() => () => onClick(), [onClick]);
  return (
    <button
      type="button"
      aria-label={ariaLabel || label}
      title={ariaLabel || label}
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
