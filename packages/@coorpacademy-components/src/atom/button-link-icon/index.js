import React, {useState, useCallback, useRef} from 'react';
import PropTypes from 'prop-types';
import {getOr, keys} from 'lodash/fp';
import classnames from 'classnames';
import {ICONS} from '../../util/button-icons';
import FaIcon from '../icon';
import Link from '../link';
import ToolTip from '../tooltip';
// eslint-disable-next-line css-modules/no-unused-class
import style from './style.css';

const getButtonContent = (icon, faIcon) => {
  const Icon = getOr(null, icon, ICONS);

  if (!Icon && !faIcon) {
    return <div className={style.buttonContent} />;
  }

  return (
    <div className={style.buttonContent}>
      {faIcon ? <FaIcon iconName={faIcon} /> : <Icon className={style.icon} />}
    </div>
  );
};

const getSizeStyle = size => {
  switch (size) {
    case 'small':
      return style.small;
    case 'responsive':
      return style.responsive;
    default:
      return style.default;
  }
};

const ButtonLinkIcon = props => {
  const {
    size = 'default',
    disabled,
    icon,
    faIcon,
    'data-name': dataName,
    'aria-label': ariaLabel,
    link,
    onClick,
    className,
    tooltipPlacement = 'left'
  } = props;
  const [toolTipIsVisible, setToolTipIsVisible] = useState(false);
  const timer = useRef();

  const contentView = getButtonContent(icon, faIcon);
  const styleButton = classnames(
    getSizeStyle(size),
    link && style.link,
    disabled && style.disabled,
    className
  );

  const handleOnClick = useCallback(() => onClick(), [onClick]);

  const handleMouseOver = useCallback(() => {
    timer.current && clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setToolTipIsVisible(true);
      timer.current = undefined;
    }, 300);
  }, [timer, setToolTipIsVisible]);

  const handleMouseLeave = useCallback(() => {
    timer.current && clearTimeout(timer.current);
    setToolTipIsVisible(false);
  }, [timer, setToolTipIsVisible]);

  const TooltipContent = useCallback(
    () => <span className={style.tooltipContentWrapper}>{ariaLabel}</span>,
    [ariaLabel]
  );

  const Button = useCallback(
    () =>
      link ? (
        <Link
          {...link}
          {...(ariaLabel
            ? {
                'data-for': 'button-icon',
                'data-tip': toolTipIsVisible
              }
            : {})}
          className={styleButton}
          data-name={dataName}
          aria-label={ariaLabel}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          {contentView}
        </Link>
      ) : (
        <button
          {...(ariaLabel
            ? {
                'data-for': 'button-icon',
                'data-tip': toolTipIsVisible
              }
            : {})}
          type="button"
          aria-label={ariaLabel}
          data-name={dataName}
          data-testid={`button-${dataName}-${className}`}
          className={styleButton}
          onClick={handleOnClick}
          onMouseLeave={handleMouseLeave}
          onMouseOver={handleMouseOver}
          disabled={disabled}
        >
          {contentView}
        </button>
      ),
    [
      link,
      ariaLabel,
      className,
      contentView,
      dataName,
      disabled,
      handleMouseLeave,
      handleMouseOver,
      handleOnClick,
      styleButton,
      toolTipIsVisible
    ]
  );

  return (
    <>
      <Button />
      {ariaLabel ? (
        <ToolTip
          fontSize={12}
          anchorId="button-icon"
          toolTipIsVisible={toolTipIsVisible}
          placement={tooltipPlacement}
          TooltipContent={TooltipContent}
          closeToolTipInformationTextAriaLabel={ariaLabel}
        />
      ) : null}
    </>
  );
};

ButtonLinkIcon.propTypes = {
  size: PropTypes.oneOf(['default', 'small', 'responsive']),
  'aria-label': PropTypes.string,
  'data-name': PropTypes.string,
  icon: PropTypes.oneOf(keys(ICONS)),
  faIcon: PropTypes.string,
  onClick: PropTypes.func,
  link: PropTypes.shape({
    href: PropTypes.string,
    download: PropTypes.bool,
    target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top'])
  }),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  tooltipPlacement: PropTypes.oneOf(['left', 'right', 'top', 'bottom'])
};

export default ButtonLinkIcon;
