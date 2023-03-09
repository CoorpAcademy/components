import React, {useCallback, useMemo, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {v5 as uuidV5} from 'uuid';
import {get, has, isEmpty, noop} from 'lodash/fp';
import {
  NovaCompositionNavigationMore as MoreIcon,
  NovaCompositionCoorpacademyCheck as CheckIcon
} from '@coorpacademy/nova-icons';
import Provider, {GetSkinFromContext, GetTranslateFromContext} from '../../atom/provider';
import ToolTip, {toggleStateOnKeyPress} from '../../atom/tooltip';
import style from './favorite.css';

const Favorite = (
  {
    favorite,
    addFavoriteToolTip,
    removeFavoriteToolTip,
    className,
    'aria-label': ariaLabel = {},
    onFavoriteClick = noop,
    disabled
  },
  legacyContext
) => {
  const skin = GetSkinFromContext(legacyContext);
  const translate = GetTranslateFromContext(legacyContext);
  const handleFavoriteClick = useCallback(
    e => {
      e.stopPropagation();
      e.preventDefault();
      if (!disabled) onFavoriteClick(e);
    },
    [disabled, onFavoriteClick]
  );

  const primaryColor = get('common.primary', skin);
  const darkColor = get('common.dark', skin);
  const brandColor = get('common.brand', skin);

  const buttonRef = useRef();

  const allowToolTip = useMemo(
    () => !isEmpty(removeFavoriteToolTip) && !isEmpty(addFavoriteToolTip),
    [addFavoriteToolTip, removeFavoriteToolTip]
  );

  // to be replaced by useId when React17 is bumped to React18
  const [favoriteButtonAnchorId] = useState(
    allowToolTip ? uuidV5('engaged-battle-', uuidV5.URL) : undefined
  );

  const toolTipContent = useMemo(
    // eslint-disable-next-line no-nested-ternary
    () => (allowToolTip ? (favorite ? removeFavoriteToolTip : addFavoriteToolTip) : null),
    [addFavoriteToolTip, favorite, removeFavoriteToolTip, allowToolTip]
  );

  const [mouseLeaveTimer, setMouseLeaveTimer] = useState(undefined);

  const [toolTipIsVisible, setToolTipIsVisible] = useState(false);

  const handleMouseOver = useCallback(() => {
    mouseLeaveTimer && clearTimeout(mouseLeaveTimer);
    /* istanbul ignore next */ // has(['current', 'focus'], buttonRef) && buttonRef.current.focus();
    setToolTipIsVisible(true);
  }, [mouseLeaveTimer]);

  const handleMouseLeave = useCallback(() => {
    setMouseLeaveTimer(
      setTimeout(() => {
        setToolTipIsVisible(false);
        // @ts-expect-error (error: blur does not exists on type never)
        /* istanbul ignore next */ has(['current', 'blur'], buttonRef) && buttonRef.current.blur();
      }, 500)
    );
  }, []);

  const handleKeyPress = useCallback(
    event => {
      toggleStateOnKeyPress(toolTipIsVisible, setToolTipIsVisible, buttonRef)(event);
    },
    [toolTipIsVisible]
  );

  const iconWrapperClassName = useMemo(
    () => classnames(style.favorite, className, favorite && style.selected),
    [className, favorite]
  );
  const icon = useMemo(
    () =>
      favorite ? (
        <CheckIcon
          className={style.checkIcon}
          style={{color: brandColor}}
          width={13}
          height={13}
          aria-label={ariaLabel.removeFromFavorite}
        />
      ) : (
        <MoreIcon
          className={style.moreIcon}
          style={{color: darkColor}}
          width={13}
          height={13}
          aria-label={ariaLabel.addToFavorite}
        />
      ),
    [ariaLabel.addToFavorite, ariaLabel.removeFromFavorite, brandColor, darkColor, favorite]
  );

  return (
    <div className={style.favoriteWrapper}>
      {/* {toolTipView} */}
      <div
        ref={buttonRef}
        data-for={favoriteButtonAnchorId}
        data-tooltip-place="left"
        data-tip={allowToolTip}
        data-name="favorite"
        aria-label={ariaLabel.favorite}
        className={iconWrapperClassName}
        onClick={handleFavoriteClick}
        style={{
          color: primaryColor
        }}
        onKeyDown={handleKeyPress}
        onMouseLeave={handleMouseLeave}
        onMouseOver={handleMouseOver}
        tabIndex={0}
      >
        {icon}
      </div>
      <ToolTip
        fontSize={12}
        anchorId={favoriteButtonAnchorId}
        toolTipIsVisible={toolTipIsVisible}
        TooltipContent={toolTipContent}
        closeToolTipInformationTextAriaLabel={translate(
          'Press the escape key to close the information text'
        )}
        stickyOnKeyboardNavigation
      />
    </div>
  );
};

Favorite.propTypes = {
  className: PropTypes.string,
  favorite: PropTypes.bool,
  disabled: PropTypes.bool,
  addFavoriteToolTip: PropTypes.string,
  removeFavoriteToolTip: PropTypes.string,
  onFavoriteClick: PropTypes.func,
  'aria-label': PropTypes.shape({
    favorite: PropTypes.string,
    addToFavorite: PropTypes.string,
    removeFromFavorite: PropTypes.string
  })
};

Favorite.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

export default Favorite;
