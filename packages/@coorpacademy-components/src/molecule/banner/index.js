import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  NovaSolidInterfaceFeedbackInterfaceAlertDiamond as QuestionIcon,
  NovaCompositionCoorpacademyValidate as ValidateIcon
} from '@coorpacademy/nova-icons';
import Link from '../../atom/button-link';
import style from './style.css';

const Banner = props => {
  const {type, message, firstCTA, firstCTALabel, secondCTALabel, secondCTA, temporary} = props;
  return (
    <div
      className={classnames(
        style.banner,
        type === 'error' && style.errorBanner,
        type === 'success' && temporary && style.successTemporaryBanner,
        type === 'error' && temporary && style.errorTemporaryBanner
      )}
      title={message}
    >
      <div data-name={`${type}-banner-message`} className={style.message}>
        {type === 'success' ? (
          <ValidateIcon className={classnames(style.icon, temporary && style.temporaryIcon)} />
        ) : (
          <QuestionIcon className={classnames(style.icon, temporary && style.temporaryIcon)} />
        )}

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
  type: PropTypes.oneOf(['information', 'error', 'success']),
  message: PropTypes.string.isRequired,
  firstCTA: PropTypes.func,
  firstCTALabel: PropTypes.string,
  secondCTALabel: PropTypes.string,
  secondCTA: PropTypes.func,
  temporary: PropTypes.bool
};

export default Banner;
