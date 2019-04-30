/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atom/button';
import style from './style.css';

const Header = ({title, subTitle}) => {
  return (
    <div className={style.headerContainer}>
      <p className={style.headerTitle} dangerouslySetInnerHTML={{__html: title}} />
      {subTitle && (
        <p className={style.headerSubTitle} dangerouslySetInnerHTML={{__html: subTitle}} />
      )}
    </div>
  );
};

const QrCodeImage = ({url}) => {
  return (
    <div className={style.qrCodeImageWrapper}>
      <img src={url} />
    </div>
  );
};

const MagicLink = ({disabled, url}) => {
  return (
    <div className={style.buttonWrapper}>
      <Button disabled={disabled} href={url} type="a" />
    </div>
  );
};

const StoresLinks = ({
  appStoreAppUrl,
  appStoreButtonImageUrl,
  playStoreButtonImageUrl,
  playStoreAppUrl
}) => {
  return (
    <div className={style.storeLinksContainer}>
      <img
        className={style.img}
        src={appStoreButtonImageUrl}
        onClick={() => window.open(appStoreAppUrl)}
      />
      <img
        className={style.img}
        src={playStoreButtonImageUrl}
        onClick={() => window.open(playStoreAppUrl)}
      />
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

const GetTheApp = ({
  appStoreAppUrl,
  appStoreButtonImageUrl,
  playStoreButtonImageUrl,
  playStoreAppUrl,
  step1Title,
  step1SubTitle,
  step2Title,
  qrCodeTitle,
  magicLinkTitle,
  diviserWord,
  qrCodeImageUrl,
  magicLinkUrl,
  disabled
}) => {
  return (
    <div className={style.container}>
      <div className={style.store}>
        <Header title={step1Title} subTitle={step1SubTitle} />
        <StoresLinks
          appStoreAppUrl={appStoreAppUrl}
          appStoreButtonImageUrl={appStoreButtonImageUrl}
          playStoreButtonImageUrl={playStoreButtonImageUrl}
          playStoreAppUrl={playStoreAppUrl}
        />
      </div>
      <div className={style.secondStepWrapper}>
        <Header title={step2Title} />
        <div className={style.connectionWrapper}>
          <div className={style.wrapper}>
            <Header title={qrCodeTitle} />
            <QrCodeImage url={qrCodeImageUrl} />
          </div>
          <Divider word={diviserWord} />
          <div className={style.wrapper}>
            <Header title={magicLinkTitle} />
            <MagicLink disabled={disabled} url={magicLinkUrl} />
          </div>
        </div>
      </div>
    </div>
  );
};

GetTheApp.propTypes = {
  appStoreAppUrl: PropTypes.string,
  appStoreButtonImageUrl: PropTypes.string,
  playStoreButtonImageUrl: PropTypes.string,
  playStoreAppUrl: PropTypes.string,
  step1Title: PropTypes.string,
  step1SubTitle: PropTypes.string,
  step2Title: PropTypes.string,
  qrCodeTitle: PropTypes.string,
  magicLinkTitle: PropTypes.string,
  diviserWord: PropTypes.string,
  qrCodeImageUrl: PropTypes.string,
  magicLinkUrl: PropTypes.string,
  disabled: PropTypes.bool
};

export default GetTheApp;
