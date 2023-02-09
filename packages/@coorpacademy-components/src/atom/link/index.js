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
    skinHover,
    hoverColor = getOr('#00B0FF', 'common.primary', skin),
    'data-name': dataName = 'link',
    'aria-label': ariaLabel,
    ...linKElementProps
  } = props;
  const {
    href,
    onClick = noop,
    className,
    style: propsStyle,
    children,
    onMouseLeave = noop,
    onMouseEnter = noop,
    download
  } = props;

  const handleMouseEnter = useCallback(() => {
    setHovered(true);

    onMouseEnter();
  }, [onMouseEnter]);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);

    onMouseLeave();
  }, [onMouseLeave]);

  const navigate = useMemo(() => pushToHistory(legacyContext)({href}), [href, legacyContext]);

  const handleOnClick = useCallback(
    e => {
      onClick(e);

      if (!download) {
        navigate(e);
      }
    },
    [download, navigate, onClick]
  );

  const _style =
    href || onClick
      ? null
      : {
          pointerEvents: 'none'
        };
  const _hoverStyle =
    skinHover && hovered
      ? {
          color: hoverColor
        }
      : null;

  return (
    <a
      {...linKElementProps}
      data-name={dataName}
      aria-label={ariaLabel}
      href={href ? createHref(href) : undefined}
      onClick={handleOnClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        ...propsStyle,
        ..._style,
        ..._hoverStyle
      }}
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
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  skinHover: PropTypes.bool,
  hoverColor: PropTypes.string,
  download: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  style: PropTypes.shape({})
};

Link.contextTypes = {
  skin: Provider.childContextTypes.skin,
  history: Provider.childContextTypes.history
};

export default Link;
