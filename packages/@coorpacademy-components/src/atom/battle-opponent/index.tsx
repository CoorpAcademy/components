import React, {useCallback, useMemo, useState, useRef} from 'react';
import classnames from 'classnames';
import {v5 as uuidV5} from 'uuid';
import has from 'lodash/fp/has';
import {
  NovaCompositionNavigationArrowRight as ArrowRight,
  NovaCompositionCoorpacademyInformationIcon as InformationIcon
} from '@coorpacademy/nova-icons';
import ToolTip, {toggleStateOnKeyPress} from '../tooltip';
import Provider, {GetTranslateFromContext} from '../provider';
import {WebContextValues} from '../provider/web-context';
import propTypes, {BattleOpponentProps} from './prop-types';
import style from './style.css';

const BattleOpponent = (
  {
    isAlreadyEngaged,
    isRandom,
    userAvatarSrc,
    onClick,
    displayName,
    tooltipText,
    'aria-label': ariaLabel
  }: BattleOpponentProps,
  legacyContext: WebContextValues
) => {
  const translate: Required<WebContextValues>['translate'] = GetTranslateFromContext(legacyContext);
  const wrapperClassnames = useMemo(
    () => classnames(style.card, style.opponentCard, isRandom ? style.random : null),
    [isRandom]
  );

  const displayNameClassnames = useMemo(
    () => classnames(style.name, isAlreadyEngaged ? style.alreadyEngaged : null),
    [isAlreadyEngaged]
  );

  const [mouseLeaveTimer, setMouseLeaveTimer] = useState<number | undefined>(undefined);
  const [toolTipIsVisible, setToolTipIsVisible] = useState(false);

  // to be replaced by useId when React17 is bumped to React18
  const [battleOpponentInfoId] = useState(
    isAlreadyEngaged ? uuidV5('engaged-battle-', uuidV5.URL) : undefined
  );

  const buttonRef = useRef(null);

  const handleMouseOver = useCallback(() => {
    mouseLeaveTimer && clearTimeout(mouseLeaveTimer);
    // @ts-expect-error (error: focus does not exists on type never)
    /* istanbul ignore next */ has(['current', 'focus'], buttonRef) && buttonRef.current.focus();
    setToolTipIsVisible(true);
  }, [mouseLeaveTimer]);

  const handleMouseLeave = useCallback(() => {
    setMouseLeaveTimer(
      setTimeout(() => {
        setToolTipIsVisible(false);
        // @ts-expect-error (error: blur does not exists on type never)
        /* istanbul ignore next */ has(['current', 'blur'], buttonRef) && buttonRef.current.blur();
      }, 500) as unknown as number
    );
  }, []);

  const handleKeyPress = useCallback(
    event => {
      toggleStateOnKeyPress(toolTipIsVisible, setToolTipIsVisible, buttonRef)(event);
    },
    [toolTipIsVisible]
  );

  const TooltipContent = useCallback(
    _props => (
      <p
        {..._props}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        data-testid="battle-opponent-tooltip-content"
      >
        {tooltipText}
      </p>
    ),
    [handleMouseLeave, handleMouseOver, tooltipText]
  );

  return (
    <li
      {...(!isAlreadyEngaged && {onClick})}
      className={wrapperClassnames}
      data-testid="battle-opponent-wrapper"
      tabIndex={0}
    >
      <div className={style.avatar}>{isRandom ? null : <img src={userAvatarSrc} alt="" />}</div>
      <p className={displayNameClassnames} tabIndex={0}>
        {displayName}
      </p>
      {isAlreadyEngaged ? (
        <>
          <button
            ref={buttonRef}
            tabIndex={0}
            type="button"
            className={style.tooltipIconContainer}
            data-testid="battle-engaged-opponent-information-button"
            onKeyDown={handleKeyPress}
            onMouseLeave={handleMouseLeave}
            onMouseOver={handleMouseOver}
            data-for={battleOpponentInfoId}
            data-tooltip-place="left"
            data-tip={isAlreadyEngaged}
            aria-label={ariaLabel}
          >
            <InformationIcon className={style.informationIcon} width={20} height={20} />
          </button>
          <span className={style.toolTipWrapper}>
            <ToolTip
              fontSize={12}
              anchorId={battleOpponentInfoId}
              toolTipIsVisible={toolTipIsVisible}
              TooltipContent={TooltipContent}
              closeToolTipInformationTextAriaLabel={translate('close_tooltip_information')}
            />
          </span>
        </>
      ) : (
        <ArrowRight className={style.rightArrow} width={16} height={16} />
      )}
    </li>
  );
};

BattleOpponent.propTypes = propTypes;

BattleOpponent.contextTypes = {
  translate: Provider.childContextTypes.translate
};

export default BattleOpponent;
