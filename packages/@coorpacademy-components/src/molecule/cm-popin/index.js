// import React from 'react';
import React, {useRef, useEffect, useMemo} from 'react';
import {
  NovaSolidInterfaceFeedbackInterfaceAlertDiamond as AlertDiamond,
  NovaSolidApplicationsWindowUpload3 as WindowUpload,
  NovaLineSettingsCookie as Cookie,
  NovaSolidSpaceMoonRocket as MoonRocket,
  NovaCompositionCoorpacademyPadlock as LockIcon,
  NovaLineStatusCheckCircle1 as CheckCircle1,
  NovaSolidFilesBasicFileLines as FileLinesIcon
} from '@coorpacademy/nova-icons';
import map from 'lodash/fp/map';
import isEmpty from 'lodash/fp/isEmpty';
import classNames from 'classnames';
import Provider from '../../atom/provider';
import Cta from '../../atom/button-link';
import ButtonLinkIconOnly from '../../atom/button-link-icon-only';
import InputSwitch from '../../atom/input-switch';
import Title from '../../atom/title';
import CardsGrid from '../../organism/cards-grid';
import ListItems from '../../organism/list-items';
import style from './style.css';
import propTypes from './types';

const IconType = {
  lockedContent: <LockIcon className={style.lockIcon} />,
  fileZipped: (
    <div className={style.filesListIconContainer}>
      <FileLinesIcon className={style.filesListIcon} />
    </div>
  )
};
// const preventDefault = e => e.preventDefault();
// const stopPropagation = e => e.stopPropagation();

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
    listBtnSwicth,
    items
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
  const handleCloseButton = useMemo(() => () => onClose(), [onClose]);
  const nodeRef = useRef(null);
  useEffect(() => {
    if (mode === 'items') {
      const closePopin = e => {
        if (nodeRef && nodeRef.current && !nodeRef.current.contains(e.target)) {
          handleCloseButton();
        }
      };
      document.addEventListener('click', closePopin);
      return () => {
        document.removeEventListener('click', closePopin);
      };
    }
  }, [handleCloseButton, mode, onClose]);
  const renderHeader = () => {
    if (header) {
      const {title, headerIcon, backgroundImage} = header;
      const TopTitleIcon = IconType[headerIcon];

      return (
        <>
          {title ? (
            <div className={style.headerContent}>
              {TopTitleIcon}
              <Title {...title} />
            </div>
          ) : null}
          {backgroundImage ? (
            <img className={style.headerBackground} src={backgroundImage} />
          ) : null}
        </>
      );
    }

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

  const renderItems = () => {
    const {type, list} = items;
    if (isEmpty(list)) return null;

    if (type === 'content')
      return (
        <div className={style.itemsContainer} data-name={'cm-popin-cards'}>
          <CardsGrid {...list} />
        </div>
      );
    if (type === 'list')
      return (
        <div className={style.filesListContainer}>
          <ListItems {...list} />
        </div>
      );

    return null;
  };
  // const handleCloseButton = useCallback(
  //   e => {
  //     e.preventDefault();
  //     onClose();
  //   },
  //   [onClose]
  // );
  const wrapperPopinStyle = classNames(
    mode === 'cookie' && style.popinCookie,
    mode === 'list' && style.popinFilesList,
    mode === 'items' && style.popinItems,
    style.popin
  );
  return (
    <div
      className={mode !== 'cookie' ? style.background : null}
      style={backgroundImageStyle}
      data-name={'cm-popin-container'}
    >
      <div className={wrapperPopinStyle} ref={nodeRef}>
        <header className={style.popinHeader}>
          {renderHeader()}
          {onClose ? (
            <ButtonLinkIconOnly
              onClick={handleCloseButton}
              data-name={'close-icon'}
              aria-label={'close-icon'}
              size="small"
              icon="close"
            />
          ) : null}
        </header>
        {mode !== 'items' && mode !== 'list' ? (
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
        ) : null}
        {descriptionBtnTxt ? <div className={style.descriptionBtn}>{descriptionBtnTxt}</div> : null}
        {!isEmpty(items) ? renderItems() : null}
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
CMPopin.contextTypes = {
  translate: Provider.childContextTypes.translate
};

export default CMPopin;
