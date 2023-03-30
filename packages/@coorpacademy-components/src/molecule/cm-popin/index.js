import React from 'react';
import {
  NovaSolidInterfaceFeedbackInterfaceAlertDiamond as AlertDiamond,
  NovaSolidApplicationsWindowUpload3 as WindowUpload,
  NovaLineSettingsCookie as Cookie,
  NovaSolidSpaceMoonRocket as MoonRocket,
  NovaLineStatusCheckCircle1 as CheckCircle1
} from '@coorpacademy/nova-icons';
import map from 'lodash/fp/map';
import Cta from '../../atom/button-link';
import ButtonLinkIconOnly from '../../atom/button-link-icon-only';
import InputSwitch from '../../atom/input-switch';
import style from './style.css';
import propTypes from './types';

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
    listBtnSwicth
  } = props;

  const logo = {
    AlertDiamond,
    WindowUpload,
    MoonRocket,
    CheckCircle1
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
  const getClassBtnSwitch = (index, btnList) => {
    switch (index) {
      case 0:
        return style.firstBtnSwitchContainer;
      case btnList.length - 1:
        return style.lastBtnSwitchContainer;
      default:
        return style.singleSwitchContainer;
    }
  };
  const renderBtnSwitch = () => {
    return map.convert({cap: false})((el, index) => {
      const {
        type,
        title,
        value,
        onChange,
        titlePosition,
        theme,
        details,
        requiredSelection,
        disabled,
        id,
        'data-name': dataName
      } = el;
      return (
        <div key={index} className={getClassBtnSwitch(index, listBtnSwicth)}>
          <InputSwitch
            {...{
              type,
              title,
              value,
              onChange,
              titlePosition,
              theme,
              details,
              requiredSelection,
              disabled,
              id,
              'data-name': dataName
            }}
          />
        </div>
      );
    })(listBtnSwicth);
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
        <div
          className={
            mode === 'cookie' || mode === 'information'
              ? style.cookieTitleContainer
              : style.titleContainer
          }
        >
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
        {renderBtnSwitch()}
        {firstButton || secondButton || thirdButton ? (
          <div className={style.buttonContainer}>
            {firstButton ? (
              <div className={firstButton.largeButton ? style.largeButton : style.button}>
                <Cta
                  label={firstButton.label}
                  onClick={firstButton.handleOnclick}
                  data-name={'cm-popin-cta'}
                  aria-label={firstButton['aria-label']}
                  type={firstButton.type}
                  customStyle={firstButton.customStyle}
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
                  customStyle={secondButton.customStyle}
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
                  customStyle={thirdButton.customStyle}
                />
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

CMPopin.propTypes = propTypes;

export default CMPopin;
