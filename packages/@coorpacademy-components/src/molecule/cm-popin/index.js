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
  const {
    content,
    firstButtonLabel,
    onFirstButtonClick,
    secondButtonLabel,
    onSecondButtonClick,
    onClose,
    type,
    icon
  } = props;

  const logo = {
    AlertDiamond,
    WindowUpload
  };
  const LogoComponent = logo[icon];

  return (
    <div className={style.background}>
      <div className={style.popin}>
        <header className={style.popinHeader}>
          {type === 'warningWithClose' ? (
            <div className={style.headerCloseIconContainer} onClick={onClose} data-name={'close-icon'}>
              <Close className={style.headerCloseIcon} />
            </div>
          ) : null}
        </header>
        <div className={style.contentSection}>
          {LogoComponent ? <LogoComponent className={style.icon} /> : null}
          <p
            className={style.content}
            data-name={`cm-popin-content-${type}`}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: content}}
          />
        </div>

        <div className={style.buttonContainer}>
          {firstButtonLabel ? (
            <Cta
              submitValue={firstButtonLabel}
              onClick={onFirstButtonClick}
              name={`cm-popin-cta-${type}`}
              className={style.button}
              buttonContentClassName={style.buttonContent}
            />
          ) : null}
          {secondButtonLabel ? (
            <Cta
              submitValue={secondButtonLabel}
              onClick={onSecondButtonClick}
              name={`cm-popin-cta-${type}`}
              className={style.button}
              buttonContentClassName={classNames([
                style.buttonContent,
                type === 'dangerous' ? style.dangerousButton : style.coloredButton
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
  firstButtonLabel: PropTypes.string,
  onFirstButtonClick: PropTypes.func,
  secondButtonLabel: PropTypes.string,
  onSecondButtonClick: PropTypes.func,
  onClose: PropTypes.func,
  type: PropTypes.oneOf(['warning', 'warningWithClose', 'dangerous']),
  icon: PropTypes.string
};

export default CMPopin;
