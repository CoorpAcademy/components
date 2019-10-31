import React from 'react';
import PropTypes from 'prop-types';
import {NovaCompositionCoorpacademyMagicWand as MagicWand} from '@coorpacademy/nova-icons';
import get from 'lodash/fp/get';
import Button from '../../atom/button';
import style from './style.css';

const Header = ({step = undefined, header, subHeader = undefined}) => {
  return (
    <div className={style.headerContainer}>
      {(step && (
        <div className={style.headerWrapper}>
          <h1 className={style.step}>{step}</h1>
          <h1 className={style.header}>{header}</h1>
        </div>
      )) || <h1 className={style.header}>{header}</h1>}
      {subHeader && <h4 className={style.subHeader}>{subHeader}</h4>}
    </div>
  );
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
      <Button
        color={color}
        disabled={disabled}
        isLinkDisabled={disabled}
        href={url}
        type="link"
        submitValue={null}
      >
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
      storeStep,
      connectionStep,
      qrCodeStep,
      magicLinkStep,
      diviserWord,
      qrCodeImageUrl,
      magicLinkUrl,
      disabled,
      showMobileAppAccess,
      submitValue,
      preMessage,
      linkMessage,
      endMessage
    } = this.props;
    const {skin} = this.context;
    const primaryColor = get('common.primary', skin);
    return (
      <div className={style.container}>
        <div className={style.store}>
          <Header {...storeStep} />
          <StoresLinks
            onAppStoreButtonClick={onAppStoreButtonClick}
            appStoreButtonImageUrl={appStoreButtonImageUrl}
            playStoreButtonImageUrl={playStoreButtonImageUrl}
            onPlayStoreButtonClick={onPlayStoreButtonClick}
          />
        </div>
        <div className={style.secondStepWrapper}>
          <Header {...connectionStep} />
          <div className={style.connectionWrapper}>
            <div className={style.wrapper}>
              <Header {...qrCodeStep} />
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
              <Header {...magicLinkStep} />
              <MagicLink
                color={primaryColor}
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
  storeStep: PropTypes.shape({
    step: PropTypes.string,
    header: PropTypes.string,
    subHeader: PropTypes.string
  }),
  connectionStep: PropTypes.shape({
    step: PropTypes.string,
    header: PropTypes.string
  }),
  qrCodeStep: PropTypes.shape({
    header: PropTypes.string,
    subHeader: PropTypes.string
  }),
  magicLinkStep: PropTypes.shape({
    header: PropTypes.string,
    subHeader: PropTypes.string
  }),
  preMessage: PropTypes.string,
  linkMessage: PropTypes.string,
  endMessage: PropTypes.string,
  diviserWord: PropTypes.string,
  qrCodeImageUrl: PropTypes.string,
  magicLinkUrl: PropTypes.string,
  disabled: PropTypes.bool,
  showMobileAppAccess: PropTypes.bool,
  submitValue: PropTypes.string
};

export default GetTheApp;
