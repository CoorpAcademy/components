import React from 'react';
import PropTypes from 'prop-types';
import {
  NovaSolidInterfaceFeedbackInterfaceAlertDiamond as AlertDiamond,
  NovaSolidApplicationsWindowUpload3 as WindowUpload,
  NovaLineSettingsCookie as Cookie
} from '@coorpacademy/nova-icons';
import map from 'lodash/fp/map';
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
    listBtnSwicth
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
        {renderBtnSwitch()}
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
    largeButton: PropTypes.bool,
    type: PropTypes.oneOf(['dangerous', 'primary', 'secondary', 'tertiary'])
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
  listBtnSwicth: PropTypes.arrayOf(PropTypes.shape(InputSwitch.propTypes))
};

export default CMPopin;
