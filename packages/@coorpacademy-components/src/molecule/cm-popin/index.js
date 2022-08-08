import React from 'react';
import PropTypes from 'prop-types';
import {
  NovaSolidInterfaceFeedbackInterfaceAlertDiamond as AlertDiamond,
  NovaSolidApplicationsWindowUpload3 as WindowUpload,
  NovaLineSettingsCookie as Cookie
} from '@coorpacademy/nova-icons';
import Cta from '../../atom/button-link';
import ButtonLinkIconOnly from '../../atom/button-link-icon-only';
import InputSwitch from '../../atom/input-switch';
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
    descriptionText,
    thirdButton,
    cookieTitle,
    descriptionBtnTxt,
    firstBtnSwitch,
    secondBtnSwitch,
    thirdBtnSwitch,
    fourthBtnSwitch
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
  const renderHeader = () => {
    if (header) return <img className={style.headerBackground} src={header} />;
    if (mode === 'cookie')
      return (
        <div className={style.cookieHeader}>
          <div className={style.cookieIconContainer}>
            <Cookie className={style.cookieIcon} />
          </div>
          <div className={style.cookieTitle}>{cookieTitle}</div>
        </div>
      );
    return null;
  };

  return (
    <div
      className={mode !== 'cookie' ? style.background : null}
      style={backgroundImageStyle}
      data-name={'cm-popin-container'}
    >
      <div className={mode === 'cookie' ? style.popinCookie : style.popin}>
        <header className={style.popinHeader}>
          {renderHeader()}
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
                data-name={'cm-popin-content'}
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
        {descriptionBtnTxt ? <div className={style.descriptionBtn}>{descriptionBtnTxt}</div> : null}
        {firstBtnSwitch ? (
          <div className={style.firstBtnSwitchContainer}>
            <InputSwitch
              {...{
                type: firstBtnSwitch.type,
                title: firstBtnSwitch.title,
                value: firstBtnSwitch.value,
                onChange: firstBtnSwitch.onChange,
                titlePosition: firstBtnSwitch.titlePosition,
                theme: firstBtnSwitch.theme
              }}
            />
          </div>
        ) : null}
        {secondBtnSwitch ? (
          <div className={style.singleSwitchContainer}>
            <InputSwitch
              {...{
                type: secondBtnSwitch.type,
                title: secondBtnSwitch.title,
                value: secondBtnSwitch.value,
                onChange: secondBtnSwitch.onChange,
                titlePosition: secondBtnSwitch.titlePosition,
                theme: secondBtnSwitch.theme,
                details: secondBtnSwitch.details,
                requiredSelection: secondBtnSwitch.requiredSelection,
                disabled: secondBtnSwitch.disabled
              }}
            />
          </div>
        ) : null}
        {thirdBtnSwitch ? (
          <div className={style.singleSwitchContainer}>
            <InputSwitch
              {...{
                type: thirdBtnSwitch.type,
                title: thirdBtnSwitch.title,
                value: thirdBtnSwitch.value,
                onChange: thirdBtnSwitch.onChange,
                titlePosition: thirdBtnSwitch.titlePosition,
                theme: thirdBtnSwitch.theme,
                details: thirdBtnSwitch.details
              }}
            />
          </div>
        ) : null}
        {fourthBtnSwitch ? (
          <div className={style.singleSwitchContainer}>
            <InputSwitch
              {...{
                type: fourthBtnSwitch.type,
                title: fourthBtnSwitch.title,
                value: fourthBtnSwitch.value,
                onChange: fourthBtnSwitch.onChange,
                titlePosition: fourthBtnSwitch.titlePosition,
                theme: fourthBtnSwitch.theme,
                details: fourthBtnSwitch.details
              }}
            />
          </div>
        ) : null}
        <div className={style.buttonContainer}>
          {firstButton ? (
            <div className={firstButton.largeButton ? style.largeButton : style.button}>
              <Cta
                label={firstButton.label}
                onClick={firstButton.handleOnclick}
                data-name={'cm-popin-cta'}
                aria-label={firstButton['aria-label']}
                type={firstButton.type}
              />
            </div>
          ) : null}
          {secondButton ? (
            <div className={secondButton.largeButton ? style.largeButton : style.button}>
              <Cta
                label={secondButton.label}
                onClick={secondButton.handleOnclick}
                data-name={`cm-popin-cta-${secondButton.type}`}
                aria-label={secondButton['aria-label']}
                type={secondButton.type}
              />
            </div>
          ) : null}
          {thirdButton ? (
            <div className={thirdButton.largeButton ? style.largeButton : style.button}>
              <Cta
                label={thirdButton.label}
                onClick={thirdButton.handleOnclick}
                data-name={`cm-popin-cta-${thirdButton.type}`}
                aria-label={thirdButton['aria-label']}
                type={thirdButton.type}
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
  mode: PropTypes.oneOf(['alert', 'information', 'cookie']),
  header: PropTypes.string,
  firstButton: PropTypes.shape({
    label: PropTypes.string,
    handleOnclick: PropTypes.func,
    'aria-label': PropTypes.string,
    type: PropTypes.string,
    largeButton: PropTypes.bool,
    type: PropTypes.oneOf(['dangerous', 'primary', 'secondary']),
  }),
  secondButton: PropTypes.shape({
    label: PropTypes.string,
    handleOnclick: PropTypes.func,
    type: PropTypes.oneOf(['dangerous', 'primary', 'secondary']),
    'aria-label': PropTypes.string,
    largeButton: PropTypes.boolean
  }),
  thirdButton: PropTypes.shape({
    label: PropTypes.string,
    handleOnclick: PropTypes.func,
    type: PropTypes.oneOf(['dangerous', 'primary', 'secondary']),
    'aria-label': PropTypes.string,
    largeButton: PropTypes.boolean
  }),
  onClose: PropTypes.func,
  icon: PropTypes.string,
  backgroundImageUrl: PropTypes.string,
  descriptionText: PropTypes.string,
  cookieTitle: PropTypes.string,
  descriptionBtnTxt: PropTypes.string,
  firstBtnSwitch: PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    titlePosition: PropTypes.oneOf(['right', 'left']),
    theme: PropTypes.oneOf(['default', 'coorpmanager', 'partielUncheck']),
    type: PropTypes.string
  }),
  secondBtnSwitch: PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    titlePosition: PropTypes.oneOf(['right', 'left']),
    theme: PropTypes.oneOf(['default', 'coorpmanager', 'partielUncheck']),
    details: PropTypes.string,
    requiredSelection: PropTypes.bool,
    disabled: PropTypes.bool,
    type: PropTypes.string
  }),
  thirdBtnSwitch: PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    titlePosition: PropTypes.oneOf(['right', 'left']),
    theme: PropTypes.oneOf(['default', 'coorpmanager', 'partielUncheck']),
    details: PropTypes.string,
    type: PropTypes.string
  }),
  fourthBtnSwitch: PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    titlePosition: PropTypes.oneOf(['right', 'left']),
    theme: PropTypes.oneOf(['default', 'coorpmanager', 'partielUncheck']),
    details: PropTypes.string,
    type: PropTypes.string
  })
};

export default CMPopin;
