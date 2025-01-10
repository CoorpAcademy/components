import React, {useCallback, useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import {identity, getOr, noop} from 'lodash/fp';
import Provider, {GetSkinFromContext} from '../provider';
import pushToHistory from '../../util/navigation';

const Link = (props, legacyContext) => {
  const skin = GetSkinFromContext(legacyContext);
  const [hovered, setHovered] = useState(false);
  const {history: {createHref = identity} = {}} = legacyContext;

  const {
    hoverColor = getOr('#00B0FF', 'common.primary', skin),
    hoverBackgroundColor,
    'data-name': dataName = 'link',
    useButtonTag = false,
    href,
    onClick = noop,
    style: customStyle,
    children,
    onMouseEnter = noop,
    onMouseLeave = noop,
    download,
    disabled,
    ...restProps
  } = props;

  const navigate = useMemo(() => pushToHistory(legacyContext)({href}), [href, legacyContext]);

  const handleMouseEnter = useCallback(() => {
    setHovered(true);
    onMouseEnter();
  }, [onMouseEnter]);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    onMouseLeave();
  }, [onMouseLeave]);

  const handleOnClick = useCallback(
    e => {
      onClick(e);
      if (!download) navigate(e);
    },
    [download, navigate, onClick]
  );

  const style = {
    ...customStyle,
    ...(hovered && hoverBackgroundColor ? {backgroundColor: hoverBackgroundColor} : undefined),
    ...(hovered && hoverColor ? {color: hoverColor} : undefined),
    pointerEvents: disabled || !href ? 'none' : undefined
  };

  return useButtonTag ? (
    <button
      {...restProps}
      data-name={dataName}
      type="button"
      onClick={disabled ? noop : handleOnClick}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  ) : (
    <a
      {...restProps}
      data-name={dataName}
      href={disabled || !href ? undefined : createHref(href)}
      onClick={disabled ? noop : handleOnClick}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  'data-name': PropTypes.string,
  'aria-label': PropTypes.string,
  title: PropTypes.string,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string,
  download: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  useButtonTag: PropTypes.bool,
  style: PropTypes.shape({}),
  disabled: PropTypes.bool
};

Link.contextTypes = {
  skin: Provider.childContextTypes.skin,
  history: Provider.childContextTypes.history
};

export default Link;
