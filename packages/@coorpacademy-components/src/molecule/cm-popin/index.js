import React from 'react';
import PropTypes from 'prop-types';
import {
  NovaSolidInterfaceFeedbackInterfaceAlertDiamond as AlertDiamond,
  NovaSolidApplicationsWindowUpload3 as WindowUpload,
  NovaSolidStatusClose as Close
} from '@coorpacademy/nova-icons';
import classNames from 'classnames';
import Cta from '../../atom/button';
import style from './style.css';

const CMPopin = props => {
  const {content, firstButton, secondButton, onClose, icon} = props;

  const logo = {
    AlertDiamond,
    WindowUpload
  };
  const LogoComponent = logo[icon];

  return (
    <div className={style.background}>
      <div className={style.popin}>
        <header className={style.popinHeader}>
          {onClose ? (
            <div
              className={style.headerCloseIconContainer}
              onClick={onClose}
              data-name={'close-icon'}
            >
              <Close className={style.headerCloseIcon} />
            </div>
          ) : null}
        </header>
        <div className={style.contentSection}>
          {LogoComponent ? <LogoComponent className={style.icon} /> : null}
          <p
            className={style.content}
            data-name={`cm-popin-content`}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: content}}
          />
        </div>

        <div className={style.buttonContainer}>
          {firstButton ? (
            <Cta
              submitValue={firstButton.label}
              onClick={firstButton.handleOnclick}
              name={`cm-popin-cta`}
              className={style.button}
              buttonContentClassName={style.buttonContent}
            />
          ) : null}
          {secondButton ? (
            <Cta
              submitValue={secondButton.label}
              onClick={secondButton.handleOnclick}
              name={`cm-popin-cta-${secondButton.type}`}
              className={style.button}
              buttonContentClassName={classNames([
                style.buttonContent,
                secondButton.type === 'dangerous' ? style.dangerousButton : style.coloredButton
              ])}
            />
          ) : null}
        </div>
      </div>
      )
    </div>
  );
};

CMPopin.propTypes = {
  content: PropTypes.string,
  firstButton: PropTypes.shape({
    label: PropTypes.string,
    handleOnclick: PropTypes.func
  }),
  secondButton: PropTypes.shape({
    label: PropTypes.string,
    handleOnclick: PropTypes.func,
    type: PropTypes.oneOf(['warning', 'warningWithClose', 'dangerous', 'default'])
  }),
  onClose: PropTypes.func,
  icon: PropTypes.string
};

export default CMPopin;
