/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import {NovaCompositionCoorpacademyMagicWand as MagicWand} from '@coorpacademy/nova-icons';
import get from 'lodash/fp/get';
import Button from '../../atom/button';
import style from './style.css';

const createMarkUp = (title, subtitle) => {
  if (subtitle) {
    return `<p>${title}</p><p>${subtitle} </p>`;
  }
  return `<p class="headerTitle">${title}</p>`;
};
const Header = ({title, subTitle}) => {
  const __html = createMarkUp(title, subTitle);
  return <div className={style.headerContainer} dangerouslySetInnerHTML={{__html}} />;
};

const QrCodeImage = ({showMobileAppAccess, url, preMessage, linkMessage, endMessage}) => {
  return (
    <div className={style.qrcodeWrapper}>
      <img src={url} />
      {showMobileAppAccess && (
        <div className={style.qrcodeOverlay}>
          <div className={style.qrcodeModal}>
            <span>{preMessage}</span>
            <a href="mailto:assistance@coorpacademy.com">
              <span>{linkMessage}</span>
            </a>
            <span>{endMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
};

const MagicLink = ({disabled, submitValue, url, color}) => {
  return (
    <div className={style.buttonWrapper}>
      <Button color={color} disabled={disabled} href={url} type="link" submitValue={null}>
        <div className={style.iconWrapper}>
          <MagicWand className={style.magicLinkIcon} />
          <p>{submitValue}</p>
        </div>
      </Button>
    </div>
  );
};

const StoresLinks = ({
  onAppStoreButtonClick,
  appStoreButtonImageUrl,
  playStoreButtonImageUrl,
  onPlayStoreButtonClick
}) => {
  return (
    <div className={style.storeLinksContainer}>
      <img className={style.img} src={appStoreButtonImageUrl} onClick={onAppStoreButtonClick} />
      <img className={style.img} src={playStoreButtonImageUrl} onClick={onPlayStoreButtonClick} />
    </div>
  );
};

const Divider = ({word}) => (
  <div className={style.dividerWrapper}>
    <div className={style.divider} />
    <p>{word}</p>
    <div className={style.divider} />
  </div>
);

// eslint-disable-next-line react/prefer-stateless-function
class GetTheApp extends React.Component {
  render() {
    const {
      onAppStoreButtonClick,
      appStoreButtonImageUrl,
      playStoreButtonImageUrl,
      onPlayStoreButtonClick,
      step1Title,
      step1SubTitle,
      step2Title,
      qrCodeTitle,
      qrCodeSubTitle,
      magicLinkTitle,
      magicLinkSubTitle,
      diviserWord,
      qrCodeImageUrl,
      magicLinkUrl,
      disabled,
      showMobileAppAccess,
      submitValue,
      onMagicLinkButtonClick,
      preMessage,
      linkMessage,
      endMessage
    } = this.props;
    const {skin} = this.context;
    const primaryColor = get('common.primary', skin);
    return (
      <div className={style.container}>
        <div className={style.store}>
          <Header title={step1Title} subTitle={step1SubTitle} />
          <StoresLinks
            onAppStoreButtonClick={onAppStoreButtonClick}
            appStoreButtonImageUrl={appStoreButtonImageUrl}
            playStoreButtonImageUrl={playStoreButtonImageUrl}
            onPlayStoreButtonClick={onPlayStoreButtonClick}
          />
        </div>
        <div className={style.secondStepWrapper}>
          <Header title={step2Title} />
          <div className={style.connectionWrapper}>
            <div className={style.wrapper}>
              <Header title={qrCodeTitle} subTitle={qrCodeSubTitle} />
              <QrCodeImage
                showMobileAppAccess={showMobileAppAccess}
                url={qrCodeImageUrl}
                preMessage={preMessage}
                linkMessage={linkMessage}
                endMessage={endMessage}
              />
            </div>
            <Divider word={diviserWord} />
            <div className={style.wrapper}>
              <Header title={magicLinkTitle} subTitle={magicLinkSubTitle} />
              <MagicLink
                color={primaryColor}
                onSubmit={onMagicLinkButtonClick}
                submitValue={submitValue}
                disabled={disabled}
                url={magicLinkUrl}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

GetTheApp.propTypes = {
  onAppStoreButtonClick: PropTypes.func,
  appStoreButtonImageUrl: PropTypes.string,
  playStoreButtonImageUrl: PropTypes.string,
  onPlayStoreButtonClick: PropTypes.func,
  step1Title: PropTypes.string,
  step1SubTitle: PropTypes.string,
  step2Title: PropTypes.string,
  qrCodeTitle: PropTypes.string,
  qrCodeSubTitle: PropTypes.string,
  preMessage: PropTypes.string,
  linkMessage: PropTypes.string,
  endMessage: PropTypes.string,
  magicLinkTitle: PropTypes.string,
  magicLinkSubTitle: PropTypes.string,
  diviserWord: PropTypes.string,
  qrCodeImageUrl: PropTypes.string,
  magicLinkUrl: PropTypes.string,
  disabled: PropTypes.bool,
  showMobileAppAccess: PropTypes.bool,
  submitValue: PropTypes.string,
  onMagicLinkButtonClick: PropTypes.func
};

export default GetTheApp;
