import React from 'react';
import classnames from 'classnames';
import {
  NovaCompositionCoorpacademyCheck as RightIcon,
  NovaSolidStatusClose as WrongIcon
} from '@coorpacademy/nova-icons';
import Provider, {GetTranslateFromContext} from '../provider';
import {WebContextValues} from '../provider/web-context';
import style from './style.css';
import propTypes, {StatusItemProps} from './types';

const Content = (props: StatusItemProps, legacyContext: WebContextValues) => {
  const {icon, current, value} = props;
  const translate = GetTranslateFromContext(legacyContext);
  let child;
  let contentAriaLabel;
  switch (icon) {
    case 'no-answer':
      child = value;
      contentAriaLabel = translate('review_header_step_item.not_answered_question', {
        current: current ? 'current ' : '',
        headerStepValue: value
      });
      break;

    case 'right':
      child = (
        <RightIcon
          className={classnames(style.rightIcon, current && style.currentRightIcon)}
          role="status"
          aria-label={translate('review_header_step_item.correct_question', {
            current: current ? 'current ' : '',
            headerStepValue: value
          })}
        />
      );
      break;

    case 'wrong':
      child = (
        <WrongIcon
          className={classnames(style.wrongIcon, current && style.currentWrongIcon)}
          role="alert"
          aria-label={translate('review_header_step_item.incorrect_question', {
            current: current ? 'current ' : '',
            headerStepValue: value
          })}
        />
      );
      break;

    case 'errors-number':
      child = value;
      contentAriaLabel = translate('bulk_import.errors_number', {
        bulkImportErrorsNumber: value
      });
      break;

    case 'valid':
      child = (
        <RightIcon
          className={classnames(style.validIcon)}
          role="status"
          aria-label={translate('bulk_import.valid_scorm')}
        />
      );
      break;

    case 'invalid':
      child = (
        <WrongIcon
          className={classnames(style.invalidIcon)}
          role="alert"
          aria-label={translate('bulk_import.invalid_scorm')}
        />
      );
      break;

    default:
      return null;
  }

  return (
    <span
      {...(icon === 'no-answer' || icon === 'errors-number'
        ? {'aria-label': contentAriaLabel, role: 'status'}
        : {})}
      className={style.value}
    >
      {child}
    </span>
  );
};

const StatusItem = (props: StatusItemProps) => {
  const {icon, current} = props;
  return (
    <div
      className={classnames(
        style.default,
        icon === 'right' && style.right,
        icon === 'wrong' && style.wrong,
        current && style.current,
        icon === 'valid' && style.valid,
        icon === 'invalid' && style.invalid,
        icon === 'errors-number' && style.errorsNumber
      )}
      data-name="status-item"
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

StatusItem.propTypes = propTypes;

export default StatusItem;
