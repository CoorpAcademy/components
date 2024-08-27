import React from 'react';
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

  const buttonExploreProps = {
    customStyle: {
      backgroundColor: convert(`color(${primarySkinColor} a(0.07))`),
      color: primarySkinColor,
      transition: 'background-color 0.15s ease-in-out, color 0.15s ease-in-out'
    },
    hoverBackgroundColor: primarySkinColor,
    hoverColor: '#FFFFFF',
    onClick,
    'aria-label': `${title}, ${exploreLocale}`,
    label: exploreLocale,
    'data-name': 'learning-priority-explore-button',
    icon: {
      position: 'left' as const,
      faIcon: {
        name: 'compass',
        backgroundColor: convert(`color(${primarySkinColor} a(0.07))`),
        color: primarySkinColor,
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
      <div data-name="button-explore-wrapper">
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
