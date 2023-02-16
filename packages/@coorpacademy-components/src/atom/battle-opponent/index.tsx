import React, {useMemo} from 'react';
import classnames from 'classnames';
import {NovaCompositionNavigationArrowRight as ArrowRight} from '@coorpacademy/nova-icons';
import ToolTip from '../tooltip';
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
    tooltipText
  }: BattleOpponentProps,
  legacyContext: WebContextValues
) => {
  const translate: Required<WebContextValues>['translate'] = GetTranslateFromContext(legacyContext);
  const wrapperClassnames = useMemo(
    () => classnames(style.card, style['opponent-card'], isRandom ? style.random : null),
    [isRandom]
  );

  const displayNameClassnames = useMemo(
    () => classnames(style.name, isAlreadyEngaged ? style.alreadyEngaged : null),
    [isAlreadyEngaged]
  );

  return (
    <li
      {...(!isAlreadyEngaged && {onClick})}
      className={wrapperClassnames}
      data-testid="battle-opponent-wrapper"
    >
      <div className={style.avatar}>
        {isRandom ? null : <img src={userAvatarSrc} aria-hidden="true" />}
      </div>
      <p className={displayNameClassnames}> {displayName}</p>
      {isAlreadyEngaged ? (
        <ToolTip
          fontSize={12}
          iconSize="big"
          TooltipContent={tooltipText}
          closeToolTipInformationTextAriaLabel={translate(
            'Press the escape key to close the information text'
          )}
          iconContainerClassName={style.infoIconTooltip}
        />
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
