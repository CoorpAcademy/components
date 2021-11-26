import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {keys} from 'lodash/fp';
import {
  NovaSolidInterfaceFeedbackInterfaceAlertDiamond as QuestionIcon,
  NovaCompositionCoorpacademyValidate as ValidateIcon
} from '@coorpacademy/nova-icons';
import Link from '../../atom/button-link';
import style from './style.css';

const ICONS = {
  success: ValidateIcon,
  error: QuestionIcon,
  warning: QuestionIcon
};

const Banner = props => {
  const {type, message, firstCTA, firstCTALabel, secondCTALabel, secondCTA, temporary} = props;
  const Icon = ICONS[type];
  return (
    <div
      className={classnames(
        style.banner,
        type === 'error' && style.errorBanner,
        type === 'success' && style.successBanner,
        temporary && style.temporaryBanner
      )}
      title={message}
    >
      <div data-name={`${type}-banner-message`} className={style.message}>
        <Icon className={classnames(style.icon, temporary && style.temporaryIcon)} />
        {message}
      </div>
      {firstCTALabel ? (
        <div className={style.button}>
          <Link
            data-name="first-banner-cta"
            aria-label={firstCTALabel}
            label={firstCTALabel}
            onClick={firstCTA}
            type="text"
          />
        </div>
      ) : null}
      {firstCTALabel && secondCTALabel ? <div className={style.buttonsBar} /> : null}
      {secondCTALabel ? (
        <div className={style.button}>
          <Link
            data-name="second-banner-cta"
            onClick={secondCTA}
            aria-label={secondCTALabel}
            label={secondCTALabel}
            type="text"
          />
        </div>
      ) : null}
    </div>
  );
};

Banner.propTypes = {
  type: PropTypes.oneOf(keys(ICONS)),
  message: PropTypes.string.isRequired,
  firstCTA: PropTypes.func,
  firstCTALabel: PropTypes.string,
  secondCTALabel: PropTypes.string,
  secondCTA: PropTypes.func,
  temporary: PropTypes.bool
};

export default Banner;
