import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {NovaSolidInterfaceFeedbackInterfaceAlertDiamond as QuestionIcon} from '@coorpacademy/nova-icons';
import Link from '../../atom/link';
import style from './style.css';

const Banner = props => {
  const {type, message, firstCTA, firstCTALabel, secondeCTALabel, secondeCTA} = props;
  return (
    <div className={classnames(style.banner, type === 'error' && style.errorBanner)}>
      
      <div data-name={`${type}-banner-message`} className={style.message}>
      <QuestionIcon className={style.icon} />
        {message}
      </div>
        {firstCTALabel ? (
          <Link
            data-name="first-banner-cta"
            className={style.button}
            onClick={firstCTA}
        
          >{firstCTALabel}</Link>
        ) : null}
        {firstCTALabel && secondeCTALabel && <div className={style.buttonsBar}/>}
        {secondeCTALabel ? (
          <Link
            data-name="seconde-banner-cta"
            className={style.button}
            onClick={secondeCTA}
            >{secondeCTALabel}</Link>
        ) : null}
    </div>
  );
};

Banner.propTypes = {
  type: PropTypes.oneOf('information', 'error'),
  message: PropTypes.string.isRequired,
  firstCTA: PropTypes.func,
  firstCTALabel: PropTypes.string,
  secondeCTALabel: PropTypes.string,
  secondeCTA: PropTypes.func
};

export default Banner;
