import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {NovaSolidInterfaceFeedbackInterfaceAlertDiamond as QuestionIcon} from '@coorpacademy/nova-icons';
import Link from '../../atom/link';
import style from './style.css';

const Banner = props => {
  const {type, message, firstCTA, firstCTALabel, secondCTALabel, secondCTA} = props;
  return (
    <div className={classnames(style.banner, type === 'error' && style.errorBanner)}>
      <div data-name={`${type}-banner-message`} className={style.message}>
        <QuestionIcon className={style.icon} />
        {message}
      </div>
      {firstCTALabel ? (
        <Link data-name="first-banner-cta" className={style.button} onClick={firstCTA}>
          {firstCTALabel}
        </Link>
      ) : null}
      {firstCTALabel && secondCTALabel ? <div className={style.buttonsBar} /> : null}
      {secondCTALabel ? (
        <Link data-name="second-banner-cta" className={style.button} onClick={secondCTA}>
          {secondCTALabel}
        </Link>
      ) : null}
    </div>
  );
};

Banner.propTypes = {
  type: PropTypes.oneOf(['information', 'error']),
  message: PropTypes.string.isRequired,
  firstCTA: PropTypes.func,
  firstCTALabel: PropTypes.string,
  secondCTALabel: PropTypes.string,
  secondCTA: PropTypes.func
};

export default Banner;
