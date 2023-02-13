import React from 'react';
import classnames from 'classnames';
import {
  NovaCompositionCoorpacademyCheck as RightIcon,
  NovaSolidStatusClose as WrongIcon
} from '@coorpacademy/nova-icons';
import Provider, {GetTranslateFromContext} from '../provider';
import {WebContextValues} from '../provider/web-context';
import style from './style.css';
import propTypes, {HeaderStepItemProps} from './types';

const Content = (props: HeaderStepItemProps, legacyContext: WebContextValues) => {
  const {icon, current, value} = props;
  const translate = GetTranslateFromContext(legacyContext);
  let child;
  let ariaDescription;
  switch (icon) {
    case 'no-answer':
      child = value;
      ariaDescription = current
        ? translate('review_header_step_item.current_question', {
            headerStepValue: value
          })
        : translate('review_header_step_item.not_answered_question', {
            headerStepValue: value
          });
      break;

    case 'right':
      child = (
        <RightIcon className={classnames(style.rightIcon, current && style.currentRightIcon)} />
      );
      ariaDescription = translate('review_header_step_item.correct_question', {
        headerStepValue: value
      });
      break;

    case 'wrong':
      child = (
        <WrongIcon className={classnames(style.wrongIcon, current && style.currentWrongIcon)} />
      );
      ariaDescription = translate('review_header_step_item.incorrect_question', {
        headerStepValue: value
      });
      break;

    default:
      return null;
  }

  return (
    <span
      className={style.value}
      aria-label={translate('review_header_step_item.aria_label', {
        headerStepValue: value
      })}
      aria-describedby={ariaDescription}
    >
      {child}
    </span>
  );
};

const ReviewHeaderStepItem = (props: HeaderStepItemProps) => {
  const {icon, current} = props;
  return (
    <div
      className={classnames(
        style.default,
        icon === 'right' && style.right,
        icon === 'wrong' && style.wrong,
        current && style.current
      )}
      data-name="header-step-item"
    >
      <Content {...props} />
    </div>
  );
};

Content.propTypes = propTypes;

Content.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

ReviewHeaderStepItem.propTypes = propTypes;

export default ReviewHeaderStepItem;
