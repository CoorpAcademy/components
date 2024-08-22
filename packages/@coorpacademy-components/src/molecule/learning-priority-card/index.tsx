import React, {useState, useCallback} from 'react';
import {get} from 'lodash/fp';
import {convert} from 'css-color-function';
import Provider, {GetTranslateFromContext, GetSkinFromContext} from '../../atom/provider';
import {WebContextValues} from '../../atom/provider/web-context';
import Tag from '../../atom/tag';
import ButtonLink from '../../atom/button-link';
import CircularProgressBar from '../../atom/circular-progress-bar';
import {LearningPriorityCardPropTypes, propTypes} from './types';
import style from './style.css';

const LearningPriorityCard = (props: LearningPriorityCardPropTypes, context: WebContextValues) => {
  const {tagLabel, title, progression, onClick} = props;
  const translate = GetTranslateFromContext(context);
  const skin = GetSkinFromContext(context);
  const exploreLocale = translate('Explore');
  const primarySkinColor = get('common.primary', skin);

  const [hovered, setHovered] = useState(false);
  const handleMouseOver = useCallback(() => setHovered(true), [setHovered]);
  const handleMouseLeave = useCallback(() => setHovered(false), [setHovered]);

  const buttonExploreProps = {
    customStyle: {
      backgroundColor: hovered ? primarySkinColor : convert(`color(${primarySkinColor} a(0.07))`),
      color: hovered ? '#FFFFFF' : primarySkinColor,
      transition: 'background-color 0.15s ease-in-out, color 0.15s ease-in-out'
    },
    onClick,
    'aria-label': `${title}, ${exploreLocale}`,
    label: exploreLocale,
    'data-name': 'learning-priority-explore-button',
    icon: {
      position: 'left' as const,
      faIcon: {
        name: 'compass',
        backgroundColor: hovered ? primarySkinColor : convert(`color(${primarySkinColor} a(0.07))`),
        color: hovered ? '#FFFFFF' : primarySkinColor,
        size: 16
      }
    }
  };

  return (
    <div
      className={style.container}
      aria-label={`learning priority card ${title}`}
      data-name={`learning-priority-card-${title}`}
    >
      <div>
        <Tag label={tagLabel} size={'S'} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.circularProgressBarContainer}>
        <CircularProgressBar
          {...{
            size: 162,
            strokeWidth: 12,
            progression,
            label: translate('completed'),
            'aria-label': `${title} ${progression}%`,
            'data-name': `circular-progress-bar-${title}`
          }}
        />
      </div>
      <div
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        data-name="button-explore-wrapper"
      >
        <ButtonLink {...buttonExploreProps} />
      </div>
    </div>
  );
};

LearningPriorityCard.propTypes = propTypes;

LearningPriorityCard.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

export default LearningPriorityCard;
