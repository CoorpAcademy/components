import React, {useCallback, useState, useMemo} from 'react';
import {noop} from 'lodash/fp';
import classnames from 'classnames';
import Link from '../link';
import FaIcon, {DEFAULT_ICON_COLOR, IconProps} from '../icon';
import {ICONS} from '../../util/button-icons';
import ToolTip from '../tooltip';
import Tag from '../tag';
import propTypes, {ButtonLinkProps, IconType} from './types';
import style from './style.css';

const getButtonContent = (
  icon?: IconType,
  content?: string | React.ReactNode,
  hovered?: boolean,
  hoverBackgroundColor?: string,
  hoverColor?: string,
  customLabelClassName?: string,
  tag?: React.ComponentProps<typeof Tag>
) => {
  const {type, faIcon, position} = icon || {type: '', position: ''};
  const Icon = type && ICONS[type];

  if (!Icon && !faIcon) {
    return (
      <div className={(style.buttonContent, customLabelClassName)}>
        {typeof content === 'string' ? (
          <span
            className={(style.label, customLabelClassName)}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: content}}
          />
        ) : (
          <span className={(style.label, customLabelClassName)}>{content}</span>
        )}
      </div>
    );
  }

  const iconComponent = faIcon ? (
    <FaIcon
      {...({
        iconName: faIcon.name,
        iconColor: hovered && hoverColor ? hoverColor : faIcon.color ?? DEFAULT_ICON_COLOR,
        // eslint-disable-next-line no-nested-ternary
        backgroundColor: !faIcon?.backgroundColor
          ? null
          : hovered && hoverBackgroundColor
          ? hoverBackgroundColor
          : faIcon.backgroundColor,
        size: {
          faSize: faIcon.size,
          wrapperSize: faIcon.size
        },
        customStyle: faIcon.customStyle
      } as IconProps)}
    />
  ) : (
    <Icon className={style.icon} theme="coorpmanager" />
  );
  return (
    <div className={style.buttonContent}>
      {position === 'left' ? iconComponent : null}
      {content ? <span className={style.label}>{content}</span> : null}
      {tag ? <Tag {...tag} /> : null}
      {position === 'right' ? iconComponent : null}
    </div>
  );
};

const ButtonLink = (props: ButtonLinkProps) => {
  const {
    type,
    usage = 'button',
    label,
    content,
    hoverBackgroundColor,
    hoverColor,
    disabled = false,
    icon,
    'data-name': dataName,
    'data-testid': dataTestId = 'button-link',
    'aria-label': ariaLabel,
    tooltipText,
    tooltipPlacement = 'left',
    link,
    onClick = noop,
    onKeyDown = noop,
    className,
    customStyle,
    useTitle = true,
    customLabelClassName,
    tag
  } = props;
  const styleButton = classnames(
    link && style.link,
    className,
    style.button,
    !label && style.iconButton,
    type === 'primary' && style.primary,
    type === 'secondary' && style.secondary,
    type === 'tertiary' && style.tertiary,
    type === 'text' && style.text,
    type === 'dangerous' && style.dangerous,
    disabled && style.disabled
  );

  const [hovered, setHovered] = useState(false);

  const handleOnClick = useCallback(event => onClick(event), [onClick]);

  const handleOnKeyDown = useCallback(event => onKeyDown(event), [onKeyDown]);

  const handleMouseOver = useCallback(() => {
    setHovered(true);
  }, [setHovered]);

  const handleMouseLeave = useCallback(() => setHovered(false), [setHovered]);

  const TooltipContent = useCallback(
    () => <span className={style.tooltipContentWrapper}>{tooltipText || ariaLabel}</span>,
    [tooltipText, ariaLabel]
  );

  const renderToolTip = () => {
    const closeToolTipInformationTextAriaLabel = tooltipText || ariaLabel;
    if (!closeToolTipInformationTextAriaLabel) return null;
    return (
      <ToolTip
        fontSize={12}
        anchorId="button-icon"
        toolTipIsVisible={hovered}
        placement={tooltipPlacement}
        TooltipContent={TooltipContent}
        closeToolTipInformationTextAriaLabel={closeToolTipInformationTextAriaLabel}
      />
    );
  };
  const _customStyle = useMemo(() => {
    return {
      ...customStyle,
      ...((hoverBackgroundColor || hoverColor) && hovered
        ? {
            backgroundColor: hoverBackgroundColor,
            color: hoverColor
          }
        : null)
    };
  }, [hoverBackgroundColor, hoverColor, hovered, customStyle]);

  if (link) {
    return (
      <Link
        {...link}
        {...(useTitle && {
          title: ariaLabel || label
        })}
        className={styleButton}
        style={customStyle}
        data-name={dataName}
        data-testid={dataTestId}
        onClick={handleOnClick}
        aria-label={ariaLabel || label}
        hoverColor={hoverColor}
        hoverBackgroundColor={hoverBackgroundColor}
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        {getButtonContent(
          icon,
          content ?? label,
          hovered,
          hoverBackgroundColor,
          hoverColor,
          customLabelClassName,
          tag
        )}
        {renderToolTip()}
      </Link>
    );
  }

  return (
    <button
      {...(useTitle && {
        title: ariaLabel || label
      })}
      {...(ariaLabel && !label
        ? {
            'data-for': 'button-icon',
            'data-tip': hovered
          }
        : {})}
      // eslint-disable-next-line react/button-has-type
      type={usage}
      aria-label={ariaLabel || label}
      data-name={dataName}
      data-testid={dataTestId}
      style={_customStyle}
      className={styleButton}
      onClick={handleOnClick}
      onKeyDown={handleOnKeyDown}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
      disabled={disabled}
    >
      {getButtonContent(
        icon,
        content ?? label,
        hovered,
        hoverBackgroundColor,
        hoverColor,
        customLabelClassName,
        tag
      )}
      {renderToolTip()}
    </button>
  );
};

ButtonLink.propTypes = propTypes;

export default ButtonLink;
