import React, {useCallback, useState, useMemo} from 'react';
import {convert} from 'css-color-function';
import {NovaSolidInterfaceFeedbackInterfaceQuestionMark as QuestionIcon} from '@coorpacademy/nova-icons';
import getOr from 'lodash/fp/getOr';
import ButtonLink from '../../atom/button-link';
import style from './style.css';
import propTypes from './prop-types';

const getGradientBackground = baseColor => {
  const gradients = [
    convert(`color(${baseColor} lightness(30%))`),
    convert(`color(${baseColor} lightness(47%))`),
    convert(`color(${baseColor} lightness(55%))`)
  ];

  return `radial-gradient(62.12% 56.45% at 0% 77.29%, ${gradients[0]} 0%, ${convert(
    `color(${gradients[0]} a(0))`
  )} 100%), radial-gradient(113.85% 103.46% at 93.27% 7.88%, ${gradients[1]} 0%, ${convert(
    `color(${gradients[1]} a(0))`
  )} 100%), radial-gradient(49.66% 49.63% at 78.65% 86.26%, ${gradients[2]} 0%, ${convert(
    `color(${gradients[2]} a(0))`
  )} 100%), ${baseColor}`;
};

const SkillCard = (props, context) => {
  const {
    'aria-label': ariaLabel,
    skillTitle,
    skillAriaLabel,
    buttonLabel,
    buttonAriaLabel,
    reviseLabel,
    reviseAriaLabel,
    onClick,
    isCustom = false
  } = props;
  const {skin} = context;
  const [hovered, setHovered] = useState(false);
  const primarySkinColor = getOr('#00B0FF', 'common.primary', skin);

  const handleMouseOver = useCallback(() => setHovered(true), [setHovered]);

  const handleMouseLeave = useCallback(() => setHovered(false), [setHovered]);

  const buttonProps = {
    customStyle: {
      backgroundColor: hovered ? primarySkinColor : convert(`color(${primarySkinColor} a(0.07))`),
      color: hovered ? '#FFFFFF' : primarySkinColor,
      transition: 'background-color 0.15s ease-in-out, color 0.15s ease-in-out'
    },
    onClick,
    'aria-label': buttonAriaLabel ? `${skillTitle}, ${buttonAriaLabel}` : skillTitle,
    label: buttonLabel,
    'data-name': 'skill-card-button'
  };

  const titleBackgroundColor = useMemo(
    () => (isCustom ? '#128C72' : primarySkinColor),
    [isCustom, primarySkinColor]
  );

  const titleBackground = useMemo(
    () => getGradientBackground(titleBackgroundColor),
    [titleBackgroundColor]
  );

  return (
    <div className={style.skillCardWrapper} data-name="skill-card-wrapper" aria-label={ariaLabel}>
      <div
        data-name="skill-title"
        className={style.skillTitle}
        aria-label={skillAriaLabel || skillTitle}
        style={{
          background: titleBackground
        }}
      >
        {skillTitle}
      </div>
      <div data-name="card-content-wrapper">
        <div
          className={style.questionReviseText}
          data-name="questions-to-revise-label"
          aria-label={reviseAriaLabel || reviseLabel}
        >
          <QuestionIcon className={style.questionReviseIcon} width={16} height={16} />
          {reviseLabel}
        </div>
        <div
          className={style.buttonWrapper}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          data-name="button-wrapper"
        >
          <ButtonLink {...buttonProps} />
        </div>
      </div>
    </div>
  );
};

SkillCard.propTypes = propTypes;

export default SkillCard;
