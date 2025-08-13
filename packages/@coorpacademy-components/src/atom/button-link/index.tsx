import React, {useCallback, useState, useMemo} from 'react';
import {isEmpty, noop} from 'lodash/fp';
import classnames from 'classnames';
import Link from '../link';
import FaIcon, {DEFAULT_ICON_COLOR, IconProps} from '../icon';
import {ICONS} from '../../util/button-icons';
import ToolTip from '../tooltip';
import Tag from '../tag';
import propTypes, {ButtonLinkProps, IconType} from './types';
import style from './style.css';

const renderNoIcons = (
  content: string | React.ReactNode | undefined,
  customClass: string | undefined
) => (
  <div className={classnames(style.buttonContent, customClass)}>
    {typeof content === 'string' ? (
      <span
        className={classnames(style.label, customClass)}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: content}}
      />
    ) : (
      <span className={classnames(style.label, customClass)}>{content}</span>
    )}
  </div>
);

const buildFaIcon = (
  faIcon: IconType['faIcon'],
  hoverOptions: {hovered?: boolean; hoverBackgroundColor?: string; hoverColor?: string}
) => {
  if (isEmpty(faIcon)) return null;

  const {name, size, backgroundColor, customStyle, color} = faIcon;
  const {hovered, hoverBackgroundColor, hoverColor} = hoverOptions;

  return (
    <FaIcon
      {...({
        iconName: name,
        iconColor: hovered && hoverColor ? hoverColor : color ?? DEFAULT_ICON_COLOR,
        // eslint-disable-next-line no-nested-ternary
        backgroundColor: !backgroundColor
          ? null
          : hovered && hoverBackgroundColor
          ? hoverBackgroundColor
          : backgroundColor,
        size: {
          faSize: size,
          wrapperSize: size
        },
        customStyle
      } as IconProps)}
    />
  );
};

const renderIcon = (
  icon: IconType | undefined,
  options: {hovered?: boolean; hoverBackgroundColor?: string; hoverColor?: string}
) => {
  if (isEmpty(icon)) return null;

  const {type, faIcon} = icon;
  const Icon = type && ICONS[type];

  if (faIcon) return buildFaIcon(faIcon, options);
  if (Icon) return <Icon className={style.icon} theme="coorpmanager" />;

  return null;
};

const getButtonContent = (
  icon?: IconType | IconType[],
  content?: string | React.ReactNode,
  hovered?: boolean,
  hoverBackgroundColor?: string,
  hoverColor?: string,
  customLabelClassName?: string,
  tag?: React.ComponentProps<typeof Tag>,
  contentCustomStyle?: React.CSSProperties
) => {
  // eslint-disable-next-line no-nested-ternary
  const iconArr = !isEmpty(icon) ? (Array.isArray(icon) ? icon : [icon]) : [];

  const leftIcon = iconArr.find(({position}) => position === 'left');
  const rightIcon = iconArr.find(({position}) => position === 'right');

  // no fa icons
  // nor ICONS
  if (
    !leftIcon?.faIcon &&
    !(leftIcon?.type && ICONS[leftIcon.type]) &&
    !rightIcon?.faIcon &&
    !(rightIcon?.type && ICONS[rightIcon.type])
  )
    return renderNoIcons(content, customLabelClassName);

  return (
    <div className={style.buttonContent} style={contentCustomStyle}>
      {renderIcon(leftIcon, {hovered, hoverBackgroundColor, hoverColor})}
      {content ? (
        <span className={classnames(style.label, customLabelClassName)}>{content}</span>
      ) : null}
      {tag ? <Tag {...tag} /> : null}
      {renderIcon(rightIcon, {hovered, hoverBackgroundColor, hoverColor})}
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
    contentCustomStyle,
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
          tag,
          contentCustomStyle
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
        tag,
        contentCustomStyle
      )}
      {renderToolTip()}
    </button>
  );
};

ButtonLink.propTypes = propTypes;

export default ButtonLink;
