import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {getOr} from 'lodash/fp';
import classnames from 'classnames';
import {ICONS} from '../../util/button-icons';
import Link from '../link';
import style from './style.css';

const getButtonContent = icon => {
  const Icon = getOr(null, icon, ICONS);

  if (!Icon) {
    return <div className={style.buttonContent} />;
  }

  return (
    <div className={style.buttonContent}>
      <Icon className={style.icon} />
    </div>
  );
};

const ButtonLink = props => {
  const {
    size = 'default',
    disabled,
    icon = {},
    'data-name': dataName,
    'aria-label': ariaLabel,
    link,
    onClick
  } = props;
  const contentView = getButtonContent(icon);
  const styleButton = classnames(
    style.button,
    size === 'default' ? style.default : style.small,
    link && style.link,
    disabled && style.disabled
  );

  if (link) {
    return (
      <Link
        {...link}
        className={styleButton}
        data-name={dataName}
        aria-label={ariaLabel}
        title={ariaLabel}
      >
        {contentView}
      </Link>
    );
  }

  const handleOnClick = useMemo(() => () => onClick(), [onClick]);
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      title={ariaLabel}
      className={styleButton}
      onClick={handleOnClick}
    >
      {contentView}
    </button>
  );
};

ButtonLink.propTypes = {
  size: PropTypes.oneOf(['default', 'small']),
  'aria-label': PropTypes.string,
  'data-name': PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  link: PropTypes.shape({
    href: PropTypes.string,
    download: PropTypes.bool,
    target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top'])
  }),
  disabled: PropTypes.bool
};

export default ButtonLink;
