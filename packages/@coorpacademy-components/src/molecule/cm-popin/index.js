import React from 'react';
import PropTypes from 'prop-types';
import {
  NovaSolidInterfaceFeedbackInterfaceAlertDiamond as AlertDiamond,
  NovaSolidApplicationsWindowUpload3 as WindowUpload
} from '@coorpacademy/nova-icons';
import Cta from '../../atom/button-link';
import ButtonLinkIconOnly from '../../atom/button-link-icon-only';
import style from './style.css';

const CMPopin = props => {
  const {
    content,
    mode = 'alert',
    firstButton,
    secondButton,
    onClose,
    header,
    icon,
    backgroundImageUrl,
    descriptionText
  } = props;

  const logo = {
    AlertDiamond,
    WindowUpload
  };
  const LogoComponent = logo[icon];

  const backgroundImageStyle = backgroundImageUrl
    ? {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover'
      }
    : null;

  return (
    <div className={style.background} style={backgroundImageStyle}>
      <div className={style.popin}>
        <header className={style.popinHeader}>
          {header ? <img className={style.headerBackground} src={header} /> : null}
          {onClose ? (
            <ButtonLinkIconOnly
              onClick={onClose}
              data-name={'close-icon'}
              aria-label={'close-icon'}
              size="small"
              icon="close"
            />
          ) : null}
        </header>
        <div className={style.titleContainer}>
          <div className={style.contentSection}>
            {LogoComponent ? <LogoComponent className={style.icon} /> : null}
            {content ? (
              <p
                className={mode === 'alert' ? style.content : style.message}
                data-name={`cm-popin-content`}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{__html: content}}
              />
            ) : null}
          </div>
          {descriptionText ? (
            <p
              className={style.descriptionText}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{__html: descriptionText}}
            />
          ) : null}
        </div>
        <div className={style.buttonContainer}>
          {firstButton ? (
            <div className={style.button}>
              <Cta
                label={firstButton.label}
                onClick={firstButton.handleOnclick}
                data-name={`cm-popin-cta`}
                aria-label={firstButton['aria-label']}
                type={firstButton.type}
              />
            </div>
          ) : null}
          {secondButton ? (
            <div className={style.button}>
              <Cta
                label={secondButton.label}
                onClick={secondButton.handleOnclick}
                data-name={`cm-popin-cta-${secondButton.type}`}
                aria-label={firstButton['aria-label']}
                type={secondButton.type}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

CMPopin.propTypes = {
  content: PropTypes.string,
  mode: PropTypes.oneOf(['alert', 'information']),
  header: PropTypes.string,
  firstButton: PropTypes.shape({
    label: PropTypes.string,
    handleOnclick: PropTypes.func,
    'aria-label': PropTypes.string,
    type: PropTypes.string
  }),
  secondButton: PropTypes.shape({
    label: PropTypes.string,
    handleOnclick: PropTypes.func,
    type: PropTypes.oneOf(['dangerous', 'primary']),
    'aria-label': PropTypes.string
  }),
  onClose: PropTypes.func,
  icon: PropTypes.string,
  backgroundImageUrl: PropTypes.string,
  descriptionText: PropTypes.string
};

export default CMPopin;
