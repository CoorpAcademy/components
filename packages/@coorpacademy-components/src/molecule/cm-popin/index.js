import React, {useRef, useEffect, useMemo} from 'react';
import {
  NovaSolidInterfaceFeedbackInterfaceAlertDiamond as AlertDiamond,
  NovaSolidApplicationsWindowUpload3 as WindowUpload,
  NovaLineSettingsCookie as Cookie,
  NovaSolidSpaceMoonRocket as MoonRocket,
  NovaCompositionCoorpacademyPadlock as LockIcon,
  NovaLineStatusCheckCircle1 as CheckCircle1,
  NovaSolidFilesBasicFileLines as FileLinesIcon,
  NovaSolidInterfaceFeedbackInterfaceAlertRounded as AlertIcon
} from '@coorpacademy/nova-icons';
import map from 'lodash/fp/map';
import isEmpty from 'lodash/fp/isEmpty';
import classNames from 'classnames';
import Provider from '../../atom/provider';
import ButtonLink from '../../atom/button-link';
import ButtonLinkIcon from '../../atom/button-link-icon';
import InputSwitch from '../../atom/input-switch';
import Title from '../../atom/title';
import CardsGrid from '../../organism/cards-grid';
import ListItems from '../../organism/list-items';
import Link from '../../atom/link';
import Icon from '../../atom/icon';
import style from './style.css';
import propTypes from './types';

// DEPRECATED
const LOGO = {
  AlertDiamond,
  WindowUpload,
  MoonRocket,
  CheckCircle1,
  AlertIcon
};

const IconType = {
  lockedContent: <LockIcon className={style.lockIcon} />,
  fileZipped: (
    <div className={style.filesListIconContainer}>
      <FileLinesIcon className={style.filesListIcon} />
    </div>
  )
};

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
    items,
    link
  } = props;

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
      const handleKeyDown = e => {
        if (e?.key === 'Escape') {
          handleCloseButton();
        }
      };
      document.addEventListener('click', closePopin);
      document.addEventListener('touchstart', closePopin);
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('click', closePopin);
        document.removeEventListener('touchstart', closePopin);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [handleCloseButton, mode, onClose]);

  const wrapperPopinStyle = classNames(
    style.popin,
    mode === 'cookie' && style.popinCookie,
    mode === 'list' && style.popinFilesList,
    mode === 'items' && style.popinItems
  );

  const buildIcon = () => {
    if (typeof icon === 'string') {
      const LogoComponent = LOGO[icon];
      return LogoComponent ? <LogoComponent className={style.icon} /> : null;
    }

    return !isEmpty(icon) ? <Icon {...icon} className={style.icon} /> : null;
  };

  const buildHeader = () => {
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
  };

  const renderHeader = () => {
    const headerContent = buildHeader();
    const close = onClose ? (
      <div className={style.onCloseButton}>
        <ButtonLinkIcon
          onClick={handleCloseButton}
          data-name={'close-icon'}
          aria-label={'close-icon'}
          size="small"
          icon="close"
        />
      </div>
    ) : null;

    if (isEmpty(headerContent) && isEmpty(close)) return null;

    return (
      <header className={style.popinHeader}>
        {headerContent}
        {close}
      </header>
    );
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
    if (isEmpty(items)) return null;
    const {type, list} = items;

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

  const renderContent = () => {
    if (mode === 'items' || mode === 'list') return;

    const isCookieOrInformations = mode === 'cookie' || mode === 'information';
    const renderContentTitle = () => {
      if (!content) return null;

      if (isCookieOrInformations)
        return (
          <p
            className={mode === 'alert' ? style.content : style.message}
            data-name={'cm-popin-content'}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: content}}
          />
        );

      return (
        <div className={mode === 'alert' ? style.content : style.message}>
          <Title title={content} data-name={'cm-popin-content'} />
        </div>
      );
    };

    return (
      <div className={isCookieOrInformations ? style.cookieTitleContainer : style.titleContainer}>
        {buildIcon()}
        <div className={style.contentSection}>
          {renderContentTitle()}
          {descriptionText ? <div className={style.descriptionText}>{descriptionText}</div> : null}
        </div>
        {link ? <Link {...link} /> : null}
      </div>
    );
  };

  const renderButtons = () => {
    if (!firstButton && !secondButton && !thirdButton) return null;

    return (
      <div className={style.buttonContainer}>
        {firstButton ? (
          <div className={firstButton.largeButton ? style.largeButton : style.button}>
            <ButtonLink
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
            <ButtonLink
              label={secondButton.label}
              onClick={secondButton.handleOnclick}
              data-name={`cm-popin-cta-${secondButton.type}`}
              aria-label={secondButton['aria-label']}
              type={secondButton.type}
              customStyle={secondButton.customStyle}
              icon={secondButton.icon}
            />
          </div>
        ) : null}
        {thirdButton ? (
          <div className={thirdButton.largeButton ? style.largeButton : style.button}>
            <ButtonLink
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
    );
  };

  return (
    <div
      className={mode !== 'cookie' ? style.background : null}
      style={backgroundImageStyle}
      data-name={'cm-popin-container'}
    >
      <div className={wrapperPopinStyle} ref={nodeRef}>
        {renderHeader()}
        {renderContent()}
        {descriptionBtnTxt ? <div className={style.descriptionBtn}>{descriptionBtnTxt}</div> : null}
        {renderItems()}
        {renderBtnSwitch()}
        {renderButtons()}
      </div>
    </div>
  );
};

CMPopin.propTypes = propTypes;
CMPopin.contextTypes = {
  translate: Provider.childContextTypes.translate
};

export default CMPopin;
